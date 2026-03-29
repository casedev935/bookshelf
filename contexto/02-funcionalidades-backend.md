# Backend Architecture & API (Bookshelf)

> **Objective:** Provide a scalable, secure, and performant REST API using NestJS to power the Bookshelf frontend and manage PostgreSQL data persistence.

---

## 🔐 Authentication Ecosystem

Robust identity management handling credentials and tokens.

| Component | Implementation | Purpose |
| :--- | :--- | :--- |
| **Password Hashing** | `Argon2` | Industry-standard protection against brute-force attacks. |
| **Access Tokens** | JWT (Short-lived) | Stateless authentication for API endpoints. |
| **Refresh Tokens** | Encrypted UUID/JWT | Continuous sessions without forcing frequent logins. |
| **Input Validation** | `class-validator` | Rejection of malformed requests at the controller boundary. |

---

## 📁 Data Management (Prisma ORM)

Type-safe database interaction layer.

- **Centralized Schema**: Source-of-truth for `User`, `Movie`, `Book`, `Series`, and `Category` models.
- **Multi-tenant Logic**: Isolation of media entities based on the authenticated user's ID.
- **Complex Queries**: Built-in support for filtering (by status), sorting, and public-only data retrieval.

---

## 🌐 External Integrations

Enriching user data automatically via third-party APIs.

- **TMDB Integration**: Automated fetching of movie/series posters, release years, and director information.
- **Image Proxying**: Mitigatation of CORS issues and hotlinking protections from external image sources.

---

## 🛠️ Infrastructure Operations

- **Seeding**: TypeScript seeders (`prisma/seed.ts`) to populate the database with default admin accounts or initial categories.
- **Migrations**: Declarative schema evolution via `prisma migrate deploy`.
- **Public API Isolation**: Dedicated, token-less endpoints (`/public/u/:username`) that strip sensitive data (e.g., email, internal IDs) before serialization.
