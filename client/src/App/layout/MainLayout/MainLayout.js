import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Aux from "../../../Hoc/auxComp";
import routes from '../../../routes';
import Loader from '../Loader'
import * as mainLayoutAction from './../../../Store/actions/mainLayout-actions';

class MainLayout extends Component {
    render(){
        console.log(this.props,"MAINLAYOUT")
        // const mainLayoutRoutes = routes.mainLayout.map((route,index) => {
        //     return (route.component) ? (
        //         <Route
        //             key={index}
        //             path={route.path}
        //             exact={route.exact}
        //             name={route.name}
        //             render={props=><route.component {...props}/>} /> 
        //     ) : (null)
        // })


        return(<Aux>
            <div onClick={()=>this.props.getData()}>Bun venit Main Layout
            {this.props.data}
            </div>
            <Suspense fallback={<Loader/>}>
            
                <Switch>
                    {/* {mainLayoutRoutes} */}
                    <Redirect from="/" to={this.props.config.defaultPath} />
                 </Switch>
            </Suspense>
        </Aux>)


    }
}

const mapStateToProps = state => {
    console.log('state',state)
    return {
        config: state.config
    }
}

const mapActionToProps = {
    getData: mainLayoutAction.getData
}

export default connect(mapStateToProps,mapActionToProps)(MainLayout);