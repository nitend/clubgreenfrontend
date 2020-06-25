import React, { useState, useEffect} from 'react'
import { Routes } from './pages/pageframe/Routes'
import { setAccessToken } from './accessToken';
import { ErrorMessage } from './pages/pageframe/global/Messages/ErrorMessage';
import { BASE_BACKEND_URL } from './config';


interface Props {
}

type auth = {
    isAuthenticated: () => boolean
}


export const App: React.FC<Props> = () => {

    const [isloading, setLoading] = useState(true);
    const [failed, isFailed] = useState();

    /*
    useEffect(() => {
        fetch (BASE_BACKEND_URL +"refresh_token", {
            method: "POST",
            credentials: "include"
        }).then(async x => {
            const {accessToken} = await x.json();
            setAccessToken(accessToken)
            setLoading(false)
            }
        ).catch( error => {
            isFailed(error)
        }     
        );
    }, [])
    */

    if(failed){
        return (
        
                <ErrorMessage error={failed}  show={true}/>   
        );
    }

    if(isloading){
        return (         
            <Routes serverConnected={false}/>
        );
    }

    return (<div>test</div> )
    // <Routes serverConnected={true}/>
}



