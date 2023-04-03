import React from 'react';
import { SyncLoader } from 'react-spinners';
const Loading = () => {
  return (
    <section className="loader">
      <SyncLoader color="#1098ad" size={40} className="loader_spinner" />
    </section>
  );
};

export default Loading;
