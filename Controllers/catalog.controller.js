import { dataMapper } from '../dataMapper/dataMapper.js';

const catalogController = {
    async displayCatalog(_req, res) {
        const coffees = await dataMapper.getListCoffee();
        console.log(coffees);
        res.render('pages/catalog', { coffees });
    },

    async displayCoffeeDetail(req, res, next) {
        try {
            const { id } = req.params;
            const coffee = await dataMapper.getOneCoffee(id);

            if (coffee) {
                return res.render('pages/details', {
                    pageTitle: coffee.name, coffee: coffee
                });
            }
            return next();

        } catch (error) {
            console.error("erreur lors de l'affichage du détail du café:", error);
            next(error);
        }
    },

}

export { catalogController };