import {dataMapper} from '../dataMapper/dataMapper.js';

const catalogController = {
    async displayCatalog (_req,res) {
        const coffees = await dataMapper.getListCoffee();
        console.log(coffees);
    
    
        res.render ('pages/catalog', {coffees});
    },
}

export {catalogController};