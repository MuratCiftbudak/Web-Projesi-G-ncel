import { useEffect, useState } from 'react';
import Head from 'next/head';
import FilmRepository from '../js/data/FilmRepository';
import FilmManager from '../js/business/FilmManager';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const filmRepository = new FilmRepository();
    const filmManager = new FilmManager(filmRepository);
    setMovies(filmManager.getAllFilms());
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Film İnceleme Sitesi</title>
        <meta name="description" content="Film inceleme ve değerlendirme platformu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded text-xl">IMDb</span>
          <span className="ml-4 text-lg font-semibold">Film İnceleme Sitesi</span>
        </div>
        <input
          type="text"
          placeholder="Film ara..."
          className="bg-zinc-800 text-white px-4 py-2 rounded focus:outline-none w-64"
        />
      </header>

      {/* Featured Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">Featured today</h2>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {movies.map((movie) => (
            <div key={movie.id} className="min-w-[180px] max-w-[180px] bg-zinc-900 rounded-lg shadow-lg overflow-hidden flex-shrink-0">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg font-bold mb-1 truncate">{movie.title}</h3>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full mb-2">
                  {movie.genre}
                </span>
                <p className="text-gray-300 text-xs line-clamp-3">{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 