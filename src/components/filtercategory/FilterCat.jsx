const { useEffect }=require("react");
const { useState }=require("react")


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
                capt.category.toLowerCase().includes(search.toLowerCase())
            )
        }

    useEffect (() => {
        ShowData()
    }, [])


    return(
        <div>
            <input value={search} onChange={ searcher } type="text" placeholder="Buscar por Categoría">
                <table>
                    <thead>
                        <tr>
                            <th>Restaurant Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        { results.map((categ) => (
                            <tr key={ categ.id }>
                                <td>{categ.id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </input>
        </div>
    )
}

export default FilterCat
