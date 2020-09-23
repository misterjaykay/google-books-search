import React from 'react';

export default function index(props) {
    return <div className="container" style={props.style}>{props.children}</div>;
}
