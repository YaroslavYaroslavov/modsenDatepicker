import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'components/App/App';
const root = document.getElementById('root');

if (root) {
    createRoot(root).render(<App />);
}
