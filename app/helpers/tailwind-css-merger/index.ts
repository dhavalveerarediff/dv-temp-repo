import { twMerge } from 'tailwind-merge'

export const tailwindClassMerger = (primaryClasses: string, secondaryClasses: string) => twMerge(primaryClasses, secondaryClasses)

export const tripleTailwindClassMerger = (primaryClasses: string, secondaryClasses: string, thirdClass: string) => twMerge(primaryClasses, secondaryClasses, thirdClass)
