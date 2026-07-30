import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tanmay Srivastav — Full Stack Developer & Creative Technologist',
  description:
    "I don't just build websites. I design brands, engineer scalable applications, edit cinematic content, and help businesses grow through technology, automation, and creative storytelling.",
  keywords: [
    'Tanmay Srivastav', 'Full Stack Developer', 'Shopify Developer', 'React Developer',
    'Next.js', 'Graphic Designer', 'Video Editor', 'Freelance Developer', 'Creative Technologist',
  ],
  authors: [{ name: 'Tanmay Srivastav' }],
  creator: 'Tanmay Srivastav',
  openGraph: {
    title: 'Tanmay Srivastav — Building Digital Experiences Beyond Gravity',
    description: 'Full Stack Developer • Creative Technologist • Digital Creator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanmay Srivastav',
    description: 'Full Stack Developer • Creative Technologist • Digital Creator',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
