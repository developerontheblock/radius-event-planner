# Radius Event Planner

This app is designed to invite partners to a company's event. Identifying partners is done by considering the following steps:

- Partners are read from a file.
- Calculations are built against each partner's geographic location(lat, long) and against a set radius. The records are presented in a table.

Example: We can choose a maximum radius of 100 km from the office and the information about the partners that meet this criteria will be displayed in a table. The following [mathematical formulas](https://en.wikipedia.org/wiki/Great-circle_distance) are used for the calculations.

## Installation

- Clone the repository to your local machine
- Navigate to the project directory
- Install the necessary dependencies by running:

```bash
# install dependencies
npm install

# start app
npm start
```

#### Other commands

```bash
# build project
npm run build

# run unit tests
npm test
```

## Features

- Responsive version.
- Intuitive and simple UI.
- Reading data from a text file(added to the /public directory).
- The layout of the app is made up of a Sidebar section on the left and a larger sized table on the right with partner details.(screenshots attached)
- In the Sidebar section there is a menu with different events, when selecting each one a message appears with information how many days are left to the event / or a message if the event is already past.
- Implemented functionality to search by name of records from the table. Display error message if no records are found.
- Dropdown menu with selection of how many rows of the table to display. Can be selected from values 5, 10, 20, 'All', default value is 5.
- Second Dropdown menu with selection of maximum radius in km to serve as a partner filter. The radius has a default value of 100, but other values such as 50, 150 and 200 can be selected also.
- Depending on the selection in the Dropdown menus, the data in the table changes dynamically.
- A field displaying the exact number of records in the table.
- A scroll button to the top(can be used if there are more records in the table).
- Unit tests with Jest for the components
- Used Tailwind CSS library for styling

## Technologies

[![Technologies](https://skillicons.dev/icons?i=react,typescript,tailwind,jest)](https://skillicons.dev)

## Screenshots

##### Desktop version

![desktop-version](https://github.com/developerontheblock/radius-event-planner/assets/29116578/d7a5aa78-cf45-48b0-8735-730de30b3b82)

##### Mobile version

![mobile-version](https://github.com/developerontheblock/radius-event-planner/assets/29116578/990afd15-23fb-4fc8-980a-edc40e9205ec)

![distances](https://github.com/developerontheblock/radius-event-planner/assets/29116578/f1991f3a-3229-468c-85d6-86029fc01fe1)
