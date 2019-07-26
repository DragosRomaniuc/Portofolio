import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';
import Aux from "../../../Hoc/auxComp";
import routes from './../../../routes';
import Loader from '../Loader'
class MainLayout extends Component {
    render(){
        
        const menu = routes.mainLayout.map((route,index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props=><route.component {...props}/>} /> 
            ) : (null)
        })


        return(<Aux>
            <div>Bun venit Main Layout</div>
            <Suspense fallback={<Loader/>}>
            
                <Switch>
                    {/* {menu} */}
                    {/* <Redirect from="/" to={this.props.defaultPath} /> */}
                 </Switch>
            </Suspense>
        </Aux>)


    }
}

export default MainLayout;