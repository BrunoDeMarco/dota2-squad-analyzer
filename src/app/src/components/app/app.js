import React from 'react';
import './app.scss';
import Header from '../header/header';
import Home from '../home/home';

export default class App extends React.Component{
  render(){
    return (
      <>
        <Header></Header>
        <Home></Home>
      </>
    )
  }
}