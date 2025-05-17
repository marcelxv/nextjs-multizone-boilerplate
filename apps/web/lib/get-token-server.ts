import { cookies } from "next/headers";

const AUTH_TOKEN_KEY = "auth_token";

/**
 * Retrieves the authentication token from cookies or localStorage
 * @returns {string | null} The authentication token if found, null otherwise
 */
export const getServerAuthToken = async (): Promise<string | null> => {
  try {
    // Get cookie from server-side context
    const cookieStore = cookies();
    const cookieAuthToken = (await cookieStore).get(AUTH_TOKEN_KEY);

    if (cookieAuthToken) {
      return cookieAuthToken.value;
    }

    return null;
  } catch (error) {
    console.warn("Error retrieving auth token:", error);
    return null;
  }
};
