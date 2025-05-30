# Rendering Strategies App
This project is an example application used during a workshop to demonstrate how pages router and app router work in a web application.

## Key Components
- **app/routes/**: Contains different routing strategies such as client, dynamic, static, and streaming.
- **components/**: Reusable components like loading, page layout, product card, and product list.
- **pages/** : Includes different rendering strategies like CSR (Client-Side Rendering), ISR (Incremental Static Regeneration), SSG (Static Site Generation), and SSR (Server-Side Rendering).

## Running the Project
To start the development server, use:

```
npm run dev
```
This will start the application on a local server, typically at http://localhost:3000/ .

## Building the Project
To build the project for production, use:
```
npm run build
npm run start
```
This will create an optimized version of the application in the out directory.

## Running Tests
To run tests, use:
```
npm run test
```
This will execute the test suite using Jest.