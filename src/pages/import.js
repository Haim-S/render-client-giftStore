import React from "react";

// import HomePage from "./HomePage";
// import CategoryPage from "./CategoryPage";
// import CartPage from "./CartPage";
// import AboutPage from "./AboutPage";
// import ErrorPage from "./ErrorPage";
// import OneCardPage from "./OneCardPage";
// import SignUpPage from "./SignUpPage";

const HomePage = React.lazy(()=> import("./HomePage"));
const CategoryPage = React.lazy(()=> import("./CategoryPage"));
const CartPage = React.lazy(()=> import("./CartPage"));
const AboutPage = React.lazy(()=> import("./AboutPage"));
const ErrorPage = React.lazy(()=> import("./ErrorPage"));
const OneCardPage = React.lazy(()=> import("./OneCardPage"));
const SignUpPage = React.lazy(()=> import("./SignUpPage"));
const OrderPage = React.lazy(()=> import("./OrderPage"));


const mainRoutes = [
    {
        path: "/",
        component: HomePage,
        isProtected: true,
    },
    {
        path: "/category/:category",
        component: CategoryPage,
        isProtected: true,
    },
    {
        path: "/cart",
        component: CartPage,
        isProtected: true,
    },
    {
        path: "/about",
        component: AboutPage,
        isProtected: true,
    }, {
        path: "*",
        component: ErrorPage,
        isProtected: true,
    }, {
        path: "/product/:id",
        component: OneCardPage,
        isProtected: true,
    },
    {
        path: "/login",
        component: SignUpPage,
        isProtected: false,
    },
    {
        path: "/my-orders",
        component: OrderPage,
        isProtected: true,
    }
]


// export {
// HomePage,
// CategoryPage,
// CartPage,
// OneCardPage,
// AboutPage,
// SignUpPage,
// ErrorPage
// }

export {mainRoutes};