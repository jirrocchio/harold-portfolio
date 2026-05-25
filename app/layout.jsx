import '../styles/globals.css'

export const metadata = {
  title: 'Harold Jirro I. Madrona | IT Graduate & Creative Professional',
  description: 'Portfolio of Harold Jirro I. Madrona — IT Graduate, UI/UX Designer, Video Editor, and versatile professional from Nueva Ecija, Philippines. Open to IT, design, admin, VA, and creative roles.',
  keywords: 'Harold Madrona, IT Graduate, UI/UX Designer, Video Editor, Web Developer, Portfolio, Nueva Ecija Philippines, Freelancer',
  authors: [{ name: 'Harold Jirro I. Madrona' }],
  openGraph: {
    title: 'Harold Jirro I. Madrona | Portfolio',
    description: 'Creative technologist & versatile professional from the Philippines.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
