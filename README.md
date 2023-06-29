# React Text Summarizer

This is a simple web application built with React that generates summaries for URLs.

https://ornate-sunshine-9479d1.netlify.app/

## Features

- Enter a URL and click "Get Summary" to retrieve a summary for the provided URL.
- The summary is generated using an API endpoint.

## Server-side

The server-side of this application is responsible for handling the API requests and generating the summaries. It is implemented using a separate backend service.

## Client-side

The client-side of this application is built with React. It provides a user-friendly interface for entering URLs and displaying the generated summaries.

## API Usage
The client-side of this application interacts with an API endpoint to generate the summaries. The API endpoint can be configured by updating the url variable in the fetchData function in App.js.

By default, the API endpoint is set to 'https://react-summarizer-8gzl.onrender.com/api'. You can modify this URL to point to your own backend service or use the provided default endpoint.

#### Please note that the API endpoint may have a rate limit, and if the application is not working, it could be due to exceeding the API rate limit. In such cases, please wait for the rate limit to reset or consider upgrading to a higher rate limit plan.

## Technologies Used
- React
- Axios

### License
This project is licensed under the MIT License.
