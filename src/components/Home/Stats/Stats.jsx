const Stats = () => {
  const Stats = {
    value1: "7",
    value2: "5",
    value3: "1,500",
  };
  return (
    <div>
      <div className="stat">
        <div className="stat-title">Tools Count</div>
        <div className="stat-value">{Stats.value1}</div>
        <div className="stat-desc">+3 (May 2023)</div>
      </div>

      <div className="stat">
        <div className="stat-title">Tools Available</div>
        <div className="stat-value">{Stats.value2}</div>
        <div className="stat-desc">60%</div>
      </div>
      <div className="stat">
        <div className="stat-title">Total Page Views</div>
        <div className="stat-value">{Stats.value3}</div>
        <div className="stat-desc">15% more than last month</div>
      </div>
    </div>
  );
};

export default Stats;
