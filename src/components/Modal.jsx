import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import Progress from "./MultiColorProgressBar";
import MultiColorProgressBar from "./MultiColorProgressBar";

import { readings } from "./data";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalContent">
            <button className="closeBtn" onClick={() => setIsOpen(false)}>
              <RiCloseLine
                style={{
                  marginBottom: "-3px",
                }}
              />
            </button>
            <h5 className="heading">Strength Bar</h5>
            Introducing strength bar to help you know your week subjects.
          </div>
          <div className="modalProgress">
            <div className="box">
              <div className="first">
                <div className="f1">
                  <span>Weak</span>
                  <MultiColorProgressBar readings={readings} />
                </div>
                <div className="f2">
                  <span>Average</span>
                  <MultiColorProgressBar readings={readings} />
                </div>
              </div>
              <div className="second">
                <div className="s1">
                  <span>Improvment</span>
                  <MultiColorProgressBar readings={readings} />
                </div>
                <div className="s2">
                  <span>Cutoff level</span>
                  <MultiColorProgressBar readings={readings} />
                </div>
              </div>
            </div>
          </div>

          <div className="modalActions">
            <div className="actionsContainer">
              <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
