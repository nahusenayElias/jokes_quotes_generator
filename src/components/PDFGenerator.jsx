import { jsPDF } from 'jspdf'

export default function PDFGenerator({ selectedJokes }) {
  const generatePDF = () => {
    const doc = new jsPDF()
    
    // Add title
    doc.setFontSize(20)
    doc.text('Your Joke Collection', 105, 15, { align: 'center' })
    
    // Add jokes
    doc.setFontSize(12)
    let yPosition = 30
    
    selectedJokes.forEach((joke, index) => {
      // Add joke number
      doc.text(`Joke ${index + 1}:`, 15, yPosition)
      yPosition += 7
      
      // Add joke content
      if (joke.setup) {
        doc.text(`- ${joke.setup}`, 20, yPosition)
        yPosition += 7
        doc.text(`- ${joke.delivery}`, 20, yPosition)
        yPosition += 10
      } else {
        const splitJoke = doc.splitTextToSize(joke.joke, 180)
        doc.text(splitJoke, 20, yPosition)
        yPosition += splitJoke.length * 7 + 3
      }
      
      // Add space between jokes
      yPosition += 5
      
      // Add new page if needed
      if (yPosition > 280 && index < selectedJokes.length - 1) {
        doc.addPage()
        yPosition = 20
      }
    })
    
    // Save the PDF
    doc.save('joke-collection.pdf')
  }

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">PDF Generator</h2>
      <p className="mb-2">
        {selectedJokes.length > 0 
          ? `You've selected ${selectedJokes.length} joke(s)`
          : 'Select jokes to generate a PDF'}
      </p>
      <button
        onClick={generatePDF}
        disabled={selectedJokes.length === 0}
        className={`px-4 py-2 rounded ${selectedJokes.length > 0 
          ? 'bg-green-500 hover:bg-green-600 text-white' 
          : 'bg-gray-300 cursor-not-allowed'}`}
      >
        Generate PDF
      </button>
    </div>
  )
}