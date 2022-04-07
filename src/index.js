/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import StartApp from './components/startApp';
import background from './backgroundMario.jpg';

document.body.style.background = `url(${background})`;
document.body.style.backgroundSize = '130% 100%';
ReactDOM.render(<StartApp />, document.getElementById('app'));
