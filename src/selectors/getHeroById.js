import { heroes } from "../data/heroes";

export const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);