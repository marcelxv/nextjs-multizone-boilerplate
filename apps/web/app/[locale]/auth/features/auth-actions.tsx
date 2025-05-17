"use server";

import { cookies } from "next/headers";
import { ServerEnv } from "@workspace/config";
import { TriggerOtpBody, VerifyOtpBody } from "../types/auth-types";

export async function sendOTP(body: TriggerOtpBody) {
  const res = await fetch(`${ServerEnv.API_BASE_URL}/trigger-phone-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return data;
}

export async function verifyOTP(body: VerifyOtpBody) {
  const res = await fetch(`${ServerEnv.API_BASE_URL}/verify-phone-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (data.error === false && data.token) {
    (await cookies()).set("auth_token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
    (await cookies()).set("user", JSON.stringify(data), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    (await cookies()).set("auth_token_client", data.token, {
      secure: true,
      sameSite: "lax",
      path: "/",
    });
  }

  return data;
}
