import Home from '../pages/Home';
import UserAlbumsList from '../components/UserAlbums/UserAlbumsList';
import UserAlbum from '../components/UserAlbums/UserAlbum';
import UserPostsList from '../components/UserPosts/UserPostsList';
import UsersList from '../components/Users/UsersList';
import { createHashRouter } from 'react-router-dom'
import UserPost from '../components/UserPosts/UserPost';

const router = createHashRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/proxy-test',
        element: <UsersList />,
    },
    {
        path: '/proxy-test/user/:id/albums',
        element: <UserAlbumsList />,
        children: [
            {
                path: ':albumId',
                element: <UserAlbum />,
            },
        ],
    },
    {
        path: '/proxy-test/user/:id/posts',
        element: <UserPostsList />,
        children: [
            {
                path: ':postId',
                element: <UserPost />,
            },
        ],
    }
])

export default router
