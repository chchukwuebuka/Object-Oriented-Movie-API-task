class Movie {
    constructor(title, genre, releaseYear) {
      this.title = title;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.isRented = false;
    };
  
    movie2Rent() {
        switch (this.isRented) {
          case false:
            this.isRented = true;
            return `${this.title} Is temporarily occupied.`;
          case true:
            return `${this.title} is already out.`;
          default:
            throw new Error("Thanks for your time");
        }
      };
      
      movieReturned() {
        switch (this.isRented) {
          case true:
            this.isRented = false;
            return `${this.title} has been returned.`;
          case false:
            return `${this.title} is currently available.`;
          default:
            throw new Error("Thanks for your time");
        }
      };

    };
  class MovieRoom {
    constructor() {
      this.movies = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
    }
  
    listMovies() {
      return this.movies.map(movie => `${movie.title} - ${movie.genre} (${movie.releaseYear})`);
    };
  
    movie2Rent(title) {
        const movie = this.search4Movie(title);
        switch (Boolean(movie)) {
          case true:
            return movie.movie2Rent();
          case false:
            return `Movie with this title '${title}' not found.`;
          default:
            throw new Error("Thanks for you time");
        }
      };
      
      movieReturned(title) {
        const movie = this.search4Movie(title);
        switch (Boolean(movie)) {
          case true:
            return movie.movieReturned();
          case false:
            return `Movie with this title '${title}' not found.`;
          default:
            throw new Error("Thanks for your time");
        }
      };
      
      search4Movie(title) {
        const movie = this.movies.find(movie => movie.title === title);
        return movie ? movie : null;
      };
  };
  
  const movie1 = new Movie("Avatar", "Animation", 2022);
  const movie2 = new Movie("The Keeper", "Drama", 2018);
  const movie3 = new Movie("A Tribe Called Judah", "Comedy", 2023);
  const movie4 = new Movie("Ahamefuna", "Documentery", 2023);
  
  const movieRoom = new MovieRoom();
  
  movieRoom.addMovie(movie1);
  movieRoom.addMovie(movie2);
  movieRoom.addMovie(movie3);
  movieRoom.addMovie(movie4);
  
  console.log("Movies that are Available:");
  console.log(movieRoom.listMovies());
  
  console.log(movieRoom.movie2Rent("Avatar"));
  
  console.log("\nAvailable Movies:");
  console.log(movieRoom.listMovies());
  
  console.log(movieRoom.movieReturned("Avatar"));
  
  console.log("\nAvailable Movies after returning:");
  console.log(movieRoom.listMovies());