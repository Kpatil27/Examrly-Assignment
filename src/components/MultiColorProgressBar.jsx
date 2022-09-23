import { Component } from "react";
class MultiColorProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const parent = this.props;

    let values =
      parent.readings &&
      parent.readings.length &&
      parent.readings.map(function (item, i) {
        if (item.value > 0) {
          return (
            <div
              className="value"
              style={{ color: item.color, width: item.value + "%" }}
              key={i}
            ></div>
          );
        }
      }, this);

    let calibrations =
      parent.readings &&
      parent.readings.length &&
      parent.readings.map(function (item, i) {
        if (item.value > 0) {
          return (
            <div
              className="graduation"
              style={{ color: item.color, width: item.value + "%" }}
              key={i}
            ></div>
          );
        }
      }, this);

    let bars =
      parent.readings &&
      parent.readings.length &&
      parent.readings.map(function (item, i) {
        if (item.value > 0) {
          return (
            <div
              className="bar"
              style={{ backgroundColor: item.color, width: item.value + "%" }}
              key={i}
            ></div>
          );
        }
      }, this);

    let legends =
      parent.readings &&
      parent.readings.length &&
      parent.readings.map(function (item, i) {
        if (item.value > 0) {
          return <div className="legend" key={i}></div>;
        }
      }, this);

    return (
      <div className="multicolor-bar">
        <div className="values">{values == "" ? "" : values}</div>
        <div className="scale">{calibrations == "" ? "" : calibrations}</div>
        <div className="bars">{bars == "" ? "" : bars}</div>
        <div className="legends">{legends == "" ? "" : legends}</div>
      </div>
    );
  }
}

export let readings = [
  {
    name: "Apples",
    value: 60,
    color: "#eb4d4b",
  },
  {
    name: "Blueberries",
    value: 7,
    color: "#22a6b3",
  },
  {
    name: "Guavas",
    value: 23,
    color: "#6ab04c",
  },
  {
    name: "Grapes",
    value: 10,
    color: "#e056fd",
  },
];
export default MultiColorProgressBar;
