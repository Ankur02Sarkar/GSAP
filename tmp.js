"use client";

import React, { useState, useEffect } from "react";
import "./home.css";

export default function Home() {
  const [currentFlip, setCurrentFlip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFlip((prevFlip) => prevFlip + 1);
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  useEffect(() => {
    console.log("currentFlip : ", currentFlip);
  }, [currentFlip]);

  return (
    <section className="timeline">
      <ol>
        <li className={`timelineItem ${currentFlip === 0 ? "flip" : ""}`}>
          <div className="just-date">
            <h1 className="float-end">01</h1>
            <p className="timeLineText">Initial Consultation</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li />
        <li className={`timelineItem ${currentFlip === 1 ? "flip" : ""}`}>
          <div className="just-date">
            <h1 className="float-end">02</h1>
            <p className="timeLineText">Design Concept Development</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li />
        <li className={`timelineItem ${currentFlip === 2 ? "flip" : ""}`}>
          <div className="just-date">
            <h1 className="float-end">03</h1>
            <p className="timeLineText">Materials Selection</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li />
        <li className={`timelineItem ${currentFlip === 3 ? "flip" : ""}`}>
          <div className="just-date">
            <h1 className="float-end">04</h1>
            <p className="timeLineText">Site Inspection</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li />
        <li className={`timelineItem ${currentFlip === 4 ? "flip" : ""}`}>
          <div className="just-date">
            <h1 className="float-end">05</h1>
            <p className="timeLineText">Procurement and Project Management</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li />
        <li className={`timelineItem ${currentFlip === 5 ? "flip" : ""}`}>
          <div className="just-date">
            <h1 className="float-end">06</h1>
            <p className="timeLineText">Installation</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li />
        <li className={`timelineItem ${currentFlip === 6 ? "flip" : ""}`}>
          <div className="just-date">
            <h1 className="float-end">07</h1>
            <p className="timeLineText">Styling and Finishing Touches</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li />
        <li className={`timelineItem ${currentFlip === 7 ? "flip" : ""}`}>
          <div className="just-date">
            <h1 className="float-end">08</h1>
            <p className="timeLineText">Project Completion and Handover</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li />
      </ol>
    </section>
  );
}
