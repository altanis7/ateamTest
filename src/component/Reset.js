import React from "react";
import "../css/Reset.css";
import axios from "axios";
import RefreshIcon from "@mui/icons-material/Refresh";
const Reset = ({ setdata, setmaterialChecked, setmethodChecked }) => {
  const resetClick = () => {
    axios.get("http://localhost:3000/requests").then((res) => {
      setdata(res.data);
    });
    setmaterialChecked(false);
    setmethodChecked(false);
  };
  return (
    <>
      <div className="resetBox" onClick={resetClick}>
        <RefreshIcon style={{ marginRight: "5px" }} />
        필터링 리셋
      </div>
    </>
  );
};

export default Reset;
