import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row animate__animated animate__fadeIn">
            {
                heroes.map((heroe) => (
                    <HeroeCard key = { heroe.id } heroe = { heroe }/>
                ))
            }
        </div>
    )
}
