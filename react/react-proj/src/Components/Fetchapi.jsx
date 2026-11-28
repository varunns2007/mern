import { useEffect, useState } from 'react'

function Fetchapi() {
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [cuisine, setCuisine] = useState('All')

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then((response) => response.json())
            .then((data) => setRecipes(data.recipes))
            .catch((error) => console.error(error))
    }, [])

    const cuisines = ['All', ...new Set(recipes.map((recipe) => recipe.cuisine))]
    const filteredRecipes = recipes.filter((recipe) => {
        const matchesName = recipe.name.toLowerCase().startsWith(search.trim().toLowerCase())
        const matchesCuisine = cuisine === 'All' || recipe.cuisine === cuisine

        return matchesName && matchesCuisine
    })

    return (
        <div className="user-table-wrap">
            <h2>Recipes</h2>
            <div className="recipe-filters">
                <input
                    type="search"
                    placeholder="Search recipe name..."
                    aria-label="Search recipes by name"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <select
                    aria-label="Filter recipes by cuisine"
                    value={cuisine}
                    onChange={(event) => setCuisine(event.target.value)}
                >
                    {cuisines.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Cuisine</th>
                        <th>Difficulty</th>
                        <th>Prep Time</th>
                        <th>Cook Time</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRecipes.length > 0 ? filteredRecipes.map((recipe) => (
                        <tr key={recipe.id}>
                            <td>{recipe.id}</td>
                            <td>{recipe.name}</td>
                            <td>{recipe.cuisine}</td>
                            <td>{recipe.difficulty}</td>
                            <td>{recipe.prepTimeMinutes} min</td>
                            <td>{recipe.cookTimeMinutes} min</td>
                            <td>{recipe.rating}</td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="7">No recipes found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Fetchapi
