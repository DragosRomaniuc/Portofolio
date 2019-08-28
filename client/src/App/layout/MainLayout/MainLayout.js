import React, { Component, Suspense } from 'react';
import {Switch, 
    Redirect,
    Route
} from 'react-router-dom';
// import Loadable from 'react-loadable';
import {connect} from 'react-redux';
import Aux from "../../../Hoc/auxComp";
// import routes from '../../../routes';
import Loader from '../Loader'
import * as mainLayoutAction from './../../../Store/actions/mainLayout-actions';
import routes from "./../../../routes";
// const 
import MinimalisticIntro from './MinimalisticIntro.js';
import Card from './Card';
// import config from './../../../config';

class MainLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            socket: null
        }
    }

    render(){
        const mainLayoutRoutes = routes.mainLayout.routes.map((route,index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props=><route.component {...props}/>} /> 
            ) : (null)
        })

        console.log(mainLayoutRoutes,'layoutroutes')
        return(<Aux>
            <Suspense fallback={<Loader/>}>
                {/* <Dashboard machines={this.props.machines}/> */}
            
             <MinimalisticIntro/>
          
                
                {/* <Switch>
                    {mainLayoutRoutes}
                    
                    <Redirect from="/" to="/default" />
                 </Switch> */}
            </Suspense>
        </Aux>)


    }
}

const mapStateToProps = state => {
    // console.log('state',state)
    return {
        config: state.config,
        machines: state.mainLayout.machines
    }
}

const mapActionToProps = {
    setData: mainLayoutAction.setData
}

export default connect(mapStateToProps,mapActionToProps)(MainLayout);