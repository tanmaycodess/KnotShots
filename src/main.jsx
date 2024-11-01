
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './Components/Contact/Contact.jsx'
import PhotographyPage from './Components/Photography/Photography.jsx'
import Home from './Pages/Home/Home.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            
            {
                path: "/contact",
                element: <Contact />,

            },
            {
                path: "/gallery",
                element: <PhotographyPage />,
            }

        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

