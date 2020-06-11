import React from 'react'
import { Avatar, Menu, MenuItem } from '@material-ui/core';
import Person from '@material-ui/icons/Person'
import {useHistory} from 'react-router-dom'
import { useLogoutMutation } from '../../../generated/graphql'
import { setAccessToken } from '../../../accessToken'

interface Props {
    loggedOut: any
}


export const UserMenu: React.FC<Props> = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [logout, {client}] = useLogoutMutation();
    

    let history = useHistory();

    const handleLogoutClicked = async () => {
        history.push("/") 
        setAccessToken("");
        client!.clearStore()        
            .then(() => logout()).then(props.loggedOut())
        handleClose(); 
    };

    const open = Boolean(anchorEl);

    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleMenu = (event :any) => {
    setAnchorEl(event.currentTarget);
    };

    return (
        <div>
            <Avatar aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              style={{backgroundColor: "#ffffff"}}>
                  <Person color="primary"></Person>
                </Avatar>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleLogoutClicked}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>    
            </div>
    )
}
