import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ListContainer from '../containers/ListContainer';
import { RootState } from '../types';

export default function Home() {
    const token = useSelector<RootState, string|null>((state)=> state.auth.token); 
    const navigate = useNavigate();

    if(token === null){
        navigate("/signin");
    }
    return (
        <ListContainer/>
    )

}