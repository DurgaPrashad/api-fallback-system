# Next.js Shadcn UI Dashboard Application

## Project Overview

This is a modern web application built with Next.js 14, React, and Shadcn UI, featuring a comprehensive dashboard, search functionality, and responsive design.

## 🚀 Features

- **Responsive UI Components**: Fully customizable components using Shadcn UI
- **Dashboard**: Comprehensive analytics and user insights
- **Search Functionality**: Advanced search with results page
- **Theme Support**: Light/dark mode toggle
- **Authentication**: Signup flow
- **Responsive Design**: Mobile and desktop friendly

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **State Management**: React Hooks
- **TypeScript**: Fully typed application

## 🛠️ Project Structure

```
/
├── app/                # Next.js app directory
│   ├── api/            # API route handlers
│   ├── dashboard/      # Dashboard page
│   ├── results/        # Search results page
│   └── signup/         # User signup page
├── components/         # Reusable React components
│   ├── ui/             # Shadcn UI components
│   └── ...             # Other custom components
├── lib/                # Utility functions and API clients
├── public/             # Static assets
├── styles/             # Global CSS
└── hooks/              # Custom React hooks
```

## 🔧 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://your-repo-url.git
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or 
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📋 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run test`: Run tests (if configured)

## 🎨 Theming

The application uses a theme provider with light and dark mode support. Toggle between themes using the theme toggle component.

## 🔒 Authentication

Includes a signup flow with loading states and form validation.

## 📡 API Integration

- Search API endpoint (`/api/search`)
- Dashboard data fetching
- Modular API client in `/lib/api-client.ts`

## 🌟 Components Highlights

- Fully accessible UI components
- Responsive design
- Customizable through Tailwind CSS
- Complete set of Shadcn UI components

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
