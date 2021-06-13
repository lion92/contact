import React, { Component } from "react";
import "./ContainerPrincipal.css";
import Titre from "../titre";
import img from "../Photo";
import Photos from "../Photo";
import SousSection from "../SousSection";
import Soussection2 from "../Soussection2";
import SousSectionCompetence from "../SectionCompetence";
import Contact from "../Contact";
import Personnalite from "../Personnalite";
class ContainerCV extends Component {
  render() {
    return (
      <>
  
        

      
        <div id="Principal">
          <div id="header">
            <Photos />
            <Titre />
          <Contact />
          
          </div>
          
          <SousSection />
          <Soussection2 />
          <div id="perso"> 
          <SousSectionCompetence></SousSectionCompetence>
          <Personnalite></Personnalite></div>
         
        </div>

      
      </>
    );
  }
}
export default ContainerCV;
