"use client"

import { useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Upload, Scissors, Download, CheckCircle, FileText } from "lucide-react"

export default function SplitPdfPage() {
  const fileInputRef = useRef(null)
  const [file, setFile] = useState(null)
  const [isSplitting, setIsSplitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files?.[0]
    setFile(uploadedFile)
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleSplit = async () => {
    setIsSplitting(true)
    setTimeout(() => {
      setIsSplitting(false)
      setIsComplete(true)
    }, 2500)
  }

  const resetForm = () => {
    setFile(null)
    setIsComplete(false)
    setIsSplitting(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-yellow-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Scissors className="h-10 w-10 text-yellow-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Split PDF File</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Upload a PDF file and split it into individual pages or specific page ranges.
            </p>
          </div>

          {/* Upload Area */}
          {!isComplete && (
            <div className="bg-yellow-100 rounded-lg shadow-lg p-8 mb-8">
              {!file ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-yellow-500 transition-colors mb-6">
                  <Upload className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a PDF file</h3>
                  <p className="text-gray-600 mb-4">Choose the PDF you want to split</p>
                  <input
                    type="file"
                    accept=".pdf"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white" onClick={handleButtonClick}>
                    Choose PDF
                  </Button>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">File to split</h3>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <FileText className="h-6 w-6 text-yellow-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">{file.name}</p>
                        <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    {isSplitting && (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-yellow-600"></div>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <Button
                      onClick={handleSplit}
                      disabled={isSplitting}
                      className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3"
                    >
                      {isSplitting ? "Splitting..." : "Split PDF"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Success State */}
          {isComplete && (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Split Complete!</h3>
              <p className="text-gray-600 mb-6">Your PDF has been successfully split into separate files.</p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-yellow-100 rounded p-2 mr-3">
                      <Scissors className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">split-pages.zip</p>
                      <p className="text-sm text-gray-500">All split pages in one zip file</p>
                    </div>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
              <Button onClick={resetForm} variant="outline">
                Split Another PDF
              </Button>
            </div>
          )}

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Output</h3>
              <p className="text-gray-600 text-sm">Split all pages or just a specific range</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instant Results</h3>
              <p className="text-gray-600 text-sm">Fast processing for even large PDFs</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">All Devices</h3>
              <p className="text-gray-600 text-sm">Works on desktop, tablet, and mobile browsers</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
