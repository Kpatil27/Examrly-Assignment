class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const parent = this.props;
    return (
      <div className="progress-bar">
        <div className="value">
          <div
            style={{
              color: parent.reading.color,
              width: parent.reading.value + "%",
            }}
          >
            <span>{parent.reading.value}%</span>
          </div>
        </div>
        <div className="scale">
          <div
            className="graduation"
            style={{
              color: parent.reading.color,
              width: parent.reading.value + "%",
            }}
          >
            <span>|</span>
          </div>
        </div>
        <div className="bar">
          <div
            style={{
              backgroundColor: parent.reading.color,
              width: parent.reading.value + "%",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "#d3d3d3",
              width: 100 - parent.reading.value + "%",
            }}
          ></div>
        </div>
        <div className="legend">
          <div>
            <span className="dot" style={{ color: parent.reading.color }}>
              ●
            </span>
            <span className="label">{parent.reading.name}</span>
          </div>
        </div>
      </div>
    );
  }
}

let reading = {
  name: "Apples",
  value: 18,
  color: "#b53471",
};

React.render(
  <ProgressBar reading={reading} />,
  document.getElementById("root")
);
