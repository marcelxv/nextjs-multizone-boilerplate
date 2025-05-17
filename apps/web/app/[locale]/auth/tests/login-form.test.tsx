import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LoginForm from "../components/login-form";

describe("LoginForm", () => {
  it("render login form", async () => {
    render(<LoginForm />);
    await waitFor(() => {
      expect(screen.getByTestId("auth_form_heading")).toBeInTheDocument();
    });
  });
});
