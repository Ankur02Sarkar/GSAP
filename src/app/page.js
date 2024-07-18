import "./home.css";
export default function Home() {
  return (
    <section className="timeline">
      <ol
        style={{
          touchAction: "pan-y",
          userSelect: "none",
          WebkitUserDrag: "none",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        }}
        className=""
      >
        <li className="flip">
          <div className="just-date" style={{ height: 83 }}>
            <h1 className="float-end">01</h1>
            <p className="timeLineText">Initial Consultation</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li className="flip">
          <div className="just-date" style={{ height: 83 }}>
            <p>Ago 5 2018</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li className="">
          <div className="just-date" style={{ height: 83 }}>
            <h1 className="float-end">02</h1>
            <p className="timeLineText">Design Concept Development</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li className="today-mark" />
        <li className="">
          <div className="just-date" style={{ height: 83 }}>
            <h1 className="float-end">03</h1>
            <p className="timeLineText">Materails Selection</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li className="" />
        <li className="">
          <div className="just-date" style={{ height: 83 }}>
            <h1 className="float-end">04</h1>
            <p className="timeLineText">Site Inspection</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li className="" />
        <li>
          <div className="just-date" style={{ height: 83 }}>
            <h1 className="float-end">05</h1>
            <p className="timeLineText">Procurement and Project Management</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li />
        <li>
          <div className="just-date" style={{ height: 83 }}>
            <h1 className="float-end">06</h1>
            <p className="timeLineText">Installation</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li />
        <li>
          <div className="just-date" style={{ height: 83 }}>
            <h1 className="float-end">07</h1>
            <p className="timeLineText">Styling and Finishing Touches</p>
          </div>
          <span className="show-info circle" />
        </li>
        <li />
        <li>
          <div className="just-date" style={{ height: 83 }}>
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
