# Currency Converter

This project is a simple currency conversion application built using React, Vite, Vitest and TailwindCSS. It allows users to convert amounts between EUR, USD, and JPY using real-time exchange rates.

## Prerequisites

Before you begin, ensure you have the following installed:

- `Node.js` (preferably the latest LTS version)
- `npm` or `Yarn`

## Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/nikolailehbrink/currency-converter
cd currency-converter
npm install
```

## Environment Variables

Create a `.env` file in the root of your project and populate it with the necessary environment variables:

```plaintext
VITE_EXCHANGE_API_KEY=your_exchange_rate_api_key_here
```

Replace `your_exchange_rate_api_key_here` with your actual API key that you can obtain for free from
[https://www.exchangerate-api.com/](https://www.exchangerate-api.com/).

## Running the Project Locally

To start the development server, run the following command:

```bash
npm run dev
```

This command will start a local development server and open the application in your default web browser. The application will automatically reload if you make changes to any of the source files.

## Building for Production

To build the application for production, use:

```bash
npm run build
```

This command will produce a `dist/` directory with all the assets compiled and optimized for production use.

## Running Tests

To execute the tests, run:

```bash
npm run test
```

This will run the test suite configured with Vitest.

## Additional Scripts

- **`npm run preview`**: Locally preview production build
- **`npm run lint`**: Lint and fix files (if you have ESLint configured)

## License

Specify the license under which your project is made available (e.g., MIT).
