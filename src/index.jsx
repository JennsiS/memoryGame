import React from 'react';
import ReactDOM from 'react-dom';
import StartApp from './components/startApp';
import background from './backgroundMario.jpg';

document.body.style.background = `url(${background})`;
// document.body.style.backgroundSize = '50% 50%';
ReactDOM.render(<StartApp />, document.getElementById('app'));
