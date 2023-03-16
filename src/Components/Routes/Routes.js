import { createBrowserRouter } from "react-router-dom";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Meetings from "../Meetings/Meetings";
import Offers from "../Offers/Offers";
import Register from "../Pages/Register/Register";
import CheckOut from "../Payment/CheckOut";
import Payment from "../Payment/Payment";
import MyReview from "../Profile/MyReview";
import Review from "../Profile/Review";
import Restaurant from "../Restaurant/Restaurant";
import RoomDetails from "../RoomDetails/RoomDetails";
import Rooms from "../Rooms/Rooms";
import Search from "../Search/Search";
import Services from "../Services/Services";
import Login from './../Pages/Login/Login';
import Profile from './../Profile/Profile';
import Offer from './../Offers/Offer';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Header></Header>,
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
            {
                path: '/rooms/:id',
                element: <RoomDetails></RoomDetails>,
                loader: ({ params }) => fetch(`https://brasila-server.vercel.app/allRooms/${params.id}`)
            },
            {
                path: '/search/:total',
                element: <Search></Search>,
                loader: ({ params }) => fetch(`https://brasila-server.vercel.app/search/${params.total}`)
            },
            {
                path: '/restaurant',
                element: <Restaurant></Restaurant>
            },
            {
                path: '/meeting',
                element: <Meetings></Meetings>
            },
            {
                path: '/service',
                element: <Services></Services>
            },
            {
                path: '/offer',
                element: <Offers></Offers>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/payment',
                element: <Payment></Payment>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/check',
                element: <CheckOut></CheckOut>
            },
            {
                path: '/specialOffer',
                element: <Offer></Offer>
            },

        ]
    }
]);

export default router;