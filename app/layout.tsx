import { ThemeProvider } from '@/components/ThemeProvider'
import Sidebar from '@/components/sidebar/Sidebar'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {}

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className='min-h-screen h-screen w-screen'>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
					<Sidebar />
					<div className='h-full w-[calc(100vw_-_var(--sidebar-width))] ml-auto'>{children}</div>
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
