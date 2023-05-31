import React from "react";
const { useState } = require("react");
const { useEffect } = require("react")



const FilterCat = () => {
    const [ Filter, SetFilter ] = useState ([]);
    const [ search, setSearch] = useState ()

    const url = 'https://api-restaurants.onrender.com/api/restaurants'

    const ShowData = async () => {
        const response = await fetch(url);
        const data = response.json()
        SetFilter(data)
    }

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    let results = []
        if (!search){
            results = Filter.filter((capt) =>
                capt.foods.toLowerCase().includes(search.toLowerCase())
            )
        }

    useEffect (() => {
        ShowData()
    }, [])


    return(
        <div>
            <input value={search} onChange={ searcher } type="text" placeholder="Buscar por Comida">

            </input>
            {results.map((food) => (
                <p key={ id }>
                    {food.foods}
                </p>
            ))}
        </div>
    )
}

export default FilterCat
