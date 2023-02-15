import React, { useContext, useState } from "react";
import styled from "styled-components";
import JrmImg from "../images/image-jeremy.png";
import { createContext } from "react";
import AppContext from "./AppContext";

const Jeremy = () => {
  const { setTime } = useContext(AppContext);

  const day = () => {
    setTime(1);
    setBtn1("100%");
    setBtn2("50%");
    setBtn3("50%");
  };
  const week = () => {
    setTime(2);
    setBtn1("50%");
    setBtn2("100%");
    setBtn3("50%");
  };
  const month = () => {
    setTime(3);
    setBtn1("50%");
    setBtn2("50%");
    setBtn3("100%");
  };

  const [btn1, setBtn1] = useState("100%");
  const [btn2, setBtn2] = useState("100%");
  const [btn3, setBtn3] = useState("100%");

  return (
    <Lurji>
      <LurjiDiv>
        <Img src={JrmImg} />
        <LP>Report for </LP>
        <LH1>Jeremy Robson</LH1>
      </LurjiDiv>
      <Btn1 btn1={btn1} onClick={day}>
        Daily
      </Btn1>
      <Btn2 btn2={btn2} onClick={week}>
        Weekly
      </Btn2>
      <Btn3 btn3={btn3} onClick={month}>
        Monthly
      </Btn3>
    </Lurji>
  );
};

const Lurji = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1e244b;
  width: 300px;
  height: 663px;
  border-radius: 20px;
`;

const LurjiDiv = styled.div`
  width: 100px;
  height: 450px;
  background-color: var(--Blue);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  padding: 140px;
  flex-direction: column;
  border-radius: 20px;
  margin-top: -30px;
`;
const Btn3 = styled.button`
  padding-right: 90px;
  margin-right: 30px;
  font-size: 20px;
  margin-bottom: 20px;
  opacity: ${(props) => props.btn3};
  font-weight: 400;

  &:hover {
    opacity: 100%;
  }
`;
const Btn2 = styled.button`
  padding-right: 90px;
  margin-right: 40px;
  font-size: 20px;
  margin-bottom: 25px;
  opacity: ${(props) => props.btn2};
  font-weight: 400;

  &:hover {
    opacity: 100%;
  }
`;
const Btn1 = styled.button`
  margin-top: 30px;
  margin-right: 150px;
  font-size: 20px;
  margin-bottom: 30px;
  opacity: ${(props) => props.btn1};
  font-weight: 400;

  &:hover {
    opacity: 100%;
  }
  &:active {
    opacity: 100%;
  }
`;
const Img = styled.img`
  height: 90px;
  width: 90px;
  border: 3px solid white;
  border-radius: 50%;
  margin-bottom: 60px;
  margin-left: -100px;
  margin-top: -35px;
`;
const LP = styled.p`
  margin-bottom: 10px;
  margin-left: -100px;
`;
const LH1 = styled.h1`
  font-size: 40px;
  font-weight: 300;
  position: relative;
  display: block;
  line-height: 45px;

  margin-left: -100px;
`;
export default Jeremy;
