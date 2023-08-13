export const metadata = {
  title: 'あるある青春メーカー',
  description: 'あるある青春メーカー',
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
