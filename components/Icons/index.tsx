import next from 'next'
import { parseBody } from 'next/dist/next-server/server/api-utils'
import React from 'react'

export const LogoSVG = ({
	fillColor = '#33323D',
	className,
}: {
	fillColor?: string
	className?: string
}) => {
	return (
		<svg
			className={className ? className : ''}
			xmlns='http://www.w3.org/2000/svg'
			width='61'
			height='32'
		>
			<path
				fill={fillColor}
				fillRule='evenodd'
				d='M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z'
			/>
		</svg>
	)
}

export const HamburgerSVG = ({ fillColor = '#33323D' }: { fillColor?: string }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='24' height='13'>
			<g fill={fillColor} fillRule='evenodd'>
				<path d='M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z' />
			</g>
		</svg>
	)
}

// We are using a class component here so that we can use this inside next/Link and pass a reference to it without causing errors
interface Props {
	className?: string
	fillColor?: string
}

export class TwitterSVG extends React.Component<Props> {
	render() {
		return (
			<svg
				className={this.props.className}
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='20'
			>
				<path
					fill={this.props.fillColor}
					d='M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z'
				/>
			</svg>
		)
	}
}
export class GithubSVG extends React.Component<Props> {
	render() {
		return (
			<svg
				className={this.props.className}
				xmlns='http://www.w3.org/2000/svg'
				width='25'
				height='24'
			>
				<path
					fill={this.props.fillColor}
					d='M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z'
				/>
			</svg>
		)
	}
}
export class LinkedinSVG extends React.Component<Props> {
	render() {
		return (
			<svg
				className={this.props.className}
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
			>
				<path
					fill={this.props.fillColor}
					d='M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z'
				/>
			</svg>
		)
	}
}

export const ArrowLeftSVG = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='10' height='16'>
			<path fill='none' stroke='#33323D' d='M9 0L1 8l8 8' />
		</svg>
	)
}

export const ArrowRightSVG = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='10' height='16'>
			<path fill='none' stroke='#33323D' d='M1 0l8 8-8 8' />
		</svg>
	)
}

export const DownArrowsSVG = ({ className }: { className?: string }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='16' height='14' className='stroke-current '>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 9l8 4 8-4' />
				<path opacity='.5' d='M0 5l8 4 8-4' />
				<path opacity='.25' d='M0 1l8 4 8-4' />
			</g>
		</svg>
	)
}
