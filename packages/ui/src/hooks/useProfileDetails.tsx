"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchClient, getClientAuthToken } from "@workspace/clients";
import { PROFILE_DETAILS_API } from "@workspace/config";
import { IProfileDetails } from "@workspace/types";

export class ProfileApiError extends Error {
  constructor(
    public status?: number,
    message?: string
  ) {
    super(message ?? "Failed to fetch profile details");
    this.name = "ProfileApiError";
  }
}

export const fetchProfileDetails = async (): Promise<IProfileDetails> => {
  const response = await fetchClient(
    PROFILE_DETAILS_API,
    {
      method: "GET",
    },
    getClientAuthToken
  );

  if (!response.ok) {
    throw new ProfileApiError(response.status);
  }

  const data = await response.json();
  return data as IProfileDetails;
};

export const useProfileDetails = (): UseQueryResult<
  IProfileDetails,
  ProfileApiError
> => {
  return useQuery<IProfileDetails, ProfileApiError>({
    queryKey: ["profileDetails"],
    queryFn: fetchProfileDetails,
  });
};

