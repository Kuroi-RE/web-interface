import CardsData from "../Cards/CardsData";

const Stats = () => {
  const Stats = {
    value1: CardsData().length,
    value2: CardsData().length - 2,
    value3: "1,500",
  };

  return (
    <div>
      <div className="stat">
        <div className="stat-title">Tools Count</div>
        <div className="stat-value">{Stats.value1}</div>
        <div className="stat-desc">+3 (Juni 2023)</div>
      </div>

      <div className="stat">
        <div className="stat-title">Tools Available</div>
        <div className="stat-value">{Stats.value2}</div>
        <div className="stat-desc">80%</div>
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
