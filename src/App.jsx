import { RouterProvider } from 'react-router-dom'
import router from './router/index'
function App() {
    return (
        <main className='main'>
            <RouterProvider router={router} />
        </main>
    )
}

export default App
