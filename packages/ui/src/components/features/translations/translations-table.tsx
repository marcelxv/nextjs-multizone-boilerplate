"use client";

import * as React from "react";

import { Heading } from "@workspace/ui/components/heading";

import { DataTable } from "@workspace/ui/components/custom/data-table";
import { ITranslation } from "@workspace/types";
import { ColumnDef } from "@tanstack/react-table";
import { LoadingSpinner } from "../../custom";

export function TranslationsTable<TData extends ITranslation>(
  columns: ColumnDef<ITranslation>[],
  data: TData[]
): React.JSX.Element {
  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <Heading level={4} className="py-4">
        Translations
      </Heading>
      <DataTable
        data={data}
        columns={columns}
        getRowCanExpand={() => false}
        positionKey="viewId"
      />
    </React.Suspense>
  );
}
