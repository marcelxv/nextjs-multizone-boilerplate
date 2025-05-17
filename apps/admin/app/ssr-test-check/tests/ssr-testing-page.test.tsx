import React from "react";
import { render, screen } from "@testing-library/react";
import SSRTesting from "../components/ssr-testing";
import { describe, it, expect } from 'vitest';
describe("SSR Testing Page", () => {
  it("renders the ssr testing heading", () => {
    render(<SSRTesting skills={["JavaScript", "React"]} />);
    expect(screen.getByTestId("heading")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });
});
