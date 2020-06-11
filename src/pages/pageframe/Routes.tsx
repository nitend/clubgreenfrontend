import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { RegisterFlow } from './global/user/register/RegisterFlow'
import { LoginSection } from './global/user/login/LoginSection'
import { Home } from '../homepage/Homepage'
import {BookingRouter } from '../booking/BookingRouter'
import { Header } from './header/Header';
import { Footer } from './footerarea/FooterArea';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { LoadingAnimation } from './global/Messages/LoadingAnimation';
import { AdminMenu } from '../admin/menu/AdminMenu';
import { ProtectedRoute } from './ProtectedRoute';
import { FOOTER_HEIGHT } from '../../config';
import { Onboarding } from '../checkout/Checkout';

interface Props {
  serverConnected: boolean
}


export const Routes: React.FC<Props> = (props) => {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#4caf50'
      },
      secondary: {
        main: '#0099FF'
      },
    },
  });
 
  if(props.serverConnected){
    return (
      
        <BrowserRouter>
          <ThemeProvider theme={theme}>   
             <Header /> 
                <div style={{width: "auto", minWidth: "100%", paddingBottom: FOOTER_HEIGHT }}> 
                  <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/register" component={RegisterFlow}></Route>
                    <Route exact path="/login" component={LoginSection}></Route>
                    <Route exact path="/booking" component={BookingRouter}></Route>
                    <Route exact path="/onboarding/:productId" component={Onboarding}></Route>
                  
                    <ProtectedRoute path="/admin" component={AdminMenu}/>   
                  </Switch>
                </div>  
              <Footer />
          </ThemeProvider>
      </BrowserRouter>
          
  )}
  
  return ( 
            <LoadingAnimation message={'Verbindung zum Server wird hergestellt ...'}/>)
}

