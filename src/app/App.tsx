import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';
import {DragDrop} from './components/DragDrop';

// ReactDOM.render(<Hello compiler="Typescript" framework="React" bundler="Webpack" />,
// document.getElementById('root'));
ReactDOM.render(<DragDrop />,document.getElementById('root'));
