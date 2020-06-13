import express from 'express';
import React from 'react';
import path from 'path';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { Dashboard, Landing } from '@client/components';

const PageLayout = ({ children, initialState }) => (
  <html>
    <body>
      <div id="root">{children}</div>

      <script
        dangerouslySetInnerHTML={{
          __html: `window.__initialState__ = ${JSON.stringify(initialState)};`,
        }}
      />
      <script src="/static/bundle.js"></script>
    </body>
  </html>
);

const app = express();

app.use(
  '/static',
  express.static(path.join(__dirname, '..', '..', 'dist', 'static'))
);

app.get('/dashboard', (req, res) => {
  const initialState = { dashboardData: [1, 2, 3] };
  const html = ReactDOM.renderToString(
    <PageLayout initialState={initialState}>
      <StaticRouter location="/dashboard">
        <Dashboard data={initialState.dashboardData} />
      </StaticRouter>
    </PageLayout>
  );
  res.send(html);
});

app.get('/landing', (req, res) => {
  const initialState = { landingData: [4, 5, 6] };
  const html = ReactDOM.renderToString(
    <PageLayout initialState={initialState}>
      <StaticRouter location="/landing">
        <Landing data={initialState.landingData} />
      </StaticRouter>
    </PageLayout>
  );
  res.send(html);
});

app.listen(3000, () => console.log('server started http://localhost:3000'));
