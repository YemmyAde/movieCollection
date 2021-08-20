import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const IsAuth = () => {

    const state = useSelector((state) => state.login);
console.log(state.id)
    useEffect(() => {
        if(state.login.id === 2){
            return true
        }
        else {
            return false
        }
    }, [state])

    return (
        <div>
            
        </div>
    )
}

export default IsAuth
