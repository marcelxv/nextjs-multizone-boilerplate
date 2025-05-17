"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { sendOTP, verifyOTP } from "../features/auth-actions";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { cn } from "@workspace/ui/lib/utils";
import { PhoneIcon } from "lucide-react";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { TriggerOtpResponse } from "../types/auth-types";

type LoginForm = {
  countryCode: string;
  mobile: string;
  otp: string;
};

export default function LoginForm() {
  const { control, handleSubmit } = useForm<LoginForm>({
    defaultValues: {
      countryCode: "91",
      mobile: "",
      otp: "",
    },
  });
  const [step, setStep] = useState<"mobile" | "otp">("mobile");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [triggerOtpResponse, setTriggerOtpResponse] =
    useState<TriggerOtpResponse | null>(null);

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);

    if (step === "mobile") {
      const res: TriggerOtpResponse = await sendOTP({
        countryCode: data.countryCode,
        mobile: data.mobile,
      });
      setTriggerOtpResponse(res);
      if (res.enableOtpView) {
        setMobile(data.mobile);
        setStep("otp");
      } else {
        alert(res.message);
      }
    } else {
      const res = await verifyOTP({
        mobile: mobile,
        otp: data.otp,
        secret: triggerOtpResponse?.secret,
      });

      if (res.error === false && res.token) {
        alert("Login successful!");
      } else {
        alert("Invalid OTP.");
      }
    }

    setLoading(false);
  };

  return (
    <form
      className={cn("flex flex-col gap-6")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-xl font-bold" data-testid="auth_form_heading">Signup/Signin</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your phone number to signup/signin to your account.
        </p>
      </div>

      <div className="grid gap-6">
        {step === "mobile" && (
          <div className="grid gap-2">
            <Label htmlFor="mobile">Enter your mobile number</Label>
            <div className="flex items-center gap-2">
              <Controller
                control={control}
                name="countryCode"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="Code" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="91">🇮🇳 +91</SelectItem>
                      <SelectItem value="1">🇺🇸 +1</SelectItem>
                      <SelectItem value="44">🇬🇧 +44</SelectItem>
                      <SelectItem value="61">🇦🇺 +61</SelectItem>
                      <SelectItem value="81">🇯🇵 +81</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

              <Controller
                control={control}
                name="mobile"
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Enter mobile number"
                    type="tel"
                  />
                )}
              />
            </div>
          </div>
        )}

        {step === "otp" && (
          <div className="grid gap-2">
            <Controller
              control={control}
              name="otp"
              render={({ field }) => (
                <div className="flex flex-col items-center gap-2">
                  <Label htmlFor="otp">Enter OTP</Label>
                  <InputOTP
                    value={field.value}
                    onChange={field.onChange}
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  >
                    <InputOTPGroup className="flex gap-2">
                      {Array.from({ length: 6 }).map((_, idx) => (
                        <InputOTPSlot
                          key={idx}
                          index={idx}
                          className="w-12 h-12 text-xl border rounded-md text-center"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              )}
            />
          </div>
        )}
      </div>

      <Button className="w-full" disabled={loading}>
        <PhoneIcon className="mr-2 h-4 w-4" />
        {loading
          ? "Processing..."
          : step === "mobile"
            ? "Send OTP"
            : "Verify OTP"}
      </Button>

      <div className="text-center text-sm">
        You agree to{" "}
        <a href="#" className="underline underline-offset-4">
          Terms of Service
        </a>
      </div>
    </form>
  );
}
