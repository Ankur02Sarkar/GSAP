import "./home.css";
export default function Home() {
  return (
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
        <li className="timelineItem flip">
          <div className="just-date">
            <h1 className="float-end">03</h1>
            <p className="timeLineText">Materails Selection</p>
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
  );
}
