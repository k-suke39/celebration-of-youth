export const metadata = {
  title: '青春あるある診断',
  description: '青春あるある診断',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
