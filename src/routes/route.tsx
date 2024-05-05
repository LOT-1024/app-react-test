import { useRoutes } from "react-router-dom";
import { BooksPage, HomeLogin, HomeMain, LoginPage, RegisterPage } from "../view/pages";

const login = {
    path: "/login",
    element: <LoginPage/>
}
const register = {
    path: "/register",
    element: <RegisterPage/>
}

const mainlogin = {
    path: "/main",
    element: <HomeLogin/>
}

const main = {
    path: "/",
    element: <HomeMain/>
}

const books = {
    path: "/books",
    element: <BooksPage/>
}

const Routes = () => {
    return useRoutes([login, register, books, main, mainlogin])
}

export default Routes