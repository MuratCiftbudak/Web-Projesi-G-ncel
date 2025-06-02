class FilmRepository {
  constructor() {
    this.films = [
      {
        id: 1,
        title: "Inception",
        genre: "Bilim Kurgu",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        description: "Dom Cobb çok yetenekli bir hırsızdır. Uzmanlık alanı, zihnin en savunmasız olduğu rüya görme anında, bilinçaltının derinliklerindeki değerli sırları çekip çıkarmak ve onları çalmaktır.",
      },
      {
        id: 2,
        title: "The Dark Knight",
        genre: "Aksiyon",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        description: "Kara Şövalye, Gotham City'nin suç dünyasını temizlemek için mücadele eden Batman'in hikayesini anlatıyor.",
      },
      {
        id: 3,
        title: "Interstellar",
        genre: "Bilim Kurgu",
        poster: "https://m.media-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwNzUxNjYwMzE@._V1_.jpg",
        description: "Bir grup kaşif, insanlığın yıldızlar arasında hayatta kalmasını sağlamak için uzayda bir yolculuğa çıkar.",
      },
      {
        id: 4,
        title: "Fight Club",
        genre: "Dram",
        poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTYxNDktZmYwMC00ZTAwLTg2YjUtYjYwYjYzYjYzYjYzXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
        description: "Bir adam, hayatındaki monotonluktan kurtulmak için yeraltı dövüş kulübü kurar.",
      },
      {
        id: 5,
        title: "The Matrix",
        genre: "Bilim Kurgu",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3NjAtNDQyZi00ZTAwLTg2YjUtYjYwYjYzYjYzYjYzXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
        description: "Bir bilgisayar korsanı, gerçekliğin doğası hakkında şok edici bir gerçeği keşfeder.",
      },
      {
        id: 6,
        title: "Pulp Fiction",
        genre: "Suç",
        poster: "https://m.media-amazon.com/images/M/MV5BMTU4MzY4MzY4MF5BMl5BanBnXkFtZTgwNzUxNjYwMzE@._V1_.jpg",
        description: "Birbirine bağlı birkaç hikaye üzerinden suç dünyasının karanlık yüzü anlatılır.",
      }
    ];
  }

  getAll() {
    return this.films;
  }

  add(film) {
    this.films.push(film);
    return film;
  }
}

export default FilmRepository; 