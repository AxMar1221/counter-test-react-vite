import React from 'react';
import ReactDOM  from 'react-dom/client';
// import { CounterApp } from './CounterApp';
import { TachiApp } from './TachiApp';
// import { Helloapp } from './Helloapp';
import './styles.css'


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <CounterApp value={ 21 }/> */}
        <TachiApp title={'Hola soy Tachi'}/>
    </React.StrictMode>
);