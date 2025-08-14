"use server";

import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  try {
    const validatedData = contactFormSchema.parse(values);
    
    // In a real application, you would process the data here:
    // - Send an email
    // - Save to a database
    // - etc.
    console.log("Form data received:", validatedData);
    
    // Simulate a successful submission
    return { success: true, message: "Form submitted successfully!" };
    
  } catch (error) {
    console.error("Form submission error:", error);
    // Simulate an error
    return { success: false, message: "There was an error submitting the form. Please try again." };
  }
}
