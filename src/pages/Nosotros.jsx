import React from 'react';

function Nosotros() {
  return (
    <div className="nosotros-page">
      <div className="nosotros-header">
        <h1>Nosotros</h1>
      </div>
      <div className="nosotros-list">
        <article className="nosotros-card">
          <div className="avatar" aria-hidden="true"></div>
          <div className="nosotros-content">
            <h2>Fundadora</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at tellus vitae ligula ultrices pulvinar.</p>
          </div>
        </article>

        <article className="nosotros-card">
          <div className="avatar" aria-hidden="true"></div>
          <div className="nosotros-content">
            <h2>Mentor</h2>
            <p>Nullam nec felis sed nisl fermentum bibendum. Fusce ullamcorper sem vel libero congue facilisis.</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Nosotros;