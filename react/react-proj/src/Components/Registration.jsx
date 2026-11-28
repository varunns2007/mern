import { useState } from 'react'
import { z } from 'zod'

const userSchema = z.object({
    username: z.string().min(2).max(100),
    email: z.string().email(),
    phone: z.string().regex(/^[0-9]{10}$/),
})

const [ error, setError ] = useState([])

function Registration() {
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
    })
    const [editingUserId, setEditingUserId] = useState(null)

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (editingUserId === null) {
            setUsers([...users, { id: Date.now(), ...formData }])
        } else {
            setUsers(users.map((user) => (
                user.id === editingUserId ? { ...user, ...formData } : user
            )))
            setEditingUserId(null)
        }

        setFormData({ username: '', email: '', phone: '' })
    }

    function handleEdit(user) {
        setFormData({
            username: user.username,
            email: user.email,
            phone: user.phone,
        })
        setEditingUserId(user.id)
    }

    function handleDelete(userId) {
        setUsers(users.filter((user) => user.id !== userId))

        if (editingUserId === userId) {
            setEditingUserId(null)
            setFormData({ username: '', email: '', phone: '' })
        }
    }

    return (
        <section className="registration-panel">
            <h2>Registration</h2>
            <form className="registration-form" onSubmit={handleSubmit}>
                <label>
                    Username
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Phone number
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </label>
                <div className="registration-form-actions">
                    <button type="submit">
                        {editingUserId === null ? 'Register' : 'Update User'}
                    </button>
                    {editingUserId !== null && (
                        <button
                            type="button"
                            className="registration-cancel"
                            onClick={() => {
                                setEditingUserId(null)
                                setFormData({ username: '', email: '', phone: '' })
                            }}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            <div className="registration-table-wrap">
                <table className="user-table registration-table">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan="4">No users registered yet.</td>
                            </tr>
                        ) : users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <div className="registration-row-actions">
                                        <button
                                            type="button"
                                            onClick={() => handleEdit(user)}
                                            aria-label={`Edit ${user.username}`}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="registration-delete"
                                            onClick={() => handleDelete(user.id)}
                                            aria-label={`Delete ${user.username}`}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Registration
