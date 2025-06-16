import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Car, Plane, Users, Globe, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50 border-b border-gray-800 shadow-2xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src="/images/mj-logo.png"
                  alt="MJ Close Security & Transportation"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
                {/* Subtle glow effect around logo */}
                <div className="absolute -inset-2 bg-white/5 rounded-lg blur-sm -z-10"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold tracking-tight">Cross Protection & Logistics</h1>
                <p className="text-sm text-gray-300 font-medium">Elite Security Solutions Worldwide</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-white hover:text-gray-300 transition-colors font-medium text-lg relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#global"
                className="text-white hover:text-gray-300 transition-colors font-medium text-lg relative group"
              >
                Global Reach
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-gray-300 transition-colors font-medium text-lg relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
              <div className="h-8 w-px bg-gray-600 mx-4"></div>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-bold px-6 py-2 transition-all hover:scale-105 shadow-lg"
              >
                <Phone className="h-4 w-4 mr-2" />
                Emergency Line
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              {/* Large logo display */}
              <div className="flex justify-center mb-10">
                <div className="relative">
                  <Image
                    src="/images/mj-logo.png"
                    alt="MJ Close Security & Transportation"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                  {/* Elegant glow effect */}
                  <div className="absolute -inset-6 bg-white/10 rounded-full blur-2xl -z-10"></div>
                </div>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                Global Leader in{" "}
                <span className="text-white underline decoration-4 underline-offset-8">Elite Security</span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
                Specializing in VIP protection, secure logistics, and private aviation support for individuals,
                corporations, and governments who demand the highest standards of safety, discretion, and efficiency.
              </p>

              {/* Key features */}
              <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-gray-300 font-medium">Elite Operatives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-gray-300 font-medium">5 Global Regions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-gray-300 font-medium">24/7 Protection</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-bold px-10 py-4 text-lg transition-all hover:scale-105 shadow-xl"
              >
                Get Protection Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 text-lg font-bold transition-all hover:scale-105"
              >
                View Services
              </Button>
            </div>

            <p className="text-white font-bold text-xl tracking-wide">MOVE WITH CONFIDENCE. TRAVEL PROTECTED.</p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-slate-600">Successful Missions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-slate-600">Emergency Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">5</div>
              <div className="text-slate-600">Global Regions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-slate-600">Confidentiality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Elite Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive security solutions tailored for high-profile individuals, corporations, and governments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="group border-2 border-slate-200 hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-white">
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl group-hover:from-amber-200 group-hover:to-amber-300 transition-all">
                    <Users className="h-8 w-8 text-amber-700" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">VIP Security & Close Protection</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed text-slate-600">
                  Elite-level personal protection services for high-profile individuals, corporate executives,
                  dignitaries, and celebrities. Our licensed close protection officers provide 24/7 safety, awareness,
                  and peace of mind with discretion and precision.
                </CardDescription>
                <div className="pt-4">
                  <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0 h-auto font-semibold">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card className="group border-2 border-slate-200 hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-white">
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl group-hover:from-amber-200 group-hover:to-amber-300 transition-all">
                    <Shield className="h-8 w-8 text-amber-700" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Armored Vehicle Transportation</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed text-slate-600">
                  State-of-the-art armored vehicles operated by skilled drivers with security backgrounds. Engineered
                  for resilience and comfort, perfect for sensitive cargo, high-value assets, or individuals requiring
                  elevated protection.
                </CardDescription>
                <div className="pt-4">
                  <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0 h-auto font-semibold">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card className="group border-2 border-slate-200 hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-white">
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl group-hover:from-amber-200 group-hover:to-amber-300 transition-all">
                    <Car className="h-8 w-8 text-amber-700" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Executive Transportation Services</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed text-slate-600">
                  Seamless ground transportation with chauffeurs trained in defensive driving, route planning, and
                  client confidentiality. Combining comfort with uncompromised security for business executives and
                  high-profile clients.
                </CardDescription>
                <div className="pt-4">
                  <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0 h-auto font-semibold">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card className="group border-2 border-slate-200 hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-white">
              <CardHeader className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl group-hover:from-amber-200 group-hover:to-amber-300 transition-all">
                    <Plane className="h-8 w-8 text-amber-700" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Private Jet Security Personnel</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed text-slate-600">
                  Certified security professionals onboard private jets for international and regional flights. Our
                  operatives handle in-flight risks, manage logistics at foreign airports, and provide full-spectrum
                  protection from departure to destination.
                </CardDescription>
                <div className="pt-4">
                  <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0 h-auto font-semibold">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section id="global" className="py-24 bg-gradient-to-br from-slate-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <Globe className="h-16 w-16 text-amber-400 mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Global Reach – Local Precision</h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                We operate across five key strategic regions—
                <span className="text-amber-400 font-semibold">Jordan, Lebanon, Egypt, Russia, and Thailand</span>
                —ensuring rapid response and deep local knowledge.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6 mb-12">
              {["Jordan", "Lebanon", "Egypt", "Russia", "Thailand"].map((country) => (
                <div
                  key={country}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-amber-400 transition-all"
                >
                  <div className="text-lg font-semibold text-amber-400 mb-2">{country}</div>
                  <div className="text-sm text-slate-300">24/7 Operations</div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
              <p className="text-slate-300 text-lg leading-relaxed">
                With an international network of operatives and partners, we deliver the same standard of excellence
                across every checkpoint, every mile, and every mission. Whether you're navigating business in Amman,
                attending a summit in Moscow, or relaxing in Phuket, we provide consistent, top-tier protection wherever
                you go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Travel Smart. Move Protected.</h2>
            <p className="text-xl text-slate-300 mb-12">
              Reach out today to learn how Cross Protection & Logistics can safeguard your journey—from the Middle East
              to Southeast Asia and beyond.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group">
                <div className="p-6 bg-amber-500 rounded-2xl mb-6 group-hover:bg-amber-400 transition-colors inline-block">
                  <Phone className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">24/7 Emergency Line</h3>
                <p className="text-slate-300 text-lg">+1 (555) 123-4567</p>
                <p className="text-amber-400 text-sm mt-2">Immediate Response</p>
              </div>

              <div className="group">
                <div className="p-6 bg-amber-500 rounded-2xl mb-6 group-hover:bg-amber-400 transition-colors inline-block">
                  <Mail className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Communications</h3>
                <p className="text-slate-300 text-lg">secure@crossprotection.com</p>
                <p className="text-amber-400 text-sm mt-2">Encrypted Channels</p>
              </div>

              <div className="group">
                <div className="p-6 bg-amber-500 rounded-2xl mb-6 group-hover:bg-amber-400 transition-colors inline-block">
                  <MapPin className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Operations</h3>
                <p className="text-slate-300 text-lg">5 Strategic Regions</p>
                <p className="text-amber-400 text-sm mt-2">Worldwide Coverage</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <Image
                src="/images/mj-logo.png"
                alt="MJ Close Security & Transportation"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <span className="font-bold text-xl">Cross Protection & Logistics</span>
                <p className="text-gray-400 text-sm">Elite Security Solutions Worldwide</p>
              </div>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p className="font-medium">© {new Date().getFullYear()} Cross Protection & Logistics.</p>
              <p>All rights reserved. Licensed security professionals.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
