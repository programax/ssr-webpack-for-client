import React from 'react';
import { useHistory } from 'react-router-dom';

export const Dashboard = ({ data }) => {
  const history = useHistory();

  return (
    <div>
      <h1>Dashboard</h1>

      <ul>
        {data.map((next) => (
          <li key={next}>{next}</li>
        ))}
      </ul>

      <button type="button" onClick={() => history.push('/landing')}>
        to landing
      </button>
    </div>
  );
};
