import { useParams, Link, Outlet } from 'react-router-dom'
import UserPost from './UserPost'
import { getPosts } from '../../api'
import { useEffect, useState } from 'react'

function UserPosts() {
    const [posts, setPosts] = useState([])

    const params = useParams()
    const userId = params.id
    const postId = params.postId

    const fetchPosts = async () => {
        const fetchedPosts = await getPosts(userId)
        setPosts(fetchedPosts)
    }

    useEffect(() => {
        fetchPosts()
    })

    return (
        <div className='user-posts'>
            <Link to={`/`}>Home</Link>
            <ul className='user-posts__list'>
                {posts.length > 0 &&
                    posts.map((post) => {
                        return (
                            <li
                                className={
                                    postId
                                        ? 'user-posts__line  preview-mode'
                                        : 'user-posts__line '
                                }
                                key={post.postId}>
                                <UserPost post={post} />
                            </li>
                        )
                    })}
            </ul>
            <Outlet key={postId} />
        </div>
    )
}

export default UserPosts
