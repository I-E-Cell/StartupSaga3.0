import React from 'react';

const TimelinePoint = React.memo(() => (
  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
    <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300" />
  </div>
));

// Add display name for debugging purposes
TimelinePoint.displayName = 'TimelinePoint';

export default TimelinePoint;