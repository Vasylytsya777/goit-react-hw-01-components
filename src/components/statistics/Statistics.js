import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  //   console.log({ title });
  //   const { id, label, percentage } = stats;
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map((item) => (
          <li class="item" key={item.id}>
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// function randomColor() {
//   color =
//     "rgb(" +
//     Math.round(Math.random() * 255) +
//     "," +
//     Math.round(Math.random() * 255) +
//     "," +
//     Math.round(Math.random() * 255) +
//     ")";
//   const result = "#" + color;
//   return result;
// }

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
