import React, { useState, useEffect} from 'react'
import { Routes } from './pages/pageframe/Routes'
import { setAccessToken } from './accessToken';

interface Props {
}

type auth = {
    isAuthenticated: () => boolean
}


export const App: React.FC<Props> = () => {

    const [isloading, setLoading] = useState(true);

    useEffect(() => {
        fetch ("http://localhost:4000/refresh_token", {
            method: "POST",
            credentials: "include"
        }).then(async x => {
            const {accessToken} = await x.json();
            setAccessToken(accessToken)
            setLoading(false)
            }
        );
        
    }, [])

    if(isloading){
        return (         
            <Routes serverConnected={false}/>
        );
    }

    return <Routes serverConnected={true}/>
}



