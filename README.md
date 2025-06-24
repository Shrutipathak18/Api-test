# Shruti API Server

A sample API server built with Node.js, Express, and Sequelize. Includes full CRUD endpoints for users, products, orders, and categories, with comprehensive API tests using Jest and Supertest.

## API Endpoints
- `GET /api/users`, `POST /api/users`, `GET /api/users/:id`, `PUT /api/users/:id`, `DELETE /api/users/:id`
- `GET /api/products`, `POST /api/products`, `GET /api/products/:id`, `PUT /api/products/:id`, `DELETE /api/products/:id`
- `GET /api/orders`, `POST /api/orders`, `GET /api/orders/:id`, `PUT /api/orders/:id`, `DELETE /api/orders/:id`
- `GET /api/categories`, `POST /api/categories`, `GET /api/categories/:id`, `PUT /api/categories/:id`, `DELETE /api/categories/:id`
- `GET /api/health` (health check)
- `GET /api/docs` (API documentation)

## Tech Stack
- **Node.js**
- **Express**
- **Sequelize** (with SQLite for local/testing)
- **Jest** (testing)
- **Supertest** (API testing)

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000` by default.

## How to Run Tests

- **Run all tests:**
  ```bash
  npm test
  ```
- **Run tests with coverage:**
  ```bash
  npm run test:coverage
  ```
  Coverage report will be available in the `coverage/` directory.

## Testing Tools
- [Jest](https://jestjs.io/)
- [Supertest](https://github.com/visionmedia/supertest)

## Test Coverage Screenshot

![Coverage Screenshot](coverage/coverage-screenshot.png)

---

**Note:** This project uses in-memory data for demonstration and testing. For production, connect Sequelize to a persistent database and implement real models. 