export type TriggerOtpBody = {
  countryCode: string;
  mobile: string;
};

export type TriggerOtpResponse = {
  otpExpireSeconds: number;
  error: boolean;
  enableOtpView: boolean;
  message: string;
  mobile: string;
  secret: string;
};

export type VerifyOtpBody = {
  mobile: string;
  otp: string;
  secret: string | null | undefined;
};

export type RoleRight = {
  roleRightId: string;
  right: string;
};

export type RoleData = {
  name: string;
  rights: RoleRight[];
};

export type VerifyOtpResponse = {
  error: boolean;
  token: string;
  rolesDataList: RoleData[];
  roles: string[];
  docKyc: null;
};
