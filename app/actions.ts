"use server";
import Entry from "@/models/Entry";
import { revalidatePath } from "next/cache";

export async function createEntry(formData: FormData) {
  try {
    await Entry.create(Object.fromEntries(formData));
    revalidatePath("/");
  } catch (error) {
    console.error("Failed to create entry:", error);
  }
}
export async function deleteEntry(id: string) {
  try {
    await Entry.findByIdAndDelete(id);
    revalidatePath("/");
  } catch (error) {
    console.error("Failed to delete entry:", error);
  }
}
