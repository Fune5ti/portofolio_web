import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ color, pct }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={"2rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
    ></circle>
  );
};

const Text = ({ percentage, textColor }) => {
  return (
    <text
      x="50%"
      y="50%"
      fill={textColor}
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.5em"}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const Pie = ({ percentage, foregroundColor, backgroundColor, textColor }) => {
  const [progressBar, setProgressBar] = useState(0);
  const pct = cleanPercentage(percentage);

  const updatePercentage = () => {
    setTimeout(() => {
      setProgressBar(progressBar + 1);
    }, 5);
  };

  useEffect(() => {
    if (pct > 0) updatePercentage();
  }, [pct]);

  useEffect(() => {
    if (progressBar < pct) updatePercentage();
  }, [progressBar]);

  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle color={foregroundColor} />
        <Circle color={backgroundColor} pct={progressBar} />
      </g>
      <Text percentage={progressBar} textColor={textColor} />
    </svg>
  );
};

Pie.propTypes = {
  percentage: PropTypes.number.isRequired,
  foregroundColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
export default Pie;
