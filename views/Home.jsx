import { Link } from 'react-router-dom'

export default function Home() {
  const games = [
    { id: 'mlbb', name: 'Mobile Legends', image: '/images/mlbb.jpg' },
    { id: 'pubg', name: 'PUBG Mobile', image: '/images/pubg.jpg' },
    { id: 'freefire', name: 'Free Fire', image: '/images/ff.jpg' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">TopUpZone</h1>
        <p className="text-gray-600">Tempat Top Up Game Favorit Kamu</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {games.map(game => (
          <div key={game.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={game.image} alt={game.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
              <Link to={`/topup/${game.id}`} className="text-blue-600 hover:underline text-sm">
                Top Up Sekarang
              </Link>
            </div>
          </div>
        ))}
      </section>

      <footer className="text-center text-gray-500 text-sm mt-12">
        &copy; {new Date().getFullYear()} TopUpZone. All rights reserved.
      </footer>
    </div>
  )
}
