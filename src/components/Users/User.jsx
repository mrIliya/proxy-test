import { Link } from 'react-router-dom'

function User({ user }) {
   

    return (
        <div className='user'>
            <h3 className='user__name'>{user.name}</h3>
            <div className='user__buttons'>
                <Link to={`user/${user.id}/posts`}>
                    <button
                        className='user__btn'>
                        posts
                    </button>
                </Link>
                <Link to={`user/${user.id}/albums`}>
                    <button
                        className='user__btn'>
                        albums
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default User
