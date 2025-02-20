import React from 'react';

const TimelineTitle = React.memo(({ title }) => (
  <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500">
    {title}
  </h3>
));

export default TimelineTitle;
