import React from 'react';
import { useHistory } from 'react-router-dom';

export const Landing = ({ data }) => {
  const history = useHistory();

  return (
    <div>
      <h1>Landing</h1>

      <ul>
        {data.map((next) => (
          <li key={next}>{next}</li>
        ))}
      </ul>

      <button type="button" onClick={() => history.push('/dashboard')}>
        to dashboard
      </button>
    </div>
  );
};
