'use client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'

interface Props {
	children: React.ReactNode
	link?: string
	tooltipText: string
	onClick?: Function
	className?: string
}

function SideBarIcon({ link, children, tooltipText, onClick, className }: Props) {
	return (
		<div className={className}>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger className='opacity-50 hover:opacity-100 transition-opacity'>
						{link ? (
							<Link href={link}>{children}</Link>
						) : (
							<div onClick={onClick ? () => onClick() : () => {}}>{children}</div>
						)}
					</TooltipTrigger>
					<TooltipContent side='left' sideOffset={20}>
						<p>{tooltipText}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}

export default SideBarIcon
