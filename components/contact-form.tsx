"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, Lock, AlertTriangle } from "lucide-react"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

    const [message, setMessage] = useState<{ text: string; type: "success" | "error" | null }>({
        text: "",
        type: null,
    })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget

    const data = {
      fullName: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value,
      company: form.company.value,
      serviceType: form.serviceType.value,
      location: form.location.value,
      urgency: form.urgency.value,
      message: form.message.value,
      termsAccepted: form.termsAccepted.checked,
    }

    const res = await fetch("https://mozeffweb3.com/mail/mailer.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      setMessage({ text: "Your inquiry has been sent successfully.", type: "success" })
      form.reset()
    } else {
      setMessage({ text: "Failed to send your inquiry. Try again.", type: "error" })
    }

    setLoading(false)

    setTimeout(() => setMessage({ text: "", type: null }), 5000)
  }

  return (
    <>
    <Card className="max-w-2xl mx-auto border-2 border-slate-200">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Lock className="h-6 w-6 text-amber-500 text-gray-600" />
          <CardTitle className="text-2xl text-slate-900">Secure Service Inquiry</CardTitle>
        </div>
        <CardDescription className="text-base">
          All communications are encrypted and handled with the highest level of confidentiality.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-amber-500 text-gray-600" />
              Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" name="fullName" type="text" required />
              </div>
              <div>
                <Label htmlFor="company">Company/Organization</Label>
                <Input id="company" name="company" type="text" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" required />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Service Requirements</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="serviceType">Service Type *</Label>
                <select id="serviceType" name="serviceType" required className="w-full border rounded p-2">
                  <option value="">Select service</option>
                  <option value="vip-protection">VIP Protection</option>
                  <option value="armored-transport">Armored Transport</option>
                  <option value="executive-transport">Executive Transport</option>
                  <option value="private-jet-security">Private Jet Security</option>
                  <option value="multiple-services">Multiple Services</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <Label htmlFor="location">Location/Region *</Label>
                <select id="location" name="location" required className="w-full border rounded p-2">
                  <option value="">Select location</option>
                  <option value="jordan">Jordan</option>
                  <option value="lebanon">Lebanon</option>
                  <option value="egypt">Egypt</option>
                  <option value="russia">Russia</option>
                  <option value="thailand">Thailand</option>
                  <option value="multiple">Multiple</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="urgency">Urgency Level *</Label>
              <select id="urgency" name="urgency" required className="w-full border rounded p-2">
                <option value="">Select urgency</option>
                <option value="Immediate  (Emergency)">Immediate (Emergency)</option>
                <option value="Urgent (Within 48 hours)">Urgent (Within 48 hours)</option>
                <option value="Standard (Within 1 week)">Standard (Within 1 week)</option>
                <option value="Planning (Future needs)">Planning (Future needs)</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" name="message" required rows={5} />
          </div>

          <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
            <Checkbox id="termsAccepted" name="termsAccepted" required />
            <div className="text-sm">
              <Label htmlFor="termsAccepted" className="font-medium cursor-pointer">
                I acknowledge and agree to the terms *
              </Label>
            </div>
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 text-lg"
          >
            {loading ? "Sending..." : "Submit Inquiry"}
          </Button>
        </form>
      </CardContent>
    </Card>
    {message.text && (
        <div
            className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-md text-white text-sm ${
            message.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
        >
            {message.text}
        </div>
    )}
    </>
  )
}