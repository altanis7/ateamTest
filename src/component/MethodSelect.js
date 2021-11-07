import React, { useState } from "react";
import "../css/MethodSelect.css";
const MethodSelect = ({ methodFilter, methodChecked, setmethodChecked }) => {
  const Checked = () => {
    methodChecked ? setmethodChecked(false) : setmethodChecked(true);
  };

  return (
    <>
      <select className="methodSelect" defaultValue="default" onClick={Checked}>
        <option value="default" disabled hidden>
          가공방식
        </option>
      </select>
      {methodChecked ? (
        <div className="methodBox">
          <div style={{ marginBottom: "4px" }}>
            <input
              type="checkbox"
              onClick={() => {
                methodFilter("밀링");
              }}
            />
            밀링
          </div>
          <div>
            <input
              type="checkbox"
              onClick={() => {
                methodFilter("선반");
              }}
            />
            선반
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MethodSelect;
