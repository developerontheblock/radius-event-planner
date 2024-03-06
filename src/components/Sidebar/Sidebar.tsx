import EventDropdown from "./EventsDropdown";

const Sidebar = () => {
  return (
    <div
      data-testid="sidebar"
      className="bg-gray-300 w-full sm:w-1/4 p-4 rounded-b-lg sm:rounded-r-2xl shadow"
    >
      <h1 className="text-xl font-semibold mb-4">Event Details</h1>
      <EventDropdown />
    </div>
  );
};

export default Sidebar;
