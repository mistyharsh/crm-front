import React from 'react';
import { createRoot } from 'react-dom/client';

import './style.css';

export type RunOptions = {
  component: React.FC;
};

export function run(options: RunOptions) {
  const { component } = options;

  const domElm = document.createElement('div');
  const root = createRoot(domElm);

  domElm.className = 'root';
  document.body.appendChild(domElm);
  root.render(React.createElement(component));
}
