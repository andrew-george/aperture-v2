'use client'
import { Separator } from '@/components/ui/separator'
import { useAnimate } from 'framer-motion'
import {
	Aperture,
	CircleUser,
	Command,
	GalleryHorizontalEnd,
	Github,
	Globe,
	Linkedin,
	PanelLeftClose,
	Search,
	ShoppingCart
} from 'lucide-react'
import { useEffect, useState } from 'react'
import SideBarIcon from './SideBarIcon'

function Sidebar() {
	const [scope, animate] = useAnimate()
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (isVisible) {
			animate('aside', { x: [0, -100] })
			animate('aside', { opacity: 0 })
			animate('.show-sidebar', { x: [-100, 12] })
		} else {
			animate('aside', { x: [-100, 0] })
			animate('aside', { opacity: 1 })
			animate('.show-sidebar', { x: [12, -100] })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible])

	function handleCommandPalette() {}
	function handleSearchPrompt() {}

	return (
		<div ref={scope}>
			<aside className='absolute w-[var(--sidebar-width)] flex flex-col items-center py-4 justify-between h-screen border-r border-r-muted/30 bg-background'>
				<ul className='flex flex-col gap-4'>
					<SideBarIcon link='/' tooltipText='Aperture'>
						<Aperture />
					</SideBarIcon>

					<Separator className='bg-muted/50' />

					<SideBarIcon tooltipText='Command Palette' onClick={handleCommandPalette}>
						<Command />
					</SideBarIcon>
					<SideBarIcon tooltipText='Command Palette' onClick={handleSearchPrompt}>
						<Search />
					</SideBarIcon>
					<SideBarIcon link='/browse' tooltipText='Browse'>
						<GalleryHorizontalEnd />
					</SideBarIcon>
					<SideBarIcon link='/cart' tooltipText='My Cart'>
						<ShoppingCart />
					</SideBarIcon>
				</ul>

				<ul className='flex flex-col gap-4'>
					<SideBarIcon link='https://github.com/andrew-george' tooltipText='Github'>
						<Github />
					</SideBarIcon>
					<SideBarIcon link='https://andrewberty.vercel.app' tooltipText='Portfolio'>
						<Globe />
					</SideBarIcon>
					<SideBarIcon link='https://www.linkedin.com/in/andrew-berty' tooltipText='Portfolio'>
						<Linkedin />
					</SideBarIcon>

					<Separator className='bg-muted/50' />

					<SideBarIcon tooltipText='Guest'>
						<CircleUser />
					</SideBarIcon>

					<SideBarIcon tooltipText='Hide Sidebar' onClick={() => setIsVisible(prev => !prev)}>
						<PanelLeftClose />
					</SideBarIcon>
				</ul>
			</aside>
			<SideBarIcon
				className='show-sidebar absolute bottom-4 -translate-x-full'
				tooltipText='Show Sidebar'
				onClick={() => setIsVisible(prev => !prev)}>
				<PanelLeftClose />
			</SideBarIcon>
		</div>
	)
}

export default Sidebar
