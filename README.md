# 🌐 nextjs-multi-zone-microfrontend-boilerplate

A modern, scalable, SEO-optimized **Next.js boilerplate** for building **multi-zone**, **microfrontend** applications with **SSR**, **i18n**, **TailwindCSS**, **shadcn/ui**, and more.

> Created & maintained by **Sunil D**  
> 📁 [Sample Repo](https://github.com/sunildandwate/nextjs-multi-zone-microfrontend-boilerplate)

## 🚀 Quick Start

1. **Clone the Repository**
```bash
git clone https://github.com/sunildandwate/nextjs-multi-zone-microfrontend-boilerplate.git
cd nextjs-multi-zone-microfrontend-boilerplate
```

2. **Install Dependencies**
```bash
pnpm install
```

3. **Run All Apps in Dev Mode**
```bash
pnpm dev
```
This starts all apps/* (admin, web, etc.) using Turborepo with configured rewrites.

4. **Run Tests**
```bash
# Unit Tests
pnpm test

# E2E Tests
pnpm e2e

# Docker Build & Run
docker-compose up --build
```

## 📚 Features

### 🌍 i18n & SSR
- SSR enabled by default for all apps
- Locale routing via next-intl: `/en`, `/mr`, `/hi`
- SEO-ready with dynamic meta tags, localized routes
- Language switcher included

### 🎨 TailwindCSS + shadcn
- Pre-configured TailwindCSS with shared design tokens
- shadcn/ui components from shared ui package
- Easily themeable and extensible

### 🧠 Key Benefits
- ✅ Multi-zone Next.js structure
- ✅ Microfrontend-friendly architecture
- ✅ TailwindCSS + shadcn/ui design system
- ✅ SSR + SEO out of the box
- ✅ Multi-language support
- ✅ Docker-ready
- ✅ Optimized workspace with pnpm + turborepo
- ✅ Clean separation of concerns

## 📜 Common Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all apps in dev mode |
| `pnpm build` | Build all apps and packages |
| `pnpm lint` | Run linter |
| `pnpm test` | Run Vitest unit tests |
| `pnpm e2e` | Run Playwright E2E tests |
| `docker-compose up` | Run all apps in containers |

## 📌 Roadmap

- [ ] Add user authentication (NextAuth/Clerk)
- [ ] Add Storybook for UI components
- [ ] Enable CI/CD pipelines
- [ ] Add dark mode toggle
- [ ] Integrate analytics + error tracking
- [ ] Add dynamic module federation

## 📄 License

MIT License © 2025 Sunil Dandwate

## 👥 Contributing

PRs are welcome! Please:
- Follow existing code patterns
- Use the shared eslint-config
- Follow commit hooks (if configured)