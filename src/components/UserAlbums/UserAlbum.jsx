import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAlbums } from '../../api'

function UserAlbum({ album }) {
    const [currentAlbum, setCurrentAlbum] = useState({})

    const params = useParams()
    const userId = params.id
    const albumId = params.albumId

    const fetchAlbums = async () => {
        const fetchedAlbums = await getAlbums(userId)

        if (album && Object.keys(album).length > 0) {
            setCurrentAlbum(album)
        } else {
            setCurrentAlbum(fetchedAlbums[albumId])
        }
    }

    useEffect(() => {
        fetchAlbums()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='album'>
            <h3 className='album__name'>{currentAlbum?.albumName}</h3>

            <Link to={`/user/${userId}/albums/${currentAlbum?.albumId}`}>
                <button className='album__btn'>
                    {currentAlbum?.albumImage && (
                        <img
                            src={require(`../../assets/images/${currentAlbum?.albumImage}`)}
                            alt='user'
                        />
                    )}
                </button>
            </Link>
        </div>
    )
}
export default UserAlbum
