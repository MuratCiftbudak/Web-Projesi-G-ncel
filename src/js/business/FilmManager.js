class FilmManager {
  constructor(filmRepository) {
    this.filmRepository = filmRepository;
  }

  getAllFilms() {
    return this.filmRepository.getAll();
  }

  addFilm(film) {
    return this.filmRepository.add(film);
  }
}

export default FilmManager; 