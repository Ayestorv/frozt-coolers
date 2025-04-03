# Frozt Coolers Landing Page

A modern, responsive, and bilingual (English/Spanish) landing page for Frozt Coolers, a premium brand specializing in coolers and insulated thermoses.

## Features

- **Bilingual Support**: Full English and Spanish language support with seamless switching
- **Modern UI**: Clean, minimalist design using Tailwind CSS
- **Animations**: Smooth animations and transitions using Framer Motion
- **Responsive Design**: Mobile-first approach ensures a great experience on all devices
- **Lead Capture**: Contact form with Telegram webhook integration
- **WhatsApp Integration**: Direct chat button for customer support

## Technology Stack

- **Next.js 15** - React framework with server-side rendering and i18n support
- **TypeScript** - Type safety for improved developer experience
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **i18n Support** - Multi-language support with Next.js routing

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/frozt-coolers.git
cd frozt-coolers
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Create environment variables file
```bash
cp .env.local.example .env.local
```

4. Edit the `.env.local` file and add your Telegram Bot Token and Chat ID

5. Start the development server
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

## Deployment

The project can be easily deployed on Vercel, Netlify, or any other platform supporting Next.js.

```bash
npm run build
npm run start
```

## Customization

- Edit the translation files in `src/i18n/` to update text content
- Replace images in `public/images/` with your product photos
- Modify color scheme in `src/app/globals.css`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React](https://reactjs.org/)
# frozt-coolers
