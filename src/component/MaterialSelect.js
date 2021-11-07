import React, { useState } from "react";
import "../css/MaterialSelect.css";
const MaterialSelect = ({
  materialFilter,
  materialChecked,
  setmaterialChecked,
}) => {
  const Checked = () => {
    materialChecked ? setmaterialChecked(false) : setmaterialChecked(true);
  };

  return (
    <>
      <select
        className="materialSelect"
        defaultValue="default"
        onClick={Checked}
      >
        <option value="default" disabled hidden>
          재료
        </option>
      </select>
      {materialChecked ? (
        <div className="materialBox">
          <div className="checkBoxArea">
            <input
              type="checkbox"
              onClick={() => {
                materialFilter("알루미늄");
              }}
            />
            알루미늄
          </div>
          <div className="checkBoxArea">
            <input
              type="checkbox"
              onClick={() => {
                materialFilter("탄소강");
              }}
            />
            탄소강
          </div>
          <div className="checkBoxArea">
            <input
              type="checkbox"
              onClick={() => {
                materialFilter("구리");
              }}
            />
            구리
          </div>
          <div className="checkBoxArea">
            <input
              type="checkbox"
              onClick={() => {
                materialFilter("합금강");
              }}
            />
            합금강
          </div>
          <div className="checkBoxArea">
            <input
              type="checkbox"
              onClick={() => {
                materialFilter("강철");
              }}
            />
            강철
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MaterialSelect;
