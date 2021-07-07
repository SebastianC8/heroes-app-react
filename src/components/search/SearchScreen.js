import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = ''} = queryString.parse(location.search);
    
    const [ formValues, handleInputChange ] = useForm({
        search_text: q
    });
    
    const { search_text } = formValues;
    
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${search_text}`);
    }
    

    return (
        <div>
            <h1>Search</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Buscador</h4>
                    <hr/>
                    <form onSubmit = { handleSearch }>
                        <input type="text" placeholder="Buscar héroe" className="form-control" name="search_text" value = {search_text} onChange = { handleInputChange } autoComplete="off"/>
                        <button type="submit" className="btn mt-3 col-12 btn-outline-primary">Buscar</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>

                    {
                        (q === '') &&
                        <div className="alert alert-info">
                            Buscar un héroe
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) && 
                        <div className="alert alert-danger">
                            No hay un héroe con <b>{ q }</b>
                        </div>
                    }

                    {
                        heroesFiltered.map((hero) => (
                            <HeroeCard key = { hero.id } heroe = { hero }/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
