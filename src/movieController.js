import Movie from "./models/Movie";
/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/

// Add your magic here!

export const getHome = async (req, res) => {
  const movies = await Movie.find({});
  res.render("home", { pageTitle: "Home", movies });
};

export const getCreateMovie = (req, res) => {
  res.render("create", { pageTitle: "Create" });
};
export const postCreateMovie = async (req, res) => {
  let {
    body: { title, year, rating, synopsis, genres }
  } = req;

  genres = genres.split(",");

  try {
    const newMovie = await Movie.create({
      title,
      year,
      rating,
      synopsis,
      genres
    });

    res.redirect(`/${newMovie._id}`);
  } catch (err) {
    console.log(err);
    res.redirect("404", { err });
  }
};

export const getSearchMovie = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const movie = await Movie.findById(id);
    res.render("detail", { pageTitle: movie.title, movie });
  } catch (err) {
    console.log(err);
    res.redirect("404", { err });
  }
};

export const getEditMovie = async (req, res) => {
  const {
    params: { id }
  } = req;
  let movie = await Movie.findById(id);
  movie["genres"] = movie["genres"].toString();

  res.render("edit", { pageTitle: `Editing ${movie.title}`, movie });
};

export const postEditMovie = async (req, res) => {
  const {
    params: { id }
  } = req;

  let {
    body: { title, year, rating, synopsis, genres }
  } = req;

  genres = genres.split(",");

  try {
    const movie = await Movie.findByIdAndUpdate(id, {
      title,
      year,
      rating,
      synopsis,
      genres
    });
    res.redirect(`/${movie._id}`);
  } catch (err) {
    console.log(err);
    res.redirect("404", { err });
  }
};
export const postDeleteMovie = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Movie.findByIdAndDelete(id);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("404", { err });
  }
};

export const getSearchMovies = async (req, res) => {
  const {
    query: { rating, year }
  } = req;

  try {
    if (rating) {
      const movies = await Movie.find({ rating });
      res.render("search", {
        pageTitle: `Filtering by rating: ${rating}`,
        filter: "rating",
        value: rating,
        movies
      });
    }
    if (year) {
      const movies = await Movie.find({ year });
      console.log(movies);
      res.render("search", {
        pageTitle: `Filtering by year: ${year}`,
        filter: "year",
        value: year,
        movies
      });
    }
  } catch (err) {
    console.log(err);
    res.redirect("404", { err });
  }
};
