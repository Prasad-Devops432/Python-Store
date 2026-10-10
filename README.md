# Python Store: React Shopping Cart

A small single-page React shop with a product list and a cart. Users add products
to the cart, remove them, and see a running total.

## Features

- Product list with name and price.
- Add to cart and remove from cart.
- Live total of the items in the cart.

The product data is hard-coded in `src/App.js`. There is no backend, database or
checkout step.

## Tech stack

- React 19 with Create React App (`react-scripts`)
- Plain CSS
- Docker: multi-stage build served by Nginx

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000.

## Run tests

```bash
npm test
```

## Run with Docker

```bash
docker build -t python-store:local .
docker run --rm -p 8080:80 python-store:local
```

Then open http://localhost:8080.

## Project layout

```
.
├── src/
│   ├── App.js          # Product data, cart state and layout
│   ├── App.css         # Styles
│   └── index.js        # Entry point
├── public/             # HTML template and static files
├── Dockerfile          # Multi-stage build: Node to Nginx
├── nginx.conf          # Single-page app routing
└── .dockerignore
```

## Limitations and next steps

- Products are hard-coded. Moving them to a JSON file or an API would make the
  project closer to a real store.
- The cart is not saved between page refreshes.
- The store name uses an HTML `<marquee>` element. It is deprecated, although browsers still support it, so a CSS animation would be a better choice.
- Dependency note: `react-scripts` 5 is listed alongside React 19, which may produce
  peer-dependency warnings during `npm install`.
