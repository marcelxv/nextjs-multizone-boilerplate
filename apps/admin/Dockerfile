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

# Prune the monorepo to isolate only admin and its dependencies
RUN pnpm turbo prune admin --docker

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

# Build ONLY the admin app
RUN pnpm exec turbo run build

# ---------------------------------------
# Runner: Production container for admin
# ---------------------------------------
FROM base AS runner
WORKDIR /app

ENV CI=true \ 
    NODE_ENV=production \
    PORT=3001

# Use non-root user for security
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 adminuser
USER adminuser

# Copy output from the build stage
COPY --from=builder --chown=adminuser:nodejs /app/apps/admin/.next/standalone ./
COPY --from=builder --chown=adminuser:nodejs /app/apps/admin/.next/static ./apps/admin/.next/static
COPY --from=builder --chown=adminuser:nodejs /app/apps/admin/public ./apps/admin/public

# Copy app-specific package.json (optional, for runtime introspection or env vars)
COPY --from=builder --chown=adminuser:nodejs /app/apps/admin/package.json ./package.jso

# Expose port
EXPOSE 3001

# Start the application
CMD ["node", "apps/admin/server.js"]
# CMD ["pnpm", "start"]
