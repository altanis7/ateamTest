import React, { useEffect, useRef } from "react";
import "../css/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = ({ hamburgerClick, modalClick }) => {
  const modalRef = useRef();

  return (
    <>
      <div className="navbar">
        <div className="hamburgerMenu" onClick={hamburgerClick}>
          <MenuIcon />
        </div>

        <div className="navTitle">CAPA 파트너스</div>
        <div className="navLogout">로그아웃</div>

        {modalClick ? (
          <div className="modal" onClick={hamburgerClick}>
            <div
              className="modalContent"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="modalTitle">CAPA 파트너스</div>
              <div className="modalText">파트너 정밀가공</div>
              <div className="modalLogout"> 로그아웃 </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
