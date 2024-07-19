"use client";
import { useEffect } from "react";
import "./home.css";

export default function Home() {
  useEffect(() => {
    const timelineItems = document.querySelectorAll(".timelineItem");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            const boundingRect = entry.boundingClientRect;
            const viewportWidth = window.innerWidth;
            if (boundingRect.left <= viewportWidth * 0.25) {
              entry.target.classList.add("flip");
            } else {
              entry.target.classList.remove("flip");
            }
          } else {
            entry.target.classList.remove("flip");
          }
        });
      },
      {
        threshold: [0, 1],
      }
    );

    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="timelineWrap">
      <section className="timeline">
        <ol>
          <li className="timelineItem">
            <div className="just-date">
              <h1 className="float-end">01</h1>
              <p className="timeLineText">Initial Consultation</p>
            </div>
            <span className="show-info circle" />
          </li>
          <li />
          <li className="timelineItem">
            <div className="just-date">
              <h1 className="float-end">02</h1>
              <p className="timeLineText">Design Concept Development</p>
            </div>
            <span className="show-info circle" />
          </li>
          <li />
          <li className="timelineItem">
            <div className="just-date">
              <h1 className="float-end">03</h1>
              <p className="timeLineText">Materials Selection</p>
            </div>
            <span className="show-info circle" />
          </li>
          <li />
          <li className="timelineItem">
            <div className="just-date">
              <h1 className="float-end">04</h1>
              <p className="timeLineText">Site Inspection</p>
            </div>
            <span className="show-info circle" />
          </li>
          <li />
          <li className="timelineItem">
            <div className="just-date">
              <h1 className="float-end">05</h1>
              <p className="timeLineText">Procurement and Project Management</p>
            </div>
            <span className="show-info circle" />
          </li>
          <li />
          <li className="timelineItem">
            <div className="just-date">
              <h1 className="float-end">06</h1>
              <p className="timeLineText">Installation</p>
            </div>
            <span className="show-info circle" />
          </li>
          <li />
          <li className="timelineItem">
            <div className="just-date">
              <h1 className="float-end">07</h1>
              <p className="timeLineText">Styling and Finishing Touches</p>
            </div>
            <span className="show-info circle" />
          </li>
          <li />
          <li className="timelineItem">
            <div className="just-date">
              <h1 className="float-end">08</h1>
              <p className="timeLineText">Project Completion and Handover</p>
            </div>
            <span className="show-info circle" />
          </li>
          <li />
        </ol>
      </section>
    </div>
  );
}
