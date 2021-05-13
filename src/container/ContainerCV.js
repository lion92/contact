import React, { Component } from "react";
import "./ContainerPrincipal.css";
import Welcome from "../../src/helloWorld";
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
        <div id="Principal">
          <Photos />
          <Contact />
          <Welcome />
          <SousSection />
          <Soussection2 />
          <SousSectionCompetence></SousSectionCompetence>
        </div>
      </>
    );
  }
}
export default ContainerCV;
