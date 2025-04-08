# Pokemon and Digimon Explorer

A web application that allows users to explore Pokemon and Digimon data using their respective APIs.

## Demo site
[https://me.josh.com.tw/oisee-assignment](https://me.josh.com.tw/oisee-assignment)

## Features

- **Pokemon Explorer**
  - View a list of Pokemon with pagination
  - View detailed information for each Pokemon:
    - Name and image
    - Types
    - Physical attributes (height, weight)
    - Base stats with visual bars
    - Abilities

- **Digimon Explorer**
  - Browse through a list of Digimon
  - View detailed information for each Digimon:
    - Name and image
    - Types and attributes
    - Levels
    - Skills with descriptions
    - Release date
    - Description

- **Common Features**
  - Clean and modern UI design
  - Responsive layout
  - Navigation with back functionality
  - Loading states
  - Error handling

## Technical Stack

- **Framework**: React with TypeScript
- **Routing**: React Router v6
- **State Management**: React Query
- **Styling**: 
  - TailwindCSS
  - CSS Modules
  - SCSS
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Project Structure

```
src/
├── Scene/          # Page-level components with routing
│   ├── Pokemon/
│   └── Digimon/
├── Container/      # Business logic and data management
├── Presentation/   # UI components and layouts
├── Component/      # Reusable components
│   ├── Navigation/
│   ├── ListView/
│   ├── PokemonProfile/
│   └── DigimonProfile/
└── api/           # API integration layer
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```
4. Build for production:
   ```bash
   pnpm build
   ```

## APIs Used

- [PokeAPI](https://pokeapi.co/) - For Pokemon data
- [Digimon API](https://digi-api.com/) - For Digimon data

## Architecture

The project follows a three-layer architecture:

- **Scene Layer**: Entry point for each route, combines Container and Presentation
- **Container Layer**: Handles business logic and data management
- **Presentation Layer**: Focuses on UI rendering and user interaction

This separation of concerns allows for:
- Clear responsibility boundaries
- Easier testing and maintenance
- Better code organization
- Reusable components

## Styling Approach

- Mobile-first responsive design
- Component-scoped styles using CSS Modules
- Utility-first approach with TailwindCSS
- SCSS for advanced styling needs

## Development Practices

- TypeScript for type safety
- Consistent code formatting with Prettier
- Component-based architecture
- Reusable UI components
- Clean and maintainable code structure
