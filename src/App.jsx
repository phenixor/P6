import React from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Property from './pages/Property.jsx';
import LinkProperty from './components/LinkProperty.jsx';
import Root from './pages/Home.jsx';
import About from './pages/About.jsx';

const routes = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element : <LinkProperty />,
            },
            {
                path: '/property/:id',
                element: <Property />,
            },
            {
                path: '/about',
                element: <About />,
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/" />
    }
];

const router = createBrowserRouter(routes);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;