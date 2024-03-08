import React, { useState } from "react";

const events = [
  { id: 1, name: "Company’s Birthday Celebration", date: "2024-04-15" },
  { id: 2, name: "Annual General Meeting", date: "2024-05-20" },
  { id: 3, name: "Product Launch", date: "2024-06-01" },
  { id: 4, name: "Team Building Retreat", date: "2023-12-10" },
];

const EventDropdown = () => {
  const [selectedEventId, setSelectedEventId] = useState<number | "">(
    events[0].id
  );
  const [daysLeft, setDaysLeft] = useState<string>("");

  const calculateDaysLeft = (date: string): string => {
    const now = new Date();
    const eventDate = new Date(date);
    const difference = eventDate.getTime() - now.getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24));

    return days < 0
      ? "This event has already passed."
      : `${days} days left until the event.`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const eventId = Number(e.target.value);
    setSelectedEventId(eventId);
    const event = events.find((event) => event.id === eventId);
    if (event) {
      setDaysLeft(calculateDaysLeft(event.date));
    }
  };

  return (
    <div className="items-center w-full pt-2">
      <select
        value={selectedEventId}
        onChange={handleChange}
        className="border-gray-300 rounded-md p-2 w-full sm:max-w-md md:max-w-lg lg:max-w-xl"
      >
        {events.map((event) => (
          <option key={event.id} value={event.id}>
            {event.name} - {event.date}
          </option>
        ))}
      </select>
      <div className="mt-4 text-center">{daysLeft}</div>
    </div>
  );
};

export default EventDropdown;
