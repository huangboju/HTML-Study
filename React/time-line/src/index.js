import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Clock from './components/Timer/Clock';
import FetchedTimeline from './FetchedTimeline';
import Timeline from './components/Timeline/Timeline';
import Container from './Container';


ReactDOM.render(<Timeline />, document.getElementById('root'));

ReactDOM.render(<FetchedTimeline />, document.getElementById('fetchedTimeline'));

ReactDOM.render(<Container />, document.getElementById('requestRefresh'));

ReactDOM.render(<Clock />, document.getElementById('clock'));
