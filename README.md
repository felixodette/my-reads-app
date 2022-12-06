# MyReads App

In this project, I created a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that was used to consume information as you interact with the application.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To run the project, download or clone the repository in your computer:

`$ https://github.com/felixodette/my-reads-app.git`

and follow the instructions below.

In the repository folder:

- install all project dependencies with `npm install`
- start the development server with `npm start`
    
Please note that the backend server -against which the web app was developped- was provided by Udacity. The provided file BooksAPI.js contains the methods I used to perform necessary operations on the backend:

- getAll
- update
- search

For more information on how these methods are used exactly, please refer to the original [Udacity repository](https://github.com/udacity/reactnd-project-myreads-starter).


### Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets the user select the shelf for that book. When the user select a different shelf, the book moves there.

The search page has a text input field that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets the user add the book to their library.

### Important Notes
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](https://github.com/dimikara/react-my-reads/blob/master/SEARCH_TERMS.md). That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

### Credits & Helpful Links

- Starter code provided by [Udacity](https://github.com/udacity/reactnd-project-myreads-starter).
- [React documentation](https://reactjs.org/), plus the very helpful section: [Thinking in React](https://reactjs.org/docs/thinking-in-react.html).
- The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). For more information on how to perform common tasks, visit [this page](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
- React Router from [React Training](https://reacttraining.com/react-router/web/example/url-params).

## Authors

* **Felix Odete**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
