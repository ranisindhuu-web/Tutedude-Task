# Student Records Dynamic Directory Portal

An asynchronous-ready client engine utilizing DOM node events to match array object maps against custom search strings in real-time.

## Architecture Logic Implemented:
- **Object Data Structures Array**: Holds a series of student profiles containing attributes for `name`, `marks`, `class`, and `address`.
- **Dynamic Array Mapping (`.map()`)**: Transforms objects into clean HTML card blocks without manual iteration strings.
- **Live Vector Filtering (`.filter()`)**: Listens for text input, filters the data layer by checking if a name matches the search query, and updates the grid dynamically.

## How to Test
1. Save `index.html`, `script.js`, and `Readme.md` inside your task folder.
2. Launch `index.html` inside your browser window.
3. Type characters into the input box to see cards appear and disappear instantaneously based on your query.