import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App/App';

export function main() {
  const domElm = document.createElement('div');
  const root = createRoot(domElm);

  document.body.appendChild(domElm);
  root.render(React.createElement(App));
}

main();
