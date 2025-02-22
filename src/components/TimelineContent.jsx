import React from "react";
import TimelineRegisterButton from "./TimelineRegButton";

const TimelineContent = React.memo(
  ({ title, content, eventType, registrationLink }) => {
    const processedContent = React.useMemo(() => {
      if (React.isValidElement(content)) {
        return React.cloneElement(content, {
          children: React.Children.map(content.props.children, (child) => {
            if (!React.isValidElement(child)) {
              return child;
            }

            if (child.type === "img") {
              return (
                <img
                  src={child.props.src}
                  alt={child.props.alt || ""}
                  className="w-full h-auto"
                  loading="lazy"
                />
              );
            }
            return child;
          }),
        });
      }
      return content;
    }, [content]);

    return (
      <div className="timeline-content">
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <div className="content">
          {processedContent}
          <TimelineRegisterButton
            eventType={eventType}
            link={registrationLink}
          />
        </div>
      </div>
    );
  }
);

TimelineContent.displayName = "TimelineContent";

export default TimelineContent;
