import type { FC } from 'react'

// Helpers
import { tripleTailwindClassMerger } from '~/helpers'

type HeadingTextProps = {
  headingVariant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  headingLabel: string
  headingClass?: string
  color: 'text-white' | 'text-black'
}

const HeadingText: FC<HeadingTextProps> = props => {
  const { color, headingLabel, headingVariant: HeadingVariant, headingClass = '' } = props

  return (
    <HeadingVariant
      role="heading"
      className={tripleTailwindClassMerger('m-0 p-0 font-primaryFont text-4xl font-extrabold uppercase tracking-[-0.5px] lg:text-7xl', color, headingClass)}
      aria-label={`${headingLabel} ${HeadingVariant} Heading`}
    >
      {headingLabel}
    </HeadingVariant>
  )
}

export default HeadingText
