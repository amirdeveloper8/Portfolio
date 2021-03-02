const movies = [
  {
    _id: "818",
    title: "The Godfather",
    imageUrl: "https://sansorha.ir/wp-content/uploads/2019/08/godfather.jpg",
    published: "1972",
    imdb: "9.1",
  },
  {
    _id: "828",
    title: "The Dark Knight",
    imageUrl:
      "https://www.nolanfans.com/wordpress/wp-content/uploads/2012/09/trilogyposter-mmatt.jpg",
    published: "2008",
    imdb: "9.0",
  },
  {
    _id: "838",
    title: "The Lord of the Rings",
    imageUrl:
      "https://supercima.com/wp-content/uploads/2021/02/The-Lord-of-the-Rings-The-Return-of-the-King_2003.jpg",
    published: "2003",
    imdb: "8.9",
  },
  {
    _id: "848",
    title: "Fight Club",
    imageUrl:
      "https://www.dhresource.com/0x0/f2/albu/g6/M00/D6/F7/rBVaSFvybx2ACg2iAAMZMimnQRc173.jpg/fight-club-classic-movie-art-silk-print-poster.jpg",
    published: "1999",
    imdb: "8.8",
  },
  {
    _id: "858",
    title: "Inception",
    imageUrl: "https://m.media-amazon.com/images/I/51p3oAsXNmL._AC_.jpg",
    published: "2010",
    imdb: "8.7",
  },
  {
    _id: "868",
    title: "The Matrix",
    imageUrl:
      "https://www.bestmovieposters.co.uk/wp-content/uploads/2019/01/PpD7Q8PR.jpeg",
    published: "1999",
    imdb: "8.6",
  },
  {
    _id: "878",
    title: "Seven",
    imageUrl:
      "https://lh3.googleusercontent.com/proxy/3pvK8Cp-E-mY-rx-SAYwvR9HJewaHRNuGq38KCJNiNoRPXLvPEZp-jt9R-byL3IIfFx4-A-heyVhZTRcgH6TxsoYPJRTuv38rvySVMMF2UlGss_KzCekHVfMdAg1aQ",
    published: "1995",
    imdb: "8.6",
  },
  {
    _id: "888",
    title: "Interstellar",
    imageUrl:
      "https://static.displate.com/857x1200/displate/2020-08-26/c4b0028e26ee4e23d4ff8a5a33fcf124_e7abc063505c221631bc828db4fdecab.jpg",
    published: "2014",
    imdb: "8.5",
  },
  {
    _id: "898",
    title: "Leon",
    imageUrl:
      "https://posterspy.com/wp-content/uploads/2020/08/leon-ricojr-RVB.png",
    published: "1994",
    imdb: "8.5",
  },
  {
    _id: "8108",
    title: "The Pianist",
    imageUrl:
      "https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm440-the-pianist_b7f867e1-movie-film-poster-piyanist-film-posteri-1000x1000.jpg",
    published: "2002",
    imdb: "8.5",
  },
  {
    _id: "8118",
    title: "Gladiator",
    imageUrl: "https://fffmovieposters.com/wp-content/uploads/73169.jpg",
    published: "2000",
    imdb: "8.5",
  },
  {
    _id: "8128",
    title: "The Departed",
    imageUrl:
      "https://alternativemovieposters.com/wp-content/uploads/2020/07/James-H-Neal_DEPARTED.jpg",
    published: "2002",
    imdb: "8.5",
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.imageUrl = movie.imageUrl;
  movieInDb.published = movie.published;
  movieInDb.imdb = movie.imdb;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}
