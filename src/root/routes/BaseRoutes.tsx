import { useMemo } from 'react'
import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from 'react-router-dom';

import Home from '../../modules/home';
import DetailNews from '../../modules/news/DetailNews';
import EventsDetail from '../../modules/Events/EventsDetails';
import EventsCoralconnect from '../../modules/Events/EventsCoralconnect';
import DetailNews1 from '../../modules/news/DetailNews1';
import DetailNews2 from '../../modules/news/DetailNews2';
import DetailNews3 from '../../modules/news/DetailNews3';
import DetailNews4 from '../../modules/news/DetailNews4';
import DetailNews5 from '../../modules/news/DetailNews5';
import DetailNews6 from '../../modules/news/DetailNews6';
import DetailNews7 from '../../modules/news/DetailNews7';
import DetailNews8 from '../../modules/news/DetailNews8';
import DetailNews9 from '../../modules/news/DetailNews9';
import DetailNews10 from '../../modules/news/DetailNews10';
import DetailNews11 from '../../modules/news/DetailNews11';
import DetailNews12 from '../../modules/news/DetailNews12';
import DetailNews13 from '../../modules/news/DetailNews13';
import DetailNews14 from '../../modules/news/DetailNews14';
import DetailNews15 from '../../modules/news/DetailNews15';
import DetailNews16 from '../../modules/news/DetailNews16';
import DetailNews17 from '../../modules/news/DetailNews17';
import DetailNews18 from '../../modules/news/DetailNews18';
import DetailNews19 from '../../modules/news/DetailNews19';
import DetailNews20 from '../../modules/news/DetailNews20';
import DetailNews21 from '../../modules/news/DetailNews21';
import DetailNews22 from '../../modules/news/DetailNews22';
import DetailNews23 from '../../modules/news/DetailNews23';
import DetailNews24 from '../../modules/news/DetailNews24';
import DetailNews25 from '../../modules/news/DetailNews25';
import DetailNews26 from '../../modules/news/DetailNews26';
import DetailNews27 from '../../modules/news/DetailNews27';
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
                    path: "detail-news-1",
                    element: <DetailNews1 />
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
                    path: "detail-news-7",
                    element: <DetailNews7 />
                },
                {
                    path: "detail-news-8",
                    element: <DetailNews8 />
                },
                {
                    path: "detail-news-9",
                    element: <DetailNews9 />
                },
                {
                    path: "detail-news-10",
                    element: <DetailNews10 />
                },
                {
                    path: "detail-news-11",
                    element: <DetailNews11 />
                },
                {
                    path: "detail-news-12",
                    element: <DetailNews12 />
                },
                {
                    path: "detail-news-13",
                    element: <DetailNews13 />
                },
                {
                    path: "detail-news-14",
                    element: <DetailNews14 />
                },
                {
                    path: "detail-news-15",
                    element: <DetailNews15 />
                },
                {
                    path: "detail-news-16",
                    element: <DetailNews16 />
                },
                {
                    path: "detail-news-17",
                    element: <DetailNews17 />
                },
                {
                    path: "detail-news-18",
                    element: <DetailNews18 />
                },
                {
                    path: "detail-news-19",
                    element: <DetailNews19 />
                },
                {
                    path: "detail-news-20",
                    element: <DetailNews20 />
                },
                {
                    path: "detail-news-21",
                    element: <DetailNews21 />
                },
                {
                    path: "detail-news-22",
                    element: <DetailNews22 />
                },
                {
                    path: "detail-news-23",
                    element: <DetailNews23 />
                },
                {
                    path: "detail-news-24",
                    element: <DetailNews24 />
                },
                {
                    path: "detail-news-25",
                    element: <DetailNews25 />
                },
                {
                    path: "detail-news-26",
                    element: <DetailNews26 />
                },
                {
                    path: "detail-news-27",
                    element: <DetailNews27 />
                },
                {
                    path: "dive-with-us",
                    element: <DiveWithUs />
                },
                {
                    path: "Events-Details",
                    element: <EventsDetail />
                },
                {
                    path: "EventsCoralconnect",
                    element: <EventsCoralconnect />
                }
            ]
        }
    ], [])
    return (
        <RouterProvider router={createBrowserRouter([...router])} />
    )
}
