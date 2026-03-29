# Resource Optimization (Disk & VPS)

> **Objective:** Guidelines for operating multi-project microservices efficiently on a cost-sensitive VPS without exhausting storage or memory resources.

---

## 🐳 Docker Lifecycle Management

Docker caching can rapidly consume 100% of a VPS SSD.

| Action | Command | Frequency | Impact |
| :--- | :--- | :--- | :--- |
| **System Prune** | `docker system prune -af --volumes` | Monthly | Recovers GBs of dangling images and unused networks. |
| **Log Rotation** | Edit `daemon.json` (`max-size: 10m`) | Once (Setup) | Prevents container logs from growing infinitely. |

---

## 💾 Application Base Images

The choice of Docker base image dictates your baseline disk footprint.

- **Node Slim / Alpine**: Always use `node:20-slim` (~75MB) or `node:20-alpine` (~40MB) instead of full Debian images (~350MB).
- **Next.js Standalone**: Leverage Next.js `output: 'standalone'` in `next.config.js`. This copies only necessary traces, reducing the image size from ~500MB to ~80MB.
- **Multi-stage Builds**: Ensure `/node_modules` used for building (TypeScript, ESLint) never enters the final production `runner` stage.

---

## 🔄 Microservices Density Strategy (Next Project)

When hosting multiple applications on a single VPS:

1. **Shared Reverse Proxy**: 
   - Never deploy multiple Nginx/Traefik instances. 
   - Deploy **one** Traefik container on a `gateway_network` and attach all future microservices to this single network via labels.
2. **Shared Database Instance**: 
   - Running multiple `postgres` containers wastes baseline RAM (approx 100-200MB each).
   - Use a **single** PostgreSQL container and create separate logical databases (`CREATE DATABASE project_b`) for each microservice.
   - Adjust connection strings: `postgresql://user:pass@db:5432/project_b`.
3. **Prisma Client Generation**: 
   - Generate the Prisma Client only against the specific schema needed. Do not bundle massive monorepo `.prisma` caches into microservice images.
