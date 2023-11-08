import { useMemo } from 'react'
import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from 'react-router-dom';

import Home from '../../modules/home';
import DetailNews from '../../modules/news/DetailNews';
import DiveWithUs from '../../modules/dive/DiveWithUs';
import Template from './Template';

export default function BaseRoutes() {
    const router = useMemo<RouteObject[]>(() => [
        {
            path: "/",
            element: <Template />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "detail-news",
                    element: <DetailNews />
                },
                {
                    path: "dive-with-us",
                    element: <DiveWithUs />
                }
            ]
        }
    ], [])
    return (
        <RouterProvider router={createBrowserRouter([...router])} />
    )
}
