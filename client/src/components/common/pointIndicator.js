import React from 'react';
import { Statistic } from 'semantic-ui-react';

const pointIndicator = ({ color, value, label }) => {
  return (
    <div className="pointIndicator">
      <Statistic color={color} inverted>
        <Statistic.Value>{value}</Statistic.Value>
        <Statistic.Label color={color}>{label}</Statistic.Label>
      </Statistic>
    </div>
  );
};

export default pointIndicator;
