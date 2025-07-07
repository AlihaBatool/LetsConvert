"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const pdfTools = [
    { name: "Merge PDF", href: "/merge" },
    { name: "Split PDF", href: "/split" },
    { name: "Compress PDF", href: "/compress" },
    { name: "PDF to Word", href: "/pdf-to-word" },
    { name: "Word to PDF", href: "/word-to-pdf" },
    { name: "PDF to Excel", href: "/pdf-to-excel" },
    { name: "PDF to PowerPoint", href: "/pdf-to-ppt" },
    { name: "PDF to JPG", href: "/pdf-to-jpg" },
  ]

  const convertPaths = [
    "/pdf-to-word",
    "/word-to-pdf",
    "/pdf-to-excel",
    "/pdf-to-ppt",
  ]
  const isConvertActive = convertPaths.includes(pathname)

  return (
    <header className="bg-gray-200 shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center font-serif space-x-2">
            <div className="text-2xl font-bold text-gray-500">
              Lets<span className="text-gray-800">Convert</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/merge"
              className={`font-bold transition-colors ${
                pathname === "/merge"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              MERGE PDF
            </Link>

            <Link
              href="/split"
              className={`font-bold transition-colors ${
                pathname === "/split"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              SPLIT PDF
            </Link>

            <Link
              href="/compress"
              className={`font-bold transition-colors ${
                pathname === "/compress"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              COMPRESS PDF
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center font-bold transition-colors ${
                  isConvertActive
                    ? "text-black border-b-2 border-black"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                CONVERT PDF <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <Link href="/pdf-to-word">PDF to Word</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/word-to-pdf">Word to PDF</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/pdf-to-excel">PDF to Excel</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/pdf-to-ppt">PDF to PowerPoint</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 font-bold transition-colors">
                ALL PDF TOOLS <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {pdfTools.map((tool) => (
                  <DropdownMenuItem key={tool.name}>
                    <Link href={tool.href}>{tool.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/merge"
                  className={`text-lg font-medium ${
                    pathname === "/merge"
                      ? "text-black font-bold underline"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  MERGE PDF
                </Link>
                <Link
                  href="/split"
                  className={`text-lg font-medium ${
                    pathname === "/split"
                      ? "text-black font-bold underline"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  SPLIT PDF
                </Link>
                <Link
                  href="/compress"
                  className={`text-lg font-medium ${
                    pathname === "/compress"
                      ? "text-black font-bold underline"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  COMPRESS PDF
                </Link>
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Convert PDF</h3>
                  {pdfTools.slice(3, 7).map((tool) => (
                    <Link
                      key={tool.name}
                      href={tool.href}
                      className={`block py-2 text-base ${
                        pathname === tool.href
                          ? "text-black font-bold underline"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
