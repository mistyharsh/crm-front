import { RouterProvider, type Router } from '@tanstack/react-router';
import { StrictMode, createElement } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.js';

import './Base.css';

export type RunOptions = {
  router: Router<any, any>;
};

export type StrictAppProps = {
  router: Router<any, any>;
};

export function withStrictMode(props: StrictAppProps) {
  const { router } = props;

  return function StrictApp() {
    return (
      <StrictMode>
        <App>
          <RouterProvider router={router} />
        </App>
      </StrictMode>
    );
  };
}

export function run(options: RunOptions) {
  const { router } = options;

  const App = withStrictMode({ router });

  const domElm = document.createElement('div');
  const root = createRoot(domElm);

  domElm.className = 'root';
  document.body.appendChild(domElm);

  root.render(createElement(App));
}
