import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { SkillsTable } from "../components/skills-table";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe("SkillsPage", () => {
  it("renders correctly", async () => {
    render(<SkillsTable data={[]} />);

    await waitFor(() => {
      expect(screen.getByText("Actions")).toBeInTheDocument();
    });
  });
});
