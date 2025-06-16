"use client"

import { useState, useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, Lock, AlertTriangle } from "lucide-react"
import { submitContactForm } from "../app/actions/contact"

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, null)
  const [termsAccepted, setTermsAccepted] = useState(false)

  return (
    <Card className="max-w-2xl mx-auto border-2 border-slate-200">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Lock className="h-6 w-6 text-amber-500" />
          <CardTitle className="text-2xl text-slate-900">Secure Service Inquiry</CardTitle>
        </div>
        <CardDescription className="text-base">
          All communications are encrypted and handled with the highest level of confidentiality. Our security
          specialists will respond within 24 hours.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form action={action} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-amber-500" />
              Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="mt-1"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-sm font-medium">
                  Company/Organization
                </Label>
                <Input id="company" name="company" type="text" className="mt-1" placeholder="Optional" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone Number *
                </Label>
                <Input id="phone" name="phone" type="tel" required className="mt-1" placeholder="+1 (555) 123-4567" />
              </div>
            </div>
          </div>

          {/* Service Requirements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Service Requirements</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="serviceType" className="text-sm font-medium">
                  Service Type *
                </Label>
                <Select name="serviceType" required>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select service needed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vip-protection">VIP Security & Close Protection</SelectItem>
                    <SelectItem value="armored-transport">Armored Vehicle Transportation</SelectItem>
                    <SelectItem value="executive-transport">Executive Transportation</SelectItem>
                    <SelectItem value="private-jet-security">Private Jet Security</SelectItem>
                    <SelectItem value="multiple-services">Multiple Services</SelectItem>
                    <SelectItem value="consultation">Security Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="location" className="text-sm font-medium">
                  Location/Region *
                </Label>
                <Select name="location" required>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jordan">Jordan</SelectItem>
                    <SelectItem value="lebanon">Lebanon</SelectItem>
                    <SelectItem value="egypt">Egypt</SelectItem>
                    <SelectItem value="russia">Russia</SelectItem>
                    <SelectItem value="thailand">Thailand</SelectItem>
                    <SelectItem value="multiple">Multiple Regions</SelectItem>
                    <SelectItem value="other">Other (specify in message)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="urgency" className="text-sm font-medium">
                Urgency Level *
              </Label>
              <Select name="urgency" required>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">
                    <div className="flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
                      Immediate (Emergency)
                    </div>
                  </SelectItem>
                  <SelectItem value="urgent">Urgent (Within 48 hours)</SelectItem>
                  <SelectItem value="standard">Standard (Within 1 week)</SelectItem>
                  <SelectItem value="planning">Planning (Future needs)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-sm font-medium">
              Detailed Requirements *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-1"
              placeholder="Please provide specific details about your security requirements, timeline, number of personnel needed, special considerations, etc. All information is kept strictly confidential."
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
            <Checkbox
              id="termsAccepted"
              name="termsAccepted"
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
              required
            />
            <div className="text-sm">
              <Label htmlFor="termsAccepted" className="font-medium cursor-pointer">
                I acknowledge and agree to the following: *
              </Label>
              <ul className="mt-2 text-slate-600 space-y-1">
                <li>• All information provided will be handled with strict confidentiality</li>
                <li>• This inquiry may be subject to security clearance verification</li>
                <li>• Cross Protection & Logistics reserves the right to decline services</li>
                <li>• Emergency situations require immediate phone contact</li>
              </ul>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isPending || !termsAccepted}
            className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3 text-lg"
          >
            {isPending ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-slate-900 mr-2"></div>
                Securing Your Inquiry...
              </div>
            ) : (
              <div className="flex items-center">
                <Lock className="h-5 w-5 mr-2" />
                Submit Secure Inquiry
              </div>
            )}
          </Button>

          {/* Response Messages */}
          {state && (
            <div
              className={`p-4 rounded-lg ${
                state.success
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : "bg-red-50 border border-red-200 text-red-800"
              }`}
            >
              <div className="flex items-center">
                {state.success ? (
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                ) : (
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                )}
                <p className="font-medium">{state.message}</p>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
