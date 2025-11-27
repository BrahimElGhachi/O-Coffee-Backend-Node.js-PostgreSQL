import { client } from '../data/client.js';


const dataMapper = {
    async getListCoffee() {
        const result = await client.query('SELECT coffee.*, country.name AS country_name FROM coffee JOIN country ON coffee.country_id = country.id');
        return result.rows;
    },

    async getOneCoffee(id) {
        const query = ('SELECT coffee.*, country.name AS country_name FROM coffee JOIN country ON coffee.country_id = country.id WHERE coffee.id = $1');
        const values = [id];
        const result = await client.query(query, values);
        return result.rows[0];
    }

};

export {dataMapper};

