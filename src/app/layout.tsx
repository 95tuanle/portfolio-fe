import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Portfolio Front-end',
    description: 'Nguyen Anh Tuan Le',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
