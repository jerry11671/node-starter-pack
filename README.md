# Node.js & Express.js Starter Project

## Getting Started
Follow the steps below to set up and run the project on your local machine.

### 1. Clone the Repository and remove the Remote Origin
```sh
git clone https://github.com/jerry11671/node-starter-pack.git
cd node-starter-pack
git remote remove origin
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and add the following:

```sh
MONGO_URI=your_mongodb_connection_string_here
```
Alternatively, rename `sample.env` to `.env` and update the values accordingly.

### 3. Update Package Information
Modify `package.json` as needed, such as:
- Project name
- Version
- Description
- Author

### 4. Install Dependencies
Run the following command to install all required dependencies:

```sh
npm install
```

### 5. Run the Project
To start the development server, use:

```sh
npm start
```

For development mode with live reloading:
```sh
npm run dev
```

### 6. Project Structure
```plaintext
├── routes          # API routes
├── models          # Database models
├── controllers     # Business logic
├── config          # Configuration files
├── middleware      # Custom middleware
├── tests           # Custom tests for project
├── .env            # Environment variables
├── package.json    # Project metadata & scripts
├── server.js       # Entry point
```

### 7. Additional Commands
- **Testing:** `npm test`

### 8. License
This project is licensed under [MIT License](LICENSE).

---

For any issues, open an issue on GitHub or contact the maintainer.

Happy coding! 🚀

