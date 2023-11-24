import React from 'react';
import ReactDOM from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {

    const node = document.querySelector('#modal_root');
    if (!node) return null;

    return ReactDOM.createPortal((
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50">
            {children}
        </div>
    ), node);
}