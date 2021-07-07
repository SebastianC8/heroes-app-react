import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto.`);
    }

    return heroes.filter((heroe) => heroe.publisher === publisher);

}