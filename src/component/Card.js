import React from "react";
import "../css/Card.css";
const Card = ({ el }) => {
  return (
    <>
      <div className="card">
        <div className="titleBox">
          <div className="title">{el.title}</div>
          {el.status === "상담중" ? (
            <div className="status">{el.status}</div>
          ) : null}
        </div>
        <div className="client">{el.client}</div>
        <p className="due">{el.due}까지 납기</p>
        <div className="hrTag"></div>
        <div className="contentsBox">
          <div className="contentsTitle">도면개수</div>
          <div className="contents">{el.count}개</div>
          <div className="contentsTitle">총 수량</div>
          <div className="contents">{el.amount}개</div>
          <div className="contentsTitle">가공방식</div>
          <div className="contents">
            {el.method.map((ele, idx) => {
              return idx === el.method.length - 1 ? ele : `${ele},`;
            })}
          </div>
          <div className="contentsTitle">재료</div>
          <div className="contents">
            {el.material.map((ele, idx) => {
              return idx === el.material.length - 1 ? ele : `${ele},`;
            })}
          </div>
        </div>
        <div className="buttonBox">
          <button className="requestClick">요청 내역 보기</button>
          <button className="chatting">채팅 하기</button>
        </div>
      </div>
    </>
  );
};

export default Card;
