// Router.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "../Ui/UserPage/UsersPage";
import Header from "../Ui/NavBar/NavBar";
import HomePage from "../Ui/Home/HomePage";

const router = createBrowserRouter( [
    {
        path: '/',
        element: (
            <>
                <Header />
                <HomePage />
            </>
        ),
    },
    {
        path: '/user',
        element: (
            <>
                <Header />
                <UsersPage />
            </>
        ),
    },
] );

export default function AppRouter()
{
    return <RouterProvider router={router} />;
}
