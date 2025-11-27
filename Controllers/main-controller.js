const mainController = {
    renderHomePage (req, res) {
        res.render("pages/home");
    },

    renderCatalogPage (req, res) {
        res.render("pages/catalog");
    },
};

export default mainController;