import { Client } from 'pg';

// * On donne les infos de ce la BDD à pg
const client = new Client(process.env.PG_URL);
// * On connecte le module à la BDD
client.connect();
// * le client est prêt à l'emploi, on peut l'exporter.
export { client };