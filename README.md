# Weather Prediction Project

## Overview
This project is a weather prediction application that utilizes a Next.js frontend, React components, and a Flask backend to provide users with accurate weather forecasts.

## Features
- **Next.js Frontend**: A server-side rendered React application that allows for fast page loads and great user experience.
- **React Components**: Modular components to build interactive UIs efficiently.
- **Flask Backend**: A lightweight backend framework that handles all API requests and data processing for weather predictions.

## Installation
To run the project locally, clone the repository and install the requirements:

```bash
# Clone the repository
git clone https://github.com/AdityaK1301/Weather-Prediction.git

# Navigate to the project directory
cd Weather-Prediction

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
pip install -r requirements.txt
```

## Usage
1. Start the Flask backend:
   ```bash
   cd backend
   python app.py
   ```
2. Start the Next.js frontend:
   ```bash
   cd frontend
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:3000` to access the application.

## API Endpoints
- **/api/weather**: Get current weather data based on the user's location.
- **/api/forecast**: Get weather forecasts for the next few days.

## Contributing
If you’d like to contribute to the project, feel free to fork the repository and submit a pull request with your enhancements.