import React, { createContext, useState } from "react";
import styled, { css } from "styled-components";
import WorkImg from "../images/icon-work.svg";
import PlayImg from "../images/icon-play.svg";
import StudyImg from "../images/icon-study.svg";
import ExerciseImg from "../images/icon-exercise.svg";
import SocialImg from "../images/icon-social.svg";
import Self from "../images/icon-self-care.svg";
import FormJSON from "../data.json";
import "./styles.css";
import Jeremy from "./Jeremy";
import AppContext from "./AppContext";
const TimeTracker = () => {
  const Data = FormJSON;

  const [data, setData] = useState([
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ]);

  const [time, setTime] = useState(1);

  return (
    <AppContext.Provider value={{ time, setTime }}>
      <section>
        <Mtavari>
          <Jeremy />
          <Grid>
            {data?.map((item, index) => (
              <Work key={item.title} className={`category-${index}`}>
                <WorkDiv>
                  <WorkHeaderDiv>
                    <WorkTitle>{item.title}</WorkTitle>
                    <WorkBtn>...</WorkBtn>
                  </WorkHeaderDiv>

                  <WorkHours>
                    {time === 1 && item.timeframes.daily.current}
                    {time === 2 && item.timeframes.weekly.current}
                    {time === 3 && item.timeframes.monthly.current}Hrs
                  </WorkHours>

                  {time === 1 && (
                    <WorkSubtitle>
                      Last Week - {item.timeframes.daily.previous} {time}
                    </WorkSubtitle>
                  )}
                  {time === 2 && (
                    <WorkSubtitle>
                      Last Week - {item.timeframes.weekly.previous} {time}
                    </WorkSubtitle>
                  )}
                  {time === 3 && (
                    <WorkSubtitle>
                      Last Week - {item.timeframes.monthly.previous} {time}
                    </WorkSubtitle>
                  )}
                </WorkDiv>
              </Work>
            ))}
          </Grid>
        </Mtavari>
      </section>
    </AppContext.Provider>
  );
};

const Mtavari = styled.div`
  width: 1300px;
  height: 600px;
  display: flex;
  gap: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 20px;
`;
const Work = styled.div`
  width: 320px;
  height: 320px;
  background-color: #ff8a64;
  background-image: url(${WorkImg});
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: top -5px right 15px;
`;
const Play = styled.div``;
const Study = styled.div``;
const Exercise = styled.div``;
const Social = styled.div``;
const SelfCare = styled.div``;

const WorkDiv = styled.div`
  background-color: #1e244b;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  height: 85%;
  margin-top: 51px;
  border-radius: 20px;
  padding: 25px;
  background-position: 0px 30px;
  &:hover {
    background-color: var(--Pale-blue);
  }
`;
const WorkHeaderDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`;
const WorkTitle = styled.h5`
  font-weight: 500;
  font-size: 23px;
`;
const WorkBtn = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  font-weight: 500;
  font-size: 23px;
`;
const WorkHours = styled.h2`
  font-size: 70px;
  font-weight: 300;
  margin-bottom: 15px;
  margin-top: 30px;
`;
const WorkSubtitle = styled.p``;
const WorkDot = styled.h2``;

export default TimeTracker;
