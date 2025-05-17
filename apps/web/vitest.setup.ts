// vitest.setup.ts
import { vi } from "vitest";
import "@testing-library/jest-dom";

// Global mocks for all tests
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
}));
