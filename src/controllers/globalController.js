export const getHome = (req, res) => res.render("index", { page: "Home" });
export const getLogin = (req, res) => res.render("index", { page: "Login" });
export const getPhotos = (req, res) => res.render("index", { page: "Photos" });
export const getProfile = (req, res) =>
  res.render("index", { page: "Profile" });
