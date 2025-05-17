# ---------------------------------------
# Base Image with Node 24 and pnpm setup
# ---------------------------------------
FROM node:24-alpine AS base

# Add system compatibility libraries
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && \
    apk update && \
    apk add --no-cache libc6-compat

# Enable Corepack and activate latest pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Install turbo manually if not present
RUN pnpm add -D turbo

# Copy full monorepo contents
COPY . .

# Prune the monorepo to isolate only web and its dependencies
RUN pnpm turbo prune web --docker

# ---------------------------------------
# Builder: Turbo prune to reduce context
# ---------------------------------------
FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy pruned package.jsons and lockfile
COPY --from=base /app/out/json/ ./

# Install only required dependencies
RUN pnpm install -r --no-frozen-lockfile

# Copy pruned source code
COPY --from=base /app/out/full/ ./

# Build ONLY the web app
RUN pnpm exec turbo run build

# ---------------------------------------
# Runner: Production container for web
# ---------------------------------------
FROM base AS runner
WORKDIR /app

ENV CI=true \ 
    NODE_ENV=production \
    PORT=3000

# Use non-root user for security
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 adminuser
USER adminuser

# Copy output from the build stage
COPY --from=builder --chown=adminuser:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=adminuser:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder --chown=adminuser:nodejs /app/apps/web/public ./apps/web/public

# Copy app-specific package.json (optional, for runtime introspection or env vars)
COPY --from=builder --chown=adminuser:nodejs /app/apps/web/package.json ./package.jso

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "apps/web/server.js"]
# CMD ["pnpm", "start"]
