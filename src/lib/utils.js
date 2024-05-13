import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// used in Isolation Map Layer
export function getColor(c) {
	return	c	> 10	?	'#006837' :
				 	c > 5 	? '#31a354' :
				 	c > 3 	? '#78c679' :
				 	c > 1		? '#c2e699' :
										'#ffffcc'	;
}