# ADR & Post-Mortem (Lessons Learned)

> **Objective:** Document critical failures and chosen architectural solutions (ADR) during the Bookshelf deployment to prevent regressions in future microservice iterations.

---

## 🚨 Incident 1: Traefik Docker API Incompatibility

### Context
Traefik v2.10 failed to establish a connection with the host's Docker Daemon, resulting in 502/404 routing errors.

### Root Cause
The VPS Docker Engine was updated to API version `>= 1.40`, but the hardcoded client within Traefik `v2.10` expected `<= 1.24`.

### Decision/Lesson
- **Immediate Fix**: Define `DOCKER_API_VERSION=1.41` in the Traefik environment configuration.
- **Future standard**: Always utilize Traefik `v2.11+` or `v3.0+` for modern host compatibility.

---

## 🚨 Incident 2: Missing API Suffix in Production

### Context
The Next.js frontend threw `404 Cannot POST /auth/register` exclusively in production.

### Root Cause
`NEXT_PUBLIC_API_URL` was injected as `https://api-bookshelf.mediamanager.tech` without the `/api` global prefix required by the NestJS backend.

### Decision/Lesson
- **Immediate Fix**: Append `/api` to the GitHub Actions build arguments.
- **Future standard**: Strictly mirror `docker-compose.yml` (production) and `docker-compose.override.yml` (local) environment variable structures to prevent parity breaks.

---

## 🚨 Incident 3: Non-existent Database Tables

### Context
NestJS threw `P2021 The table public.users does not exist` upon first launch.

### Root Cause
The PostgreSQL container launched correctly, but the Prisma schema was never pushed to the remote instance.

### Decision/Lesson
- **Immediate Fix**: Executed `npx --yes prisma@5.11.0 db push --schema=...` manually inside the API container.
- **Future standard**: Automate database migrations. Introduce a CI/CD step or an `init-container` to run `prisma migrate deploy` automatically before the API starts.

---

## ✅ Confirmed Best Practices for Next Project

1. **Turborepo**: Start with Turborepo on Day 1. The speed and caching benefits are critical for full-stack iteration.
2. **Explicit Networks**: Do not rely on Docker's default bridge. Explicitly define external networks (`gateway_network`) for reverse proxy topologies.
3. **Volume Flags**: Use `docker compose up -d --force-recreate` when changing labels or environment variables to defeat container layer caching.
