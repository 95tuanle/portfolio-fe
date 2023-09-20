import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Portfolio - Nguyen Anh Tuan Le',
    description: 'Welcome to the portfolio of Nguyen Anh Tuan Le, a Software Developer based in Toronto, Ontario, Canada. Explore my projects and skills.',
}

export default ({children}: { children: React.ReactNode }) => (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
)
