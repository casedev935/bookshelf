FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
RUN corepack enable

FROM base AS builder
WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter=@media-manager/prisma run build
RUN turbo build --filter=api...
RUN pnpm --filter=api deploy --prod /app/out

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/out .
EXPOSE 3001
CMD ["node", "dist/main.js"]
