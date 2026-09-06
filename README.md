# SBJITMR AI Assistant 🎓🤖

A sleek, minimal, and aesthetic web application for the **S. B. Jain Institute of Technology, Management & Research (SBJITMR)** AI Assistant, built with Flask and integrated with Botpress Webchat.

🔗 **Live Demo:** [https://sbjitmr-ai-assistant.onrender.com/](https://sbjitmr-ai-assistant.onrender.com/)

---

## 🌟 Features

- **Focused UI**: Clean single-page layout featuring the AI chatbot right at the center.
- **Modern & Aesthetic**: Soft shadows, rounded cards, refined typography, and subtle light slate/navy background.
- **Fully Responsive**: Seamlessly scales across Desktop, Laptop, Tablet, and Mobile devices.
- **Botpress Integration**: Powered by Botpress Webchat v5 for real-time conversational AI assistance.
- **Lightweight Backend**: Built on Python Flask with dynamic cloud port binding and Gunicorn support.

---

## 📂 Project Structure

```text
sbjitmr-ai-assistant/
│
├── app.py              # Flask server and routing
├── requirements.txt    # Python dependencies (Flask, Gunicorn)
├── Procfile            # Deployment configuration for Render / Heroku
├── run.bat             # One-click startup script for Windows
├── .gitignore          # Git exclusion rules
├── README.md           # Project documentation
│
├── templates/
│   └── index.html      # Minimal frontend layout and Botpress integration
│
└── static/
    ├── style.css       # Modern CSS styling and responsive layout rules
    └── script.js       # Client-side initialization and centering script
```

---

## 🚀 Getting Started (Run Locally)

### Option 1: One-Click Run (Windows)
Double-click **`run.bat`** in the project folder to start the application and automatically open it in your browser.

---

### Option 2: Run via Terminal

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vivek-kothekar/sbjitmr-ai-assistant.git
   cd sbjitmr-ai-assistant
   ```

2. **Create and activate a virtual environment:**
   ```bash
   # Windows
   python -m venv .venv
   .venv\Scripts\activate

   # macOS / Linux
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the Flask server:**
   ```bash
   python app.py
   ```

5. **Open in browser:**
   Navigate to [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## ☁️ Deployment

This project is configured for one-click deployment on platforms like **Render**, **Railway**, and **Heroku**:

- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `gunicorn app:app`

---

## 🛠️ Built With

- **[Python](https://www.python.org/)** & **[Flask](https://flask.palletsprojects.com/)** - Web Framework
- **[Botpress](https://botpress.com/)** - Conversational AI Platform
- **HTML5 / CSS3 / Vanilla JavaScript** - Frontend Interface
- **[Gunicorn](https://gunicorn.org/)** - WSGI HTTP Server

---

## 👤 Author

- **Vivek Kothekar** - [@vivek-kothekar](https://github.com/vivek-kothekar)
