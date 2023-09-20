import './globals.css'
import {Inter} from 'next/font/google'
import React from "react";
import {Metadata} from "next";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Portfolio - Nguyen Anh Tuan Le',
    description: 'Welcome to the portfolio of Nguyen Anh Tuan Le, a Software Developer based in Toronto, Ontario, Canada. Explore my projects and skills.',
}

const RootLayout = ({children}: { children: React.ReactNode }) => (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
);

export default RootLayout;
