import React, { Component } from 'react';
import './ContainerPrincipal.css'
import Welcome from '../../src/helloWorld'
class ContainerCV extends Component{
    render() {
      return <>
      <div id="Principal">

        <Welcome/>
      </div>
      </>;
    }
  }
  export default ContainerCV