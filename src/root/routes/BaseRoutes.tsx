import { useMemo } from 'react'
import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from 'react-router-dom';

import Home from '../../modules/home';
import DetailNews from '../../modules/news/DetailNews';
import DetailNews2 from '../../modules/news/DetailNews2';
import DetailNews3 from '../../modules/news/DetailNews3';
import DetailNews4 from '../../modules/news/DetailNews4';
import DetailNews5 from '../../modules/news/DetailNews5';
import DetailNews6 from '../../modules/news/DetailNews6';
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
                    path: "detail-news-2",
                    element: <DetailNews2 />
                },
                {
                    path: "detail-news-3",
                    element: <DetailNews3 />
                },
                {
                    path: "detail-news-4",
                    element: <DetailNews4 />
                },
                {
                    path: "detail-news-5",
                    element: <DetailNews5 />
                },
                {
                    path: "detail-news-6",
                    element: <DetailNews6 />
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
