import React from "react";
import './ImageLinksForm.css'

const ImageLinksForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className="f3">{"This brain detects pictures. Give it a try"}</p>
      <div className="center">
        <div className="pa4 br3 shadow-5 center form ">
          <input className="f4 pa2 w-70 center" onChange = {onInputChange} type="text" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-blue" onClick = {onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinksForm;
