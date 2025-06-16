"use server"

import { z } from "zod"

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  location: z.string().min(1, "Please select your location/region"),
  urgency: z.string().min(1, "Please select urgency level"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  termsAccepted: z.boolean().refine((val) => val === true, "You must accept the terms and conditions"),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      serviceType: formData.get("serviceType") as string,
      location: formData.get("location") as string,
      urgency: formData.get("urgency") as string,
      message: formData.get("message") as string,
      termsAccepted: formData.get("termsAccepted") === "on",
    }

    // Validate the data
    const validatedData = contactSchema.parse(data)

    // Simulate secure processing (in real app, this would send to secure email/CRM)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Log for demonstration (in production, this would be sent securely)
    console.log("Secure inquiry received:", {
      ...validatedData,
      timestamp: new Date().toISOString(),
      ip: "masked-for-security",
    })

    return {
      success: true,
      message:
        "Your secure inquiry has been received. Our team will contact you within 24 hours through encrypted channels.",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form entries and try again.",
        errors: error.errors,
      }
    }

    return {
      success: false,
      message: "A secure connection error occurred. Please try again or contact our emergency line.",
    }
  }
}
