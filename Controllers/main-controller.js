const mainController = {
    renderHomePage(req, res) {
        res.render("pages/home");
    },

    renderCatalogPage(req, res) {
        res.render("pages/catalog");
    },

    displayMap (req, res) {
        res.render('pages/map');
    },


};

export {mainController};