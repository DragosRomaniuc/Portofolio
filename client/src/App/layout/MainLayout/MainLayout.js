import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Aux from "../../../Hoc/auxComp";
import routes from '../../../routes';
import Loader from '../Loader'
import * as mainLayoutAction from './../../../Store/actions/mainLayout-actions';
import Dashboard from './Dashboard.js'
const io = require('socket.io-client');

class MainLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            socket: null
        }
    }
    async componentDidMount(){
       await this.initSocket();
    }

    initSocket = () => {
        const socket = io('http://127.0.0.1:8181');

        socket.on('connect', () => {
            console.log('Connected');
            socket.emit('clientAuth','authkeyclient');
        });
     
        socket.on('data',data=>{
            this.props.setData(data);
        })

    }
    render(){
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
            <Suspense fallback={<Loader/>}>
                <Dashboard machines={this.props.machines}/>
                <Switch>
                    {/* {mainLayoutRoutes} */}
                    <Redirect from="/" to={this.props.config.defaultPath} />
                 </Switch>
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