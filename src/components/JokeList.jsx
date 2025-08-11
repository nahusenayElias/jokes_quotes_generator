import { useState, useEffect } from 'react'
import axios from 'axios'
import JokeCard from './JokeCard'
import React from 'react'

export default function JokeList({ selectedJokes, setSelectedJokes }) {
  const [jokes, setJokes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchJokes = async () => {
    try {
      setLoading(true)
      const response = await axios.get('https://v2.jokeapi.dev/joke/Any?amount=5')
      setJokes(response.data.jokes || [response.data])
      setError(null)
    } catch (err) {
      setError('Failed to fetch jokes. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJokes()
  }, [])

  const toggleSelectJoke = (joke) => {
    setSelectedJokes(prev => {
      const exists = prev.some(j => j.id === joke.id)
      if (exists) {
        return prev.filter(j => j.id !== joke.id)
      } else {
        return [...prev, joke]
      }
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Jokes</h2>
        <button 
          onClick={fetchJokes}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Refresh Jokes
        </button>
      </div>
      
      {loading && <p>Loading jokes...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jokes.map(joke => (
          <JokeCard 
            key={joke.id} 
            joke={joke} 
            isSelected={selectedJokes.some(j => j.id === joke.id)}
            onToggleSelect={() => toggleSelectJoke(joke)}
          />
        ))}
      </div>
    </div>
  )
}