import React, { useEffect } from 'react'

import {AppBar, Toolbar, IconButton, Button, makeStyles, Typography } from "@material-ui/core"
import {UserMenu} from './UserMenu';
import { useMeQuery } from '../../../generated/graphql';



interface Props {
    
}


export const Header: React.FC<Props> = () => {
    
    const {data} = useMeQuery();
    const [auth, setAuth] = React.useState(false);

    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        color: 'white',
        flexGrow: 1,
      },
      button: {
        color: 'white'
      }
    }));

    const classes = useStyles();

    var userId = data?.me?.id;
    useEffect(() => {
      if(userId){
        setAuth(true)
      }
    }, [userId])

    const handleLoggedOut = () => {
        setAuth(false)
    }

    const loginMenu = () => {
      if(auth){       
        return (<UserMenu loggedOut={handleLoggedOut}/>)
      } else {
        return ( <div>
          <Button className={classes.button} href="/login" color="inherit">Login</Button>
          <Button variant="outlined" className={classes.button} href="/register" color="inherit">Register</Button> 
        </div>);

      }
    }
   
    return (
      <header>
        <AppBar position="static">   
          <Toolbar>        
            <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
                  <img src="cg_header_logo.png" alt="Logo"/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              
            </Typography>      
            {loginMenu()}
        </Toolbar>
        </AppBar>
      </header>
        )
}
