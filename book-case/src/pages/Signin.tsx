import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SigninContainer from '../containers/SigninContainer';
import { RootState } from '../types';


export default function Signin() {
    const token = useSelector<RootState, string|null>((state)=> state.auth.token); 
    const navigate = useNavigate();

    if(token !== null){
        navigate("/");
    }
    return (
        <SigninContainer/>
    )
}