import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ToolsGrid } from "@/components/tools-grid"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ToolsGrid />
      <Features />
      <Footer />
    </div>
  )
}
