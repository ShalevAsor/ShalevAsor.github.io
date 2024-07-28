import React from 'react';

const Section = ({ id, title, content }) => {
  return (
    <section className="section" id={id}>
      <div className="section__title">
        <h3 className="section__header">{title}</h3>
      </div>
      <div className="section__content">
        {content}
      </div>
    </section>
  );
};

export default Section;