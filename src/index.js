import React from 'react';
import ReactDOM from 'react-dom';

// import './sass/base/reset-scss-master/reset.css';
// import './sass/vendors/fontawesome/css/all.min.css';

import Header from './components/header/Header.js';
import Wrap from './components/Wrap.js';

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Wrap/>, document.getElementById('root'));
