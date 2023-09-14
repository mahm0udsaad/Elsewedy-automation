import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Timeline, sortEventList } from '@progress/kendo-react-layout';
import { events } from '../data/events';
const sortedEvents = sortEventList(events);
import '@progress/kendo-theme-default/dist/all.css';
const TimeLine = () => {
  const [alterMode, setAlterMode] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setAlterMode(false);
      } else {
        setAlterMode(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
          <div  className="app-wrapper">
              <Timeline events={sortedEvents} alterMode={alterMode} collapsibleEvents={false} />
            </div>
        )
};

export default TimeLine ;