import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Clock from './components/Timer/Clock';
import Timeline from './components/Timeline/Timeline';


ReactDOM.render(<Timeline />, document.getElementById('root'));

ReactDOM.render(<Clock />, document.getElementById('clock'));
