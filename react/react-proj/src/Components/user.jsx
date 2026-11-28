import { useEffect, useState } from 'react'

function User() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Unable to load users')
                }

                return response.json()
            })
            .then(setData)
            .catch((error) => console.error(error))

    }, [])

    return (
        <section className="user-panel" aria-labelledby="user-panel-title">
            <header className="user-panel-header">
                <h2 id="user-panel-title">Users</h2>
                <p className="user-count">
                    {data.length === 0 ? 'Loading...' : `${data.length} users`}
                </p>
            </header>
            {data.length === 0 ? (
                <p className="user-empty">Loading user directory...</p>
            ) : (
                <div className="user-table-wrap">
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td className="user-table-name">{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    )
}

export default User
