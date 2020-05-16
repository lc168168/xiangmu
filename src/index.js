import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
import './index.less';
import './utils/rem'
import './utils/reset.css'
import 'antd-mobile/dist/antd-mobile.css'

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

