import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPosts } from '../../api'

function UserPost({ post }) {
    const [currentPost, setCurrentPost] = useState({})

    const params = useParams()
    const userId = params.id
    const postId = params.postId

    const fetchAlbums = async () => {
        const fetchedPosts = await getPosts(userId)

        if (post && Object.keys(post).length > 0) {
            setCurrentPost(post)
        } else {
            setCurrentPost(fetchedPosts[postId])
        }
    }

    useEffect(() => {
        fetchAlbums()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <article className='post'>
            <h4 className='post__title'>{currentPost?.postName}</h4>
            <p className='post__text'>{currentPost?.postText}</p>
            <Link to={`/user/${userId}/posts/${currentPost?.postId}`}>
                <button className="post__btn">see post</button>
            </Link>
        </article>
    )
}

export default UserPost
