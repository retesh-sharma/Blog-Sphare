# BlogSphare API

Welcome to the **BlogSphare API**, a RESTful API for managing a blogging website.

## API Overview
This API provides endpoints for managing users, posts, tags, categories, and comments.

### Base URL
```
https://your-api-url.com
```

### Available Routes
| Endpoint      | Description                        |
|--------------|------------------------------------|
| `/users`     | User related operations           |
| `/posts`     | Post related operations           |
| `/tags`      | Tag related operations            |
| `/categories`| Category related operations       |
| `/postTags`  | Post-Tag relationship operations  |
| `/comments`  | Comment related operations        |

## Getting Started
### Prerequisites
- Node.js
- npm or yarn
- Database (MongoDB, PostgreSQL, etc.)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/blogsphare-api.git
   ```
2. Navigate to the project directory:
   ```sh
   cd blogsphare-api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add database credentials and other necessary configurations.

5. Start the server:
   ```sh
   npm start
   ```

## Usage
### Example Requests
- **Get all users:**
  ```sh
  GET /users
  ```
- **Create a new post:**
  ```sh
  POST /posts
  ```
