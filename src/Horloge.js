import React, { Component } from 'react';
import { render } from 'react-dom';
class Horloge extends Component{
    constructor(props){
        super(props)
        this.state={date:new Date, compteur:1
                }
    }
    componentDidMount(){
        this.timerID=setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick=()=>{
        this.setState((oldstate, props)=>{
            return {
                date:new Date(),
                compteur:oldstate.compteur+1  
             }         
            });
        }
      

    render(){
        return <>
        <h1>horloge{this.state.date.toLocaleTimeString()}</h1>
        <div><h2>{this.state.compteur}</h2></div>
        </>;



    }
}
export default Horloge 
