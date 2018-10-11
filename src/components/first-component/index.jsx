import React from 'react';
import PropTypes from 'prop-types';
import style from './first-component.css';

const FirstComponent = ({ title }) => (
  <div className={style['first-component']}>{title}</div>
);

FirstComponent.propTypes = {
  title: PropTypes.string,
};

export default FirstComponent;
