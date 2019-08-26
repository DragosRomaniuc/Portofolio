import React from 'react';
import Loadable from 'react-loadable';
// const SignUp = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
// const Signin = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));
import Loader from './App/layout/Loader';
const authRoutes = {
    SignUp: React.lazy(() => import('./App/layout/Auth/Signup')),
    SignIn: React.lazy(() => import('./App/layout/Auth/Signup'))
}

// const mainLayoutRoutes = {
//     Portofolio: React.lazy(() => import('./App/layout/MainLayout/Portofolio/Portofolio'))
// }

// const allRoutes = {
//     LearnBootstrap: React.lazy(()=>import('./App/layout/LearnBootstrap/LearnBootstrap'))
// }


// To Export
const routes = {
    auth: [
        { path: '/auth/signup', exact: true, name: 'Signup', component: authRoutes.SignUp},
        { path: '/auth/signin', exact: true, name: 'Signin', component: authRoutes.SignIn}
    ],
    mainLayout: {
        default: Loadable({
            loader: () => import('./../src/App/layout/MainLayout/MainLayout'),
            loading: Loader
        }),
        routes : [ 
            // {path: '/portofolio', exact: true, name: 'Portofolio', component: mainLayoutRoutes.Portofolio }
        ],   
    }
}

export default routes;