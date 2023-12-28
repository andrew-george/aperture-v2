'use client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'

interface Props {
	children: React.ReactNode
	link?: string
	tooltipText: string
	func?: Function
}

function SideBarIcon({ link, children, tooltipText, func }: Props) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger className='opacity-50 hover:opacity-100 transition-opacity'>
					{link ? (
						<Link href={link}>{children}</Link>
					) : (
						//bug
						<div onClick={func ? () => func() : () => {}}>{children}</div>
					)}
				</TooltipTrigger>
				<TooltipContent side='left' sideOffset={20}>
					<p>{tooltipText}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default SideBarIcon
