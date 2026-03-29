# Frontend Architecture & Features (Bookshelf)

> **Objective:** Deliver a highly responsive, Neo-brutalist user interface for managing personal multimedia collections, leveraging Next.js 15 App Router.

---

## 🎨 UI/UX Design System

The application utilizes a **Neo-brutalist** design language to create a striking, memorable user experience.

| Element | Implementation Details |
| :--- | :--- |
| **Aesthetics** | Solid black borders, high-contrast backgrounds, and distinct, vibrant accent colors. |
| **Micro-Interactions** | CSS transitions on hover states (buttons, inputs) and active states for tactile feedback. |
| **Responsive Grid** | Tailwind CSS utility classes ensure seamless adaptation from mobile to ultra-wide desktop displays. |

---

## 🔑 Authentication Flow

Secure and seamless user onboarding and session management.

| Feature | Description | Security Measure |
| :--- | :--- | :--- |
| **User Registration** | Real-time password strength validation checklist. | Client-side rule enforcement before API request. |
| **Login/Logout** | Standard credentials-based authentication. | JWT stored securely; automatic invalidation on logout. |
| **Session Hydration** | Next.js state management for persistent user sessions. | Context API / Middleware interceptors for protected routes. |

---

## 📚 Core Media Management

The core domain of the Bookshelf application.

- **Centralized Dashboard**: Unified view of Movies, Books, and Series.
- **Dynamic Media Cards**: Visual representation with posters, release years, and current status (`Próximo`, `Assistindo`, `Finalizado`).
- **Interactive Modals**: Seamless overlay interfaces for rapid media addition and metadata editing.
- **Taxonomy**: Custom user-defined categories for granular organization.

---

## 🌍 Public Sharing & Privacy

Social features designed with privacy-first defaults.

- **Public Profiles (`/u/:username`)**: Read-only public views of non-private collections.
- **Privacy Toggles**: Instant visibility toggles located in the main Sidebar.
- **SEO Optimization**: Next.js metadata API implementation for rich social sharing previews.
