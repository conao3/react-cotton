# Cotton

A drag-and-drop widget builder built with Next.js, React Spectrum, and React Aria.

## Overview

Cotton provides a visual interface for building forms and layouts through an intuitive drag-and-drop system. The sidebar contains a collection of widgets that can be dragged onto the main content area to compose interfaces.

### Available Widgets

- Label
- Textbox
- Checkbox
- Dropdown
- Attachment
- Datetime
- Spacer
- Divider

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React Spectrum](https://react-spectrum.adobe.com/) - Adobe's design system
- [React Aria](https://react-spectrum.adobe.com/react-aria/) - Accessible UI primitives
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Prerequisites

- Node.js 20.9 or later
- pnpm 7.33.7

### Installation

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
pnpm build
```

### Production

Run the production server:

```bash
pnpm start
```

## Project Structure

```
src/
├── pages/          # Next.js pages
│   ├── _app.tsx    # App wrapper
│   ├── _document.tsx
│   └── index.tsx   # Main page
└── parts/          # UI components
    ├── CottonMain.tsx
    ├── CottonHeader.tsx
    ├── CottonSidebar.tsx
    └── CottonContent.tsx
```

## License

MIT
