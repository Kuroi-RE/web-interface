const Stats = () => {
  // const Stats = {
  //   value1: "1K",
  //   value2: "1K",
  //   value3: "1K",
  // }
  return (
    <div>
      <div className="stat ">
        <div className="stat-title">Tools Used</div>
        <div className="stat-value">1K</div>
        <div className="stat-desc">May 2023 - April 2023</div>
      </div>

      <div className="stat">
        <div className="stat-title">Tools Count</div>
        <div className="stat-value">4</div>
        <div className="stat-desc">+3 (May 2023)</div>
      </div>

      <div className="stat">
        <div className="stat-title">Tools Available</div>
        <div className="stat-value">2</div>
        <div className="stat-desc">60%</div>
      </div>
      <div className="stat">
        <div className="stat-title">Total Page Views</div>
        <div className="stat-value">10,400</div>
        <div className="stat-desc">15% more than last month</div>
      </div>
    </div>
  );
};

export default Stats;
