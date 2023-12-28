'use client'
import { Separator } from '@/components/ui/separator'
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

import SideBarIcon from './SideBarIcon'

function Sidebar() {
	function handleHideSidebar() {}
	function handleCommandPalette() {}
	function handleSearchPrompt() {}

	return (
		<aside className='absolute w-[var(--sidebar-width)] flex flex-col items-center py-4 justify-between h-screen border-r border-r-muted/30 bg-background'>
			<ul className='flex flex-col gap-4'>
				<SideBarIcon link='/' tooltipText='Aperture'>
					<Aperture />
				</SideBarIcon>

				<Separator className='bg-muted/50' />

				<SideBarIcon tooltipText='Command Palette' func={handleCommandPalette}>
					<Command />
				</SideBarIcon>
				<SideBarIcon tooltipText='Command Palette' func={handleSearchPrompt}>
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
				<SideBarIcon tooltipText='Hide Sidebar' func={() => handleHideSidebar()}>
					<PanelLeftClose />
				</SideBarIcon>
			</ul>
		</aside>
	)
}

export default Sidebar
