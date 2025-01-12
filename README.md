
# Simple Pipeline App

**Simple Pipeline App** is a React application designed to demonstrate modern CI/CD pipelines using GitHub Actions and AWS CloudFront. This app features a responsive design, data fetched from a dummy API, and an efficient deployment workflow.

---

## Features

- **Responsive Design**: Optimized for all screen sizes.
- **Modern CI/CD**: Automates builds and deployments seamlessly.
- **AWS CloudFront**: Fast global delivery with high availability.
- **Dummy API Integration**: Fetches and displays data dynamically.

---

## Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NoManNayeem/simple-pipeline-app.git
   cd simple-pipeline-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   REACT_APP_API_URL=https://jsonplaceholder.typicode.com/posts
   ```

4. Start the development server:
   ```bash
   npm start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
.
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── App.js              # Main React component
│   ├── index.js            # Entry point
│   ├── index.css           # Global styles
├── .env                    # Environment variables
├── package.json            # Dependencies and scripts
├── README.md               # Project documentation
└── tailwind.config.js      # Tailwind CSS configuration
```

---

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The pipeline performs the following steps:

1. **Continuous Integration**:
   - Installs dependencies.
   - Runs build and lint checks.

2. **Continuous Deployment**:
   - Deploys the app to AWS CloudFront.

---

## Deployment

To deploy this app manually:

1. Build the app:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `build` directory to your hosting provider (e.g., AWS S3 + CloudFront).

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [React](https://reactjs.org/)
