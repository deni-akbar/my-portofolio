import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Deni Akbar - Full Stack Developer',
	description:
		'Welcome to my portfolio! I am a passionate full stack developer specializing in building robust, scalable, and user-centric web applications. With expertise in both frontend and backend technologies, including modern JavaScript frameworks and server-side development, I bridge design and functionality to deliver seamless, end-to-end interactive experiences.',
	keywords: [
		'Full Stack Developer',
		'Web Developer',
		'React Developer',
		'Next.js',
		'TypeScript',
		'JavaScript',
		'UI/UX',
		'Responsive Design',
		'Web Animation',
		'Modern Web Development',
		'CSS Expert',
		'Performance Optimization',
		'Web Accessibility',
		'Component Design',
		'Deni Akbar',
	],
	authors: [{ name: 'Deni Akbar' }],
	creator: 'Deni Akbar',
	openGraph: {
		title: 'Deni Akbar - Full Stack Developer Portfolio',
		description: 'Passionate Full Stack Developer crafting beautiful and interactive web experiences. Explore my projects and frontend development expertise.',
		url: 'https://your-domain.com',
		siteName: 'Deni Akbar - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Deni Akbar - Full Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Deni Akbar - Full Stack Developer',
		description: 'Passionate Full Stack Developer crafting beautiful and interactive web experiences. Explore my projects and frontend development expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
