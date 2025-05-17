"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchClient, getClientAuthToken } from "@workspace/clients";
import { S3_IMAGE_API } from "@workspace/config";
import { IS3ImageRead } from "@workspace/types";

export class S3ImageApiError extends Error {
  constructor(
    public status?: number,
    message?: string
  ) {
    super(message ?? "Failed to fetch S3 image");
    this.name = "S3ImageApiError";
  }
}

export const fetchS3Image = async (key: string): Promise<IS3ImageRead> => {
  const response = await fetchClient(
    `${S3_IMAGE_API}/?key=${key}`,
    {
      method: "GET",
    },
    getClientAuthToken
  );

  if (!response.ok) {
    throw new S3ImageApiError(response.status);
  }

  const data = await response.json();
  return data as IS3ImageRead;
};

export const useS3Image = (
  key: string
): UseQueryResult<IS3ImageRead, S3ImageApiError> => {
  return useQuery<IS3ImageRead, S3ImageApiError>({
    queryKey: ["s3Image", key],
    queryFn: () => fetchS3Image(key),
  });
};
