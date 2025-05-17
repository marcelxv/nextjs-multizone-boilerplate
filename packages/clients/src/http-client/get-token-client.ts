"use client";
import Cookies from "js-cookie";

const AUTH_TOKEN_KEY = "auth_token_client";

/**
 * Retrieves the authentication token from cookies or localStorage
 * @returns {string | null} The authentication token if found, null otherwise
 */
export const getClientAuthToken = async (): Promise<string | null> => {
  try {
    // Only execute if running in browser environment
    if (typeof window === "undefined") {
      return null;
    }

    // Check cookies first as they're more secure
    const cookieAuthToken = Cookies.get(AUTH_TOKEN_KEY);
    if (cookieAuthToken) {
      return cookieAuthToken;
    }

    // Fallback to localStorage
    return localStorage.getItem(AUTH_TOKEN_KEY);
  } catch (error) {
    console.warn("Error retrieving auth token:", error);
    return null;
  }
};
