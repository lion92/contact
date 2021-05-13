import React, { Component } from "react";

const SousSection = (props) => {
  {
    return (
      <>
        <div className="SS">
          <div className="div_exp">
            <img className="img_exp" src="https://www.arkance-systems.fr/wp-content/uploads/sites/4/2020/05/Arkance-logo-groot.svg"/>
            <p className="Align">Arkance Systems</p> <p className="DATE">2019-2020</p>
          </div>
          <div className="div_exp">
            {" "}
            <img className="img_exp" src="https://www.jobirl.com/images/societe/1491410472.jpg"/>
            <p className="Align">DSI</p>
            <p className="DATE"> 2018-2019</p>
          </div>
          <div className="div_exp">
          <img className="img_exp" src="http://cache.media.education.gouv.fr/image/Logo/44/9/30_logoAC_VERSAILLES_1284449.jpg"/>
            <p className="Align">Professeur Contractuel de Biochimie </p><p className="DATE">2015-2016</p>
          </div>
        </div>
      </>
    );
  }
};
export default SousSection;
