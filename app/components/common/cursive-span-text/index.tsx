import { type ComponentProps, forwardRef } from 'react'

// Helpers
import { tailwindClassMerger } from '~/helpers'

interface SpanTextProps extends Omit<ComponentProps<'span'>, 'ref'> {
  spanText: string
}

const SpanText = forwardRef<HTMLSpanElement, SpanTextProps>((props, ref) => {
  const { className = '', spanText } = props

  return (
    <span
      className={tailwindClassMerger(
        'font-cursiveFont to-secondaryColor transparentTextFillColor mb-4 bg-gradient-to-r from-primaryColor bg-clip-text text-4xl font-normal capitalize leading-[1.2] tracking-[3.5px]',
        className,
      )}
      ref={ref}
    >
      {spanText}
    </span>
  )
})

SpanText.displayName = 'spanText'

export default SpanText
