# Movie Sagas

![REPO SIZE](https://img.shields.io/github/repo-size/jamespetran/movie-sagas.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/jamespetran/movie-sagas.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/jamespetran/movie-sagas.svg?style=social)

[Deployed Application Here](https://dry-bayou-68430.herokuapp.com/)

## Description

*Duration: January 29-30, 2022*

I was given a barebones react app, some data in a database, and was given the task to enhance the application by creating a details page. 

The barebones app started with a list of movies. I added used the react-router to add links and routes to different pages that showed details about each movie. As there were 14 movies in the database, I knew that creating each page individually would take too long. So I used automated processes to grab the movie poster, title, description and genres, and rendered those pieces of data on the each movie's detail page.

Setting up the react-router to use each movie's database ID as a query parameter to render the rest of each site was also another challenge. Finally, the initial sql command was very simple: something like `SELECT * FROM "movies"`. I added to that sql command, joining 2 other tables with genre information and a junction table that assigned genres to movies by id. I added an extra routing `GET` command to grab the specific data that I needed to render all information about each movie, and this specific GET details call is only executed once the movie details page is loaded by clicking on a movie poster. 

The styling also took a bit of time, working with MUI and flexbox to get things laid out in the ways that I think look ok. It's far from beautiful, but it is logically laid out, functional, and things are readable. The details pages also have different sections for the movie's title, description, genres listed along the bottom, and the movie's post on the left. 

All data & images were provided in the assignment setup. Low-res movie posters would be replaced by higher resolution images hosted on a CDN in a real production-level project. 

## Screen Shots

![movie List](./screenshots/MovieList.png?raw=true "Movie List Page")
![movie details](./screenshots/MovieDetails.png?raw=true "Movie Details Page")

## Prerequisites

Required software to run this app on your computer:

- [Node.js](https://nodejs.org/en/)
- [postgreSQL](https://www.postgresql.org/)

## Installation

1. fork the repository on github and clone to your computer
2. create a database named `saga_movies_weekend`.
3. run the `database.sql` file using pstgreSQL, creating new tables in your database that was created above.
4. open your code editor and run `npm install`.
5. run `npm run server` in one terminal window, then `npm run client` in another
6. The `npm run client` command will open up a new browser tab for you at https://localhost:3000/

## Usage

This app is pretty simple to use. As the data is all provided in the database files, the challenge for creating this app was to practice sagas, redux, react, and data manipulation.

A user can click on a movie to get more details about it, and can click to go back to the main movie list.

## Built With

- react
- redux
- MUI
- sagas
- react-router
- postgreSQL
- express
- node

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 
