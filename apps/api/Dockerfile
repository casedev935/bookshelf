<<<<<<< HEAD
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
=======
# Base node image
FROM node:20-alpine AS base
RUN npm install -g pnpm

# Install all dependencies and build
FROM base AS builder
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter api build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app
RUN apk add --no-cache openssl
RUN npm install -g pnpm
ENV NODE_ENV=production

# Copy only what we need for production
COPY --from=builder /app/package.json /app/pnpm-lock.yaml /app/pnpm-workspace.yaml ./
COPY --from=builder /app/apps/api/package.json ./apps/api/
COPY --from=builder /app/packages/prisma ./packages/prisma

# Install production dependencies only
# This will trigger the postinstall script in @media-manager/prisma
RUN pnpm install --prod --frozen-lockfile

# Copy built app
COPY --from=builder /app/apps/api/dist ./apps/api/dist

EXPOSE 3001
WORKDIR /app/apps/api
>>>>>>> 4622afc59921e27df4e30515bb4a3785165b6f7c
CMD ["node", "dist/main"]
