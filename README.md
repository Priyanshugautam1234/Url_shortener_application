# 🔗 Full Stack URL Shortener

A powerful, feature-rich URL shortening application built with the MERN Stack (MongoDB, Express, React, Node.js).  
This application allows users to shorten long URLs, create custom aliases, generate QR codes, and track click analytics.

![Screenshot](https://via.placeholder.com/800x400?text=URL+Shortener+App+Demo)
*(Run the app locally to see the UI)*

---

##  Key Features

*   **Secure Authentication**: User registration and login using JWT (JSON Web Tokens) and bcrypt for password hashing.
*   **URL Shortening**: Instantly convert long, messy URLs into short, shareable links.
*   **Custom Aliases**: Logged-in users can create custom vanity URLs (e.g., `mysite.com/memes`).
*   **QR Code Generation**: Automatically generates a downloadable QR code for every shortened link.
*   **Dashboard & Analytics**: View a history of all your links and track total clicks.
*   **Security**: Includes HTTP-only cookies, global error handling, and sensitive data protection.
*   **Responsive Patterns**: Built with React and Tailwind CSS for a modern, mobile-friendly interface.

---

## Tech Stack

*   **Frontend**: React.js, Vite, Tailwind CSS, Redux Toolkit, React Query.
*   **Backend**: Node.js, Express.js.
*   **Database**: MongoDB Atlas (Cloud).
*   **Authentication**: JWT, Cookies.

---

##  Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/Priyanshugautam1234/Url_shortener_application.git
cd Url_shortener_application
```

### 2. Backend Setup
Navigate to the backend folder and install dependencies:
```bash
cd BACKEND
npm install
```

**Configuration**:
Create a `.env` file in the `BACKEND` directory with the following:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_random_key
APP_URL=http://localhost:3000/
```

Start the Server:
```bash
npm start
```

### 3. Frontend Setup
Open a new terminal, navigate to the frontend folder, and install dependencies:
```bash
cd ../FRONTEND
npm install
```

Start the React App:
```bash
npm run dev
```

### 4. Access the App
Open your browser and visit: `http://localhost:5173`

---

##  Project Structure

```
├── BACKEND/          # Node.js & Express Server
│   ├── src/
│   │   ├── controller/   # Logic for Auth & URLs
│   │   ├── models/       # Mongoose Schemas (User, ShortUrl)
│   │   ├── routes/       # API Routes
│   │   └── utils/        # Error handlers & Wrappers
│   ├── app.js            # Entry point
│   └── .env              # Environment variables (Ignored in Git)
│
├── FRONTEND/         # React Application
│   ├── src/
│   │   ├── components/   # UI Components (LoginForm, UserUrl)
│   │   ├── pages/        # Dashboard, Homepage, Auth
│   │   ├── store/        # Redux State
│   │   └── routing/      # Routing logic
│   └── vite.config.js
```

---

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

##  License

This project is open source and available under the [MIT License](LICENSE).
