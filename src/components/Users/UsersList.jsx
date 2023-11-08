import User from './User'
import SearchInput from '../Search/SearchInput'
import { getUsers } from '../../api'
import { useEffect, useState } from 'react'

function UsersList() {
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        const users = await getUsers()
        setUsers(users)
    }

    useEffect(() => {
        fetchUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <section className='users'>
            <SearchInput setUsers={setUsers} />
            {users?.length > 0 &&
                users.map((user) => {
                    return <User user={user} key={user.id} />
                })}
            {users?.length === 0 && <h2 className='users__noresults'>No matched ressults</h2>}
        </section>
    )
}
export default UsersList
