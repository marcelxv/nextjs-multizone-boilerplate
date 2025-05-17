import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "../components";

describe("Badge Test", () => {
  it("Should render bage with default props", async () => {
    render(
      <Badge variant="outline" className="px-1.5 text-muted-foreground">
        Test badge
      </Badge>
    );
    await waitFor(() => {
      expect(screen.getByTestId("badge")).toBeInTheDocument();
      expect(screen.getByText("Test badge"));
    });
  });
});
