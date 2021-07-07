import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';

/**
 * Manera dinámica de obtener recursos estáticos (imágenes, archivos..etc)
 */
const heroImages = require.context('../../assets/heroes', true);

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();
    const hero = useMemo(() => getHeroesById(heroId), [heroId]);

    if (!hero) {
        return <Redirect to="/"/>
    }

    const handleReturn = () => history.push('/');

    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <img
                        style = {{ height: 500 }}
                        // src = { `../assets/heroes/${heroId}.jpg` }
                        src = { heroImages(`./${heroId}.jpg`).default }
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                        alt = {hero.superhero}
                    />
                </div>
                <div className="col-8">
                    <h3>{hero.superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
                        <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
                        <li className="list-group-item"><b>First appearance: </b>{hero.first_appearance}</li>
                    </ul>
                    <h5>Characters</h5>
                    <p>{hero.characters}</p>

                    <button className="btn btn-outline-info" onClick = { () => handleReturn() }>Regresar</button>
                </div>
            </div>
        </>
    )
}
