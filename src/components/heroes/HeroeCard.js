import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Manera dinámica de obtener recursos estáticos (imágenes, archivos..etc)
 */
const heroImages = require.context('../../assets/heroes', true);

export const HeroeCard = ({ heroe }) => {
    return (
        <div className="card ms-3" style = {{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img
                        // src = { `./assets/heroes/${heroe.id}.jpg` }
                        src = { heroImages(`./${heroe.id}.jpg`).default }
                        className="card-img"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{ heroe.superhero }</h5>
                        <p className="card-text">{ heroe.alter_ego }</p>

                        { 
                            (heroe.alter_ego !== heroe.characters)
                            && <p className="card-text">{heroe.characters}</p>
                        }

                        <p className="card-text">
                            <small className="text-muted">{heroe.first_appearance}</small>
                        </p>

                        <Link to = { `./hero/${heroe.id}` }>Más...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
