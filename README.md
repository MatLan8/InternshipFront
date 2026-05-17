## Getting Started

Follow the steps below to run the project locally.

---

## Backend Setup

1. Clone the backend repository:

```bash
git clone https://github.com/MatLan8/InternshipBack
```

2. Open the project in your preferred IDE (e.g. Visual Studio or Rider).
3. Run the backend API using HTTP.
4. Ensure the backend is running before starting the frontend application.

Default backend URL:

```bash
http://localhost:5036
```

---

## Frontend Setup

1. Clone the frontend repository:

```bash
git clone https://github.com/MatLan8/InternshipFront
```

2. Install dependencies:

```bash
npm install
```

---

## Environment Configuration

1. Create a local environment file:

```bash
cp .env.local_example .env.local
```

2. Update `.env.local` with the backend API URL:

```bash
VITE_BASE_URL=http://localhost:5036/api
```

Make sure this value matches your running backend configuration.

---

## Run the Frontend

Start the development server:

```bash
npm run dev
```

Open the URL shown in the terminal in your browser.

---

## Notes

- The backend must be running before starting the frontend.
- Ensure the API base URL in `.env.local` is correct.
- Default backend port is 5036 unless changed in configuration.