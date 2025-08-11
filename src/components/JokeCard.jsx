export default function JokeCard({ joke, isSelected, onToggleSelect }) {
    return (
      <div 
        className={`border rounded-lg p-4 cursor-pointer transition-all ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
        onClick={onToggleSelect}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{joke.category || 'General'}</h3>
            {joke.setup ? (
              <>
                <p>{joke.setup}</p>
                <p className="font-semibold mt-1">{joke.delivery}</p>
              </>
            ) : (
              <p>{joke.joke}</p>
            )}
          </div>
          <input 
            type="checkbox" 
            checked={isSelected}
            onChange={onToggleSelect}
            className="h-5 w-5 text-blue-600 rounded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    )
  }