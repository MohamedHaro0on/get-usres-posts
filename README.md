# User Posts Viewer

This project is a web application that displays users and their associated posts using data fetched from the [JSONPlaceholder](https://jsonplaceholder.typicode.com) API. It uses Bootstrap for styling and JavaScript for dynamic functionality.

## Features

- Fetch and display a list of users.
- Fetch and display posts for a selected user in an accordion layout.
- Responsive design with Bootstrap.
- Interactive user interface with tabs and accordions for better navigation.

## Technologies Used

- **HTML**: Structure of the webpage.
- **JavaScript**: Fetching and dynamically displaying data.
- **Bootstrap**: Styling and components.
- **JSONPlaceholder API**: Source of data for users and posts.

## Project Structure

-- **project**/ ├── index.html # Main HTML file ├── script.js # JavaScript file for dynamic functionality └── README.md # Project documentation

## Setup

1. Clone the repository or download the project files.
2. Open the `index.html` file in any modern web browser.
3. Ensure you have an active internet connection to load external Bootstrap resources and fetch API data.

## Usage

1. When the application loads, a list of users will appear as tabs.
2. Click on any user tab to fetch and display their posts.
3. Posts are displayed in an accordion-style format for easy navigation.


### Posts Accordion
![Posts Accordion](https://via.placeholder.com/800x400?text=Posts+Accordion)

## API Endpoints

The application uses the following endpoints from JSONPlaceholder:

1. **Users**: `https://jsonplaceholder.typicode.com/users`
2. **Posts by User**: `https://jsonplaceholder.typicode.com/posts?userId={id}`

## Improvements and Enhancements

Future updates can include:
- Error handling with user-friendly messages.
- Loading indicators while fetching data.
- Improved styling with custom CSS.

## License

This project is licensed under the MIT License. Feel free to use and modify it.

---

### Author

**Mohamed Ahmed Ali Haroon**  
For inquiries, please contact at [mohamed.ahmed.ali.haroon@gmail.com].
