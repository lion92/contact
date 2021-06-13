import React, { Component } from "react";
import "./ContainerPrincipal.css";
import Welcome from "../titre";
import img from "../Photo";
import Photos from "../Photo";
import SousSection from "../SousSection";
import Soussection2 from "../Soussection2";
import SousSectionCompetence from "../SectionCompetence";
import Contact from "../Contact";
class ContainerCV extends Component {
  render() {
    return (
      <>
      <div>
        <div></div>

      
        <div id="Principal">
          <div id="header">
            <Photos />
          <Contact />
          <Welcome />
          </div>
          
          <SousSection />
          <Soussection2 />
          <SousSectionCompetence></SousSectionCompetence>
        </div>
        </div>
      </>
    );
  }
}
export default ContainerCV;
