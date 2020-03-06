export const home = (req, res) => res.render("Home", { pageTitle: "Home" });

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const videos = (req, res) => res.render("Videos", { pageTitle: "Videos" });
export const upload = (req, res) => res.render("Upload", { pageTitle: "Upload" });
export const videosDetail = (req, res) => res.render("Video Detail", { pageTitle: "Video Detail" });
export const editVideos = (req, res) => res.render("Edit Video", { pageTitle: "Edit Video" });
export const deleteVideos = (req, res) => res.render("Delete Video", { pageTitle: "Delete Video" });