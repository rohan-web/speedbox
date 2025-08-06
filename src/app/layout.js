import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Boom Couriers — Fast London Deliveries',
  description: 'We pick up and deliver parcels across London. Serving zones TW1 to TW20 from Stratford.',
  openGraph: {
    title: 'Boom Couriers — Fast London Deliveries',
    description: 'We pick up and deliver parcels across London. Serving zones TW1 to TW20 from Stratford.',
    url: 'https://boomcouriers.co.uk',
    siteName: 'Boom Couriers',
    images: [
      {
        url: 'https://boomcouriers.co.uk/meta-og-v2.png',
        width: 1200,
        height: 630,
        alt: 'Boom Couriers Open Graph Image',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/favicon-v4.ico',
    shortcut: '/favicon-v4.ico',
    apple: '/favicon-v4.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
  <link rel="icon" href="/favicon-v4.ico" />
 <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@500;700&display=swap" rel="stylesheet" />


  <meta property="og:image" content="https://boomcouriers.co.uk/meta-og-v2.png" />



        <link rel="icon" href="/favicon-v4.ico" />
        <meta property="og:image" content="https://boomcouriers.co.uk/meta-og-v2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body>
        {children}
        <Toaster position="top-right" reverseOrder={false} /> {/* ✅ Required for toast to show */}
      </body>
    </html>
  );
}
