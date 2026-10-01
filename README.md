# Product CRUD API

A backend practice project for creating, reading, updating, and deleting products with Express and MongoDB.

## Stack
Node.js, Express, Mongoose, MongoDB, and CORS.

## Run locally
Start MongoDB locally. The connection in `config/pdb.js` uses `mongodb://localhost:27017/mongomechine`.

```bash
npm install
node server.js
```

The server listens on `http://localhost:5000`. Visit `/` to check that the API is responding.

## Product routes
| Method | Route | Purpose |
| --- | --- | --- |
| POST | /api/products | Create a product |
| GET | /api/products | List products |
| GET | /api/products/:id | Read one product |
| PUT | /api/products/:id | Update a product |
| DELETE | /api/products/:id | Delete a product |

The server also defines read-only routes at `/products` and `/products/:id`.

## Structure
- `config/pdb.js`: database connection.
- `model/products.js`: product schema.
- `controller/pcontroller.js`: CRUD handlers.
- `routes/proutes.js`: route definitions.
- `server.js`: Express setup.

## Scope
This is a local learning API. Authentication is not implemented. Review validation and error handling before using it beyond local development.
