import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkAuth } from './AuthService';


type MyProps = {
    path: string
    component: React.FunctionComponent
}
type MyState = {
    isLoading: boolean
    isLoggedIn: boolean
}

export class ProtectedRoute extends React.Component<MyProps, MyState> {
    constructor(props: MyProps, context: any){
      super (props, context)
      this.state = {
        isLoading: true,
        isLoggedIn: checkAuth()
      }      
    }
 
    render() {
      return this.state.isLoggedIn ? 
        <Route path={this.props.path} component={this.props.component} /> 
        : <Redirect to={"/login"}/>
    }
       
}

