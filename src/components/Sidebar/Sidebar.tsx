import EventDropdown from "./EventsDropdown";

const Sidebar = () => {
  return (
    <div
      data-testid="sidebar"
      className="sm:col-span-1 p-4 rounded-b-lg sm:rounded-r-2xl shadow bg-gray-300"
    >
      <h1 className="text-xl font-semibold mb-4">Event Details</h1>
      <EventDropdown />
    </div>
  );
};

export default Sidebar;
