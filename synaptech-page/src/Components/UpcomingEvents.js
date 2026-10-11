import React from "react";
import "../styles/Styles.css";

// Embedded Synaptech Google Calendar (synaptechuw@gmail.com), agenda view. Events are managed
// in Google Calendar, so nothing on the site needs editing when meetings/events change.
const CALENDAR_ID = "synaptechuw@gmail.com";
const TIMEZONE = "America/Los_Angeles";

const EMBED_URL =
  "https://calendar.google.com/calendar/embed?src=" + encodeURIComponent(CALENDAR_ID) +
  "&ctz=" + encodeURIComponent(TIMEZONE) +
  "&mode=AGENDA&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&showDate=1&showNav=1" +
  "&bgcolor=%23031A2F&color=%232F8DDA";

// "Add to your Google Calendar" link (the cid is the base64 calendar id).
export const SUBSCRIBE_URL = "https://calendar.google.com/calendar/u/0?cid=" + btoa(CALENDAR_ID);

function UpcomingEvents() {
  return (
    <div className="events-calendar">
      <iframe
        className="events-calendar-frame"
        src={EMBED_URL}
        title="Synaptech upcoming events calendar"
        loading="lazy"
        frameBorder="0"
        scrolling="no"
      />
      <p className="events-calendar-note">
        <a id="formlink" href={SUBSCRIBE_URL} target="_blank" rel="noreferrer">
          Add the Synaptech calendar to your Google Calendar
        </a>
      </p>
    </div>
  );
}

export default UpcomingEvents;
