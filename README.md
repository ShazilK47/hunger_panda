# Hunger Panda

## Online Food Order & Delivery System

Hunger Panda is a modern web application for online food ordering and delivery, built with Next.js 15+, TypeScript, and Prisma ORM with MySQL database.

## Project Overview

Hunger Panda provides an intuitive platform connecting customers with local restaurants. The application features a comprehensive role-based access control system distinguishing between regular users (customers) and administrators, ensuring appropriate access to functionality.

## Technology Stack

- **Frontend**: Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS 4.1
- **Backend**: Next.js API Routes and Server Actions
- **Database**: MySQL with Prisma ORM
- **Authentication**: NextAuth.js with JWT strategy
- **State Management**: React Context API
- **Form Validation**: Zod

## Key Features

### User Features
- Account creation and secure authentication
- Browse restaurants and menus
- Search and filter options
- Shopping cart functionality
- Order placement and tracking
- Order history and reordering
- Profile management

### Admin Features
- Comprehensive dashboard with key metrics
- Restaurant management (create, update, delete)
- Menu item management
- Order management and status updates
- User account oversight

## Project Structure

`
hunger_panda/
├── app/                     # Next.js App Router pages
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── (auth)/              # Auth-related pages
│   ├── (dashboard)/         # User and admin dashboards
│   └── (main)/              # Main application pages
├── components/              # React components
├── lib/                     # Utility functions and types
│   ├── actions/             # Server actions
│   ├── auth/                # Auth utilities
│   ├── db/                  # Database utilities
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Helper functions
├── prisma/                  # Prisma ORM
│   ├── schema.prisma        # Database schema
│   └── migrations/          # Schema migrations
└── public/                  # Static assets
`

## Installation

### Prerequisites
- Node.js 18.0 or later
- MySQL 8.0 or later
- npm or yarn package manager

### Setup Instructions

1. Clone the repository:
   `
   git clone https://github.com/yourusername/hunger_panda.git
   cd hunger_panda
   `

2. Install dependencies:
   `
   npm install
   `

3. Configure environment variables:
   - Create a .env file in the root directory
   - Add the following variables:
     `
     DATABASE_URL=\
mysql://username:password@localhost:3306/hunger_panda\
     NEXTAUTH_SECRET=\your-nextauth-secret\
     NEXTAUTH_URL=\http://localhost:3000\
     `

4. Set up the database:
   `
   npx prisma generate
   npx prisma migrate dev
   `

5. Start the development server:
   `
   npm run dev
   `

6. Access the application:
   - Frontend: http://localhost:3000
   - To create an admin account, register a user and manually update the isAdmin field in the database to 	rue.

## Development

### Development Commands
- 
pm run dev: Start development server with Turbopack
- 
pm run build: Build the application for production
- 
pm run start: Start the production server
- 
pm run lint: Run ESLint for code quality

## Database Schema

The application uses a relational database with the following main entities:
- Users
- Restaurants
- Menu Items
- Orders
- Order Items

Refer to prisma/schema.prisma for the complete schema definition.

## Contributing

1. Fork the repository
2. Create your feature branch: git checkout -b feature/my-new-feature
3. Commit your changes: git commit -am 'Add new feature'
4. Push to the branch: git push origin feature/my-new-feature
5. Submit a pull request

## License

[MIT License](LICENSE)

## Acknowledgments

- Created as a university Database Management Systems project
- Built using modern web development practices and tools
