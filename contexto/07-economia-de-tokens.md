# Token Optimization & AI Context Guidelines

> **Objective:** Maximize the intelligence and accuracy of AI Coding Agents (like Antigravity) while minimizing token expenditure and redundant context reading.

---

## 🧠 Strict Context Focus (Zero Waste)

AI agents charge per token read. Reading unnecessary files wastes budget and dilution logic.

| Strategy | Implementation |
| :--- | :--- |
| **Static Artifacts** | Rely on `task.md` and `implementation_plan.md`. This gives the AI persistent state memory without rereading the entire codebase. |
| **Directive Action** | If an error is obvious (e.g., misspelled label), instruct the AI to "Fix X in file Y" rather than "Debug my app". |
| **Explicit Paths** | Provide exact, absolute paths when asking questions. E.g., *"Review `/apps/web/page.tsx`"* instead of *"Review my frontend"*. |

---

## 🛠️ Automation & Workflows

Leverage the AI's internal skill execution engine.

- **Workflow Scripts**: Store common complex operations in `.agent/workflows`. 
  - *Example*: A `/deploy` workflow that automatically runs tests, linting, and DB checks before pushing.
- **Reference Prompts**: Maintain a `prompt.md` containing the project's "Golden Rules" (e.g., *Neo-brutalist UI, Zero Hardcoding, NestJS standard*). The AI can parse this instantly.

---

## 🚀 "Zero Hardcode" Architecture (Next Project)

The biggest token waste is asking an AI to find and replace hardcoded IPs or URLs across 15 files.

### The Rule
**Never hardcode a domain, port, or secret in the codebase.**

### The Execution
1. **Twin Environments**: Keep `docker-compose.yml` (production) and `docker-compose.override.yml` (local) strictly synchronized.
2. **Global Configs**: Use `process.env.NEXT_PUBLIC_*` or NestJS `ConfigModule` for every external string.
3. **API Contracts First**: Write TypeScript Interfaces/DTOs before writing controller logic. If the AI knows the strict contract, it generates perfect code on the first try, avoiding "field missing" debugging loops.

---

> **Final Note**: Treat the AI Context like a limited whiteboard. Only put on the whiteboard what is strictly necessary to solve the current problem.
