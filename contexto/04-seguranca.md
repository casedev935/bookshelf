# Security Architecture (Bookshelf)

> **Objective:** Ensure data integrity, prevent unauthorized access, and protect the infrastructure through defense-in-depth principles.

---

## 🛡️ Application Security

Defenses built into the application code (NestJS & Next.js).

| Mechanism | Implementation | Threat Prevented |
| :--- | :--- | :--- |
| **Password Storage** | `Argon2` Hashing | Brute-force dictionary attacks. |
| **Session Protection** | JWT (Headers) + LocalStorage | CSRF (Cross-Site Request Forgery) and unauthorized API access. |
| **CORS Policy** | Restricted Origins (Prod only) | Malicious domains consuming the API directly. |
| **Data Validation** | NestJS Validation Pipes | SQL Injection, XSS, and malformed payload panics. |

---

## 🔒 Infrastructure Security

Defenses at the network and server execution layer.

- **Secrets Isolation**: No hardcoded credentials. All variables (`DATABASE_URL`, `JWT_SECRET`) are injected via CI/CD pipelines (GitHub Actions -> Heredoc).
- **Transport Security**: Forced `HTTPS` via Traefik. Zero unencrypted traffic escapes the node.
- **Database Boundary**: The PostgreSQL container exposes zero ports to the public internet (`0.0.0.0` bindings removed). It is only accessible internally via the Docker bridge network (`default`).
- **Container Hardening**: Base images (`node:20-slim`) minimize the available attack surface by omitting unnecessary OS packages.

---

## 🚫 Leakage Prevention

- **Sanitization Layer**: The public profile endpoint (`/public/u/:username`) acts as an explicit DTO (Data Transfer Object) boundary. It actively strips `email`, `password`, and UUID fields before serialization.
- **Heredoc Escaping**: Secure deployment scripts (`sed 's/^[[:space:]]*//'`) prevent Linux shell injections during automated `.env` constructions.
