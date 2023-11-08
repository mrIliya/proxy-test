import { Outlet, useParams, Link } from 'react-router-dom'
import { getAlbums } from '../../api'
import { useEffect, useState } from 'react'
import UserAlbum from './UserAlbum'

function UserAlbums() {
    const [albums, setAlbums] = useState([])

    const params = useParams()
    const userId = params.id
    const albumId = params.albumId

    const fetchAlbums = async () => {
        const fetchedAlbums = await getAlbums(userId)
        setAlbums(fetchedAlbums)
    }

    useEffect(() => {
        fetchAlbums()
    })
    return (
        <div className='user-albums'>
            <Link to={`/`}>Home</Link>           
            <ul className='user-albums__list'>
                {albums?.length > 0 &&
                    albums.map((album) => {
                        return (
                            <li
                                className={
                                    albumId
                                        ? 'user-albums__line preview-mode'
                                        : 'user-albums__line'
                                }
                                key={album.albumId}>
                                <UserAlbum album={album}/>
                            </li>
                        )
                    })}
            </ul>
            <Outlet  key={albumId}/>
        </div>
    )
}

export default UserAlbums
