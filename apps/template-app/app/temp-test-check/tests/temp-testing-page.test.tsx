import React from "react";
import { render, screen } from "@testing-library/react";
import TempTesting from "../components/temp-testing";
import { describe, it, expect } from "vitest";

describe("Temp Testing Page", () => {
  it("renders the temp testing heading", () => {
    render(<TempTesting skills={["JavaScript", "React"]} />);
    expect(screen.getByTestId("heading")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });
});
