import "./App.css";
import Navbar from "./component/Navbar";
import Card from "./component/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import MethodSelect from "./component/MethodSelect";
import MaterialSelect from "./component/MaterialSelect";
import Reset from "./component/Reset";
import Switch from "@material-ui/core/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const App = () => {
  useEffect(() => {
    axios.get("http://localhost:3000/requests").then((res) => {
      setdata(res.data);
    });
  }, []);
  const [data, setdata] = useState([]);
  const [statusCheck, setstatusCheck] = useState(false);
  const [materialChecked, setmaterialChecked] = useState(false);
  const [methodChecked, setmethodChecked] = useState(false);
  const [modalClick, setmodalClick] = useState(false);

  const methodFilter = (methodName) => {
    let newData = data.filter((el) => {
      return el.method.includes(methodName);
    });
    setdata(newData);
  };

  const materialFilter = (materialName) => {
    let newData = data.filter((el) => {
      return el.material.includes(materialName);
    });
    setdata(newData);
  };

  const statusFilter = () => {
    if (statusCheck) {
      setstatusCheck(false);
      axios.get("http://localhost:3000/requests").then((res) => {
        setdata(res.data);
      });
    } else {
      setstatusCheck(true);
      let newData = data.filter((el) => {
        return el.status.includes("상담중");
      });
      setdata(newData);
    }
  };

  const hamburgerClick = () => {
    modalClick ? setmodalClick(false) : setmodalClick(true);
  };
  return (
    <>
      <Navbar
        hamburgerClick={hamburgerClick}
        modalClick={modalClick}
        setmodalClick={setmodalClick}
      />
      <h2 className="h2Header">들어온 요청</h2>
      <div className="textHeader">
        파트너님에게 딱 맞는 요청서를 찾아보세요.
      </div>
      <div className="filterArea">
        <MethodSelect
          data={data}
          methodFilter={methodFilter}
          methodChecked={methodChecked}
          setmethodChecked={setmethodChecked}
        />
        <MaterialSelect
          materialFilter={materialFilter}
          materialChecked={materialChecked}
          setmaterialChecked={setmaterialChecked}
        />
        <Reset
          setdata={setdata}
          setmethodChecked={setmethodChecked}
          setmaterialChecked={setmaterialChecked}
        />

        <Switch {...label} onClick={statusFilter} />
        <div className="statusText">상담중인 요청만 보기</div>
      </div>

      <div className="cardArea">
        {data.length === 0 ? (
          <div className="emptyBox">조건에 맞는 견적 요청이 없습니다.</div>
        ) : (
          data.map((el, idx) => {
            return <Card el={el} key={idx} />;
          })
        )}
      </div>
    </>
  );
};

export default App;
