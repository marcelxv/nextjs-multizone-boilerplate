// app/actions.ts
"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});

export async function createItem(prevState: any, formData: FormData) {
  try {
    // Parse and validate form data
    const validatedFields = formSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
    });

    // Return early if the form data is invalid
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Validation failed",
      };
    }

    // Process valid form data (e.g., save to database)
    // await db.insert(...);

    // Revalidate data that might have changed
    revalidatePath("/skills");

    return {
      success: true,
      message: "Item created successfully",
      errors: null,
    };
  } catch (error) {
    console.error("Error creating item:", error);
    return {
      success: false,
      message: "An error occurred while creating the item",
      errors: null,
    };
  }
}
