export const metadata = {
  title: 'Test Landing Page',
  description: 'Built with OpenClaw',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
