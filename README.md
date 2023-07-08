

# Book App

The Book App is a web application that allows users to view, add, update, and delete books from a book list. Users can sign up for an account, log in to access the app's features, and perform various actions related to managing books.

## Features

- User Authentication: Users can sign up for an account using a username, password, and email. They can then log in to access the app's features.
- Book List: Users can view a list of books with details such as title, author, publisher, published date, and description.
- Add Book: Authenticated users can add new books to the book list by providing the required information.
- Update Book: Authenticated users can update existing books in the book list by modifying the book details.
- Delete Book: Authenticated users can remove books from the book list.
- Navigation: The app provides a navigation bar to easily switch between different pages/routes.

## Technologies Used

- Front-end: React, React Router, HTML, CSS
- Back-end: Python, Flask, SQLAlchemy
- Database: SQLite (can be replaced with any other relational database)

## Getting Started

To get started with the Book App, follow these steps:

1. Clone the repository: `git clone https://github.com/winniegithubrit
2. Navigate to the project directory: `cd book-app`
3. Install the dependencies for the front-end and back-end:
   - Front-end: `cd frontend && npm install`
   - Back-end: `cd backend && pip install -r requirements.txt`
4. Set up the database:
   - Create a new SQLite database file (`book.db`) in the `backend` directory.
   - Run the database migration command: `flask db upgrade`
5. Start the back-end server: `flask run` (from the `backend` directory)
6. Start the front-end development server: `npm start` (from the `frontend` directory)
7. Access the app in your browser at `http://localhost:3000`

## API Endpoints

The back-end provides the following API endpoints:

- `POST /register`: Register a new user with username, password, and email.
- `POST /login`: Authenticate the user and generate a session token for subsequent requests.
- `GET /books`: Retrieve the list of books.
- `POST /books`: Add a new book to the list.
- `PUT /books/:id`: Update an existing book by ID.
- `DELETE /books/:id`: Delete a book by ID.

## Folder Structure

The project follows a typical folder structure for a React and Flask application:

- `backend/`: Contains the Flask back-end code and database migration files.
- `frontend/`: Contains the React front-end code and assets.
- `frontend/src/Components/`: Contains React components for different pages and features.
- `frontend/src/App.js`: Main component and routing configuration.
- `frontend/src/index.js`: Entry point for the React app.

## Contributing

Contributions to the Book App are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request. Make sure to follow the project's coding style and guidelines.

## License

The Book App is open-source software licensed under the [MIT License](LICENSE).

