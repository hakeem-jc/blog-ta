
<div  align="center">

<a  href="https://github.com/hakeem-jc/blog-ta">

</a>

  

<h3  align="center">blog-ta</h3>

  
<p  align="center">

Take Home Assignment
React Application built with Redux, Typescript, Formik and the Google Maps API. I implemented a carousel and grid view for viewing applications and a responsive design to view the application on mobile and desktop. I also used the Google Maps API to use inputted coordinates to generate an interactive map of the chosen location. The application uses  Yup validation to screen for valid input including http/https url's for the input url field and also includes a sort button to view posts in ascending or descending chronological order. 
On the dev ops side, I also added a github actions script to run unit tests on every pull request to block breaking changes.

<a  href="https://blog-ta-hakeem-jc.vercel.app/">View Demo</a>

</p>

</div>

<!-- ABOUT THE PROJECT -->

## About The Project

  

### Built With 
 [![React][React.js]][React-url]


<!-- GETTING STARTED -->

## Getting Started

Running the application locally requires a .env file with the local server URL and a Google Maps API Key:
REACT_APP_SERVER_URL = http://localhost:8080

REACT_APP_GOOGLE_API_KEY ="API_KEY"

 
### Prerequisites

* npm

```sh
npm install npm@latest -g
```

  

### Installation

  

1. Get a free Google Maps API Key at [https://developers.google.com/maps/documentation/javascript/get-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key)

2. Clone the repo

```sh
git clone https://github.com/hakeem-jc/blog-ta.git
```

3. Install NPM packages

```sh
npm install
```

4. Create `.env` file and enter environment variables

```SH
REACT_APP_SERVER_URL  =  http://localhost:8080
REACT_APP_GOOGLE_API_KEY = 'API_KEY'
```
  

<!-- USAGE EXAMPLES -->

## Usage

  

The application provides an interface to create, view, update and delete posts with the provided endpoints. 

## Areas for Improvement
Due to time constraints, I didn't implement automated tests for all features. I wrote an initial validation test to ensure the application renders properly and an integration test for fetching and showing posts on the home page

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-url]: https://www.linkedin.com/in/hakeemclarke/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB

[React-url]: https://reactjs.org/