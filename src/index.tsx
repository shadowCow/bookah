import { createRoot } from 'react-dom/client';
import React from 'react';
import { RootView } from './ui/RootView';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<RootView />);
} else {
    console.error('missing #root element');
}
