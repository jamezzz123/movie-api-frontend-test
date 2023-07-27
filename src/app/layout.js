// import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import 'bootstrap/dist/css/bootstrap.css'

export const metadata = {
  title: 'Movie App',
  description: 'Simple Movie App For Test',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container-fluid my-2">
          {children}
        </div>
      </body>
    </html>
  )
}
