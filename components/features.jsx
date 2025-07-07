import { Shield, Zap, Globe, Heart } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your files are processed securely and deleted automatically after 1 hour.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process your PDFs in seconds with our optimized conversion engine.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Access our tools from any device, anywhere. No software installation required.",
  },
  {
    icon: Heart,
    title: "Always Free",
    description: "All our basic PDF tools are completely free to use with no hidden costs.",
  },
]

export function Features() {
  return (
    <section className="py-16 px-4 bg-gray-100 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why choose LetsConvert?</h2>
          <p className="text-lg text-gray-800">We make PDF processing simple, secure, and accessible to everyone</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="bg-gray-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-gray-100" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-800">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
