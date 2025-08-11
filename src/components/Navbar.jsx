export default function Navbar() {
    return (
      <nav className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jokes PDF Generator</h1>
          <div className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
          </div>
        </div>
      </nav>
    )
  }