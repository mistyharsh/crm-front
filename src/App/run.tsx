import { RouterProvider, type Router } from '@tanstack/react-router';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './style.css';

export type RunOptions = {
  router: Router;
};

export type StrictAppProps = {
  router: Router;
}

export function withStrictMode(props: StrictAppProps) {
  return function StrictApp() {
    return (
      <StrictMode>
        <RouterProvider router={props.router} />
      </StrictMode>
    );
  }
}

export function run(options: RunOptions) {
  const { router } = options;

  const app = withStrictMode({ router });

  const domElm = document.createElement('div');
  const root = createRoot(domElm);

  domElm.className = 'root';
  document.body.appendChild(domElm);

  root.render(React.createElement(app));
}
