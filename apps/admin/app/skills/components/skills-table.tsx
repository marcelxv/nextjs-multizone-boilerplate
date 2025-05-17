"use client";

import React from "react";

import { DataTable } from "@workspace/ui/components/custom/data-table";
import { LoadingSpinner } from "@workspace/ui/components/custom/loading-spinner";
import { ISkill } from "@workspace/types";
import { TranslationsTable } from "@workspace/ui/components/features/translations/translations-table";
import { translationsColumns } from "@workspace/ui/components/features/translations/translations-columns";
import { skillsColumns } from "./skills-table-colunms";

type SkillsTableProps = {
  data: ISkill[];
};

export function SkillsTable({ data }: SkillsTableProps): React.JSX.Element {
  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <DataTable
        data={data}
        columns={skillsColumns}
        positionKey="viewId"
        getRowCanExpand={() => true}
        subViewColumns={translationsColumns}
        renderSubComponent={(subViewColumns, row) =>
          TranslationsTable(subViewColumns, row.original.translations)
        }
      />
    </React.Suspense>
  );
}
