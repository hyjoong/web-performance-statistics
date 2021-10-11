import React, { useState, Suspense, lazy, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import InfoTable from "./components/InfoTable";
import SurveyChart from "./components/SurveyChart";
import Footer from "./components/Footer";
//import ImageModal from "./components/ImageModal";

function lazyWithPreload(importFunction) {
  const component = React.lazy(importFunction);
  //lazy를 통해 나온 해당 컴포넌트에 preload라는 속성을 추가
  component.preload = importFunction;
  return component;
}

// 동적으로 import
const LazyImageModal = lazyWithPreload(() => import("./components/ImageModal"));

function App() {
  const [showModal, setShowModal] = useState(false);

  // 최초 페이지가 로드가 되고 모든 컴포넌트의 마운트가 끝났을 때
  useEffect(() => {
    LazyImageModal.preload();
    const img = new Image();
    img.src =
      "https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:800";
  }, []);

  // 마우스를  hover했을 때 import
  //   const handleMouseEnter = () => {
  //     const component = import("./components/ImageModal");
  //   };
  return (
    <div className="App">
      <Header />
      <InfoTable />
      <ButtonModal
        onClick={() => {
          setShowModal(true);
        }}
        // onMouseOver={handleMouseEnter}
      >
        올림픽 사진 보기
      </ButtonModal>
      <SurveyChart />
      <Footer />
      <Suspense fallback={null}>
        {showModal ? (
          <LazyImageModal
            closeModal={() => {
              setShowModal(false);
            }}
          />
        ) : null}
      </Suspense>
    </div>
  );
}

const ButtonModal = styled.button`
  border-radius: 30px;
  border: 1px solid #999;
  padding: 12px 30px;
  background: none;
  font-size: 1.1em;
  color: #555;
  outline: none;
  cursor: pointer;
`;

export default App;
