## Angular demo

Now that we have our project, we can start development.
For this demonstration, we are going to create a page that displays some statistics about popular movies,
as well as allows us to open a details page for each that displays more information, and allows us to view and post comments.

### Data

First, we will need some data to display.

At the URL

```
https://api.themoviedb.org/3/movie/24428?api_key=71df36679a0472d74597f58f6fec0185
```

we can find some data for a sample movie. We will use this data to build the view of our application, and then integrate the data source to automatically provide the data we will be displaying.

### First Changes

With the development server started, open the file `src/app/app.component.html`.
Inside you should see HTML markup which represents the page that we have in our browser when we browse to `localhost:4200`.

Delete the contents of the file.

### Angular components

Angular rendering is based on components - think of them like custom HTML tags.

First, we will generate a component for displaying the details of a movie.

```
ng generate component movie-details
```

This will create a directory `movie-details` inside `src/app/`, which will contain the source files for our component.

```
movie-details.component.html - component template
movie-details.component.css - component private styles
movie-details.component.spec.ts - component tests
movie-details.component.ts - component logic
```

As you can see, the component files are similar to the `app.component.*` files in `src/app`, and indeed, that is an App component. This is the root component of our app, and Angular renders this component as our page.

### Render the movie-details component

To render a component somewhere, it must be added to the component template of its parent. The only rendered component right now is App, and its contents are empty.

Therefore add
```
```