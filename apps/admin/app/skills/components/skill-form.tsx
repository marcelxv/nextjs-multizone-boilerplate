"use client";

import React, { useState } from "react";
import { PlusCircleIcon } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { SiteHeader } from "../../../components/site-header";
import { FormModal } from "./skill-form-modal";


export function SkillForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SiteHeader title="Skills">
        <Button onClick={() => setIsModalOpen(true)}>
          <PlusCircleIcon />
          Create New Item
        </Button>
      </SiteHeader>
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
