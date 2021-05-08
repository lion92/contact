import React, { Component } from 'react';
import './ContainerPrincipal.css'
import Welcome from '../../src/helloWorld'
import img from '../Photo'
import Photos from '../Photo';
import SousSection from '../SousSection'
class ContainerCV extends Component{
    render() {
      return <>
      <div id="Principal">
        <Photos/>
        <Welcome/>
        <SousSection/>
      </div>
      </>;
    }
  }
  export default ContainerCV