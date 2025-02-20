import React from 'react';

const TimelineContent = React.memo(({ title, content }) => {
  // Handle content transformation if it's a React element
  const processedContent = React.useMemo(() => {
    if (React.isValidElement(content)) {
      return React.cloneElement(content, {
        children: React.Children.map(content.props.children, child => {
          // If child is not a valid element (e.g., string), return as is
          if (!React.isValidElement(child)) {
            return child;
          }
          
          // Handle img elements - note that we don't use LazyLoadImage since it's not available
          if (child.type === 'img') {
            return (
              <img
                src={child.props.src}
                alt={child.props.alt || ''}
                className="w-full h-auto"
                loading="lazy"
              />
            );
          }
          return child;
        })
      });
    }
    return content;
  }, [content]);

  return (
    <div className="timeline-content">
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <div className="content">
        {processedContent}
      </div>
    </div>
  );
});

// Add display name for debugging purposes
TimelineContent.displayName = 'TimelineContent';

export default TimelineContent;