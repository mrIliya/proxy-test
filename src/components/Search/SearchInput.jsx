import { useState } from 'react'
import { getUsers } from '../../api'

function SearchInput({ setUsers }) {
    const [input, setInput] = useState('')

    const fetchUsers = async (value) => {
        const users = await getUsers()
        const result = users.filter((user) => {
            return user && user.name && user.name.toLowerCase().includes(value)
        })

        result.sort((a, b) => a.name.localeCompare(b.name))

        setUsers(result)
    }

    const handleSearch = (value) => {
        setInput(value.toLowerCase())
        fetchUsers(value.toLowerCase())
    }

    return (
        <input
            type='text'
            value={input}
            onChange={(e) => handleSearch(e.target.value)}
            className='search'
        />
    )
}

export default SearchInput
