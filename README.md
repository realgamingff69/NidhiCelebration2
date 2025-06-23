# Happy Birthday Nidhi - Digital Birthday Card

A personalized digital birthday card application built for Nidhi featuring an interactive, animated experience with photo galleries, background music, and special effects.

## Features

- **Interactive Birthday Card**: Beautiful card that opens with smooth animation
- **Night Sky Theme**: Blue color scheme with twinkling stars background
- **Photo Gallery**: 11 personal photos with navigation controls
- **Birthday Music**: Generated melody that plays when card opens
- **Responsive Design**: Optimized for mobile phones and desktop
- **Personal Messages**: Heartfelt birthday wishes and love messages

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animation**: Framer Motion and CSS animations
- **Audio**: Web Audio API for birthday melody
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/        # Reusable UI components
│   │   │   ├── BirthdayCard.tsx
│   │   │   ├── CardFront.tsx
│   │   │   ├── CardBack.tsx
│   │   │   ├── PhotoGallery.tsx
│   │   │   └── SpecialEffects.tsx
│   │   ├── hooks/         # Custom React hooks
│   │   │   └── useAudio.ts
│   │   ├── lib/           # Utility libraries
│   │   │   ├── photos.ts  # Photo gallery data
│   │   │   ├── queryClient.ts
│   │   │   └── utils.ts
│   │   ├── pages/         # Page components
│   │   │   ├── Home.tsx
│   │   │   └── not-found.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/                # Express backend
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/                # Shared types and schemas
│   └── schema.ts
├── public/                # Static assets
│   └── images/
│       └── nidhi/         # Nidhi's photos
└── package.json
```

## Key Components

### 1. Interactive Card Animation
- Smooth 3D card flip animation when opening
- Night sky background with animated twinkling stars
- Blue color scheme for elegant night theme

### 2. Photo Gallery
- 11 personal photos with captions
- Auto-advancing slideshow with manual controls
- Touch-friendly navigation for mobile
- Responsive image display

### 3. Audio System
- Generated birthday melody using Web Audio API
- Plays automatically when card opens
- Manual play/pause controls

### 4. Personal Messages
- Heartfelt birthday wishes
- "I love you" message prominently displayed
- Promise to always be there
- Encouragement to smile and laugh always

## Setup and Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd nidhi-birthday-card
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   # Add your DATABASE_URL and other environment variables
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

## Deployment

The application is configured for deployment on Replit:

1. Connect to Replit
2. Import this repository
3. Click "Deploy" to create a public URL
4. Share the deployment URL with anyone

## Photo Management

Photos are stored in `public/images/nidhi/` directory:
- `photo1.jpg` through `photo11.jpg`
- Each photo has a corresponding caption in `client/src/lib/photos.ts`

To add new photos:
1. Add image file to `public/images/nidhi/`
2. Update `galleryImages` array in `client/src/lib/photos.ts`

## Customization

### Colors and Theme
- Modify color scheme in `client/src/index.css`
- Night theme uses blue tones: `#0a1929`, `#172554`, `#60a5fa`

### Messages
- Update personal messages in `client/src/components/CardBack.tsx`
- Modify captions in `client/src/lib/photos.ts`

### Audio
- Birthday melody notes defined in `client/src/hooks/useAudio.ts`
- Uses Web Audio API for reliable cross-browser support

## Browser Support

- Modern browsers with ES2020 support
- Mobile browsers (iOS Safari, Chrome Mobile)
- Web Audio API support required for music

## Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run check    # TypeScript validation
npm run db:push  # Update database schema
```

## License

This is a personal project created as a birthday gift for Nidhi.

---

Made with love ❤️ for Nidhi's special day