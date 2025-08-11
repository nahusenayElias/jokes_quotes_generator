import { useState } from 'react'
import Navbar from './components/Navbar'
import JokeList from './components/JokeList'
import PDFGenerator from './components/PDFGenerator'

function App() {
  const [selectedJokes, setSelectedJokes] = useState([])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Create Your Joke Collection</h1>
          <JokeList 
            selectedJokes={selectedJokes} 
            setSelectedJokes={setSelectedJokes} 
          />
          <PDFGenerator selectedJokes={selectedJokes} />
        </div>
      </main>
    </div>
  )
}

export default App