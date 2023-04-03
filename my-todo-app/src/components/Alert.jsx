import React, { useEffect } from 'react';

const Alert = ({ type, msg, data, AlertHandler }) => {
  return (
    <div className="alert">
      <p className={`alert_${type}`}>{msg}</p>
      <p className={`alert_${type}`}>{data}</p>
    </div>
  );
};

export default Alert;
