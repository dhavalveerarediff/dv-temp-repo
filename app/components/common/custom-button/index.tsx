import { type ComponentProps, forwardRef } from 'react'

// CONSTANTS
import { APP_NAME } from '~/constants'

// Helpers
import { tailwindClassMerger } from '~/helpers'

interface CustomButtonProps extends Omit<ComponentProps<'button'>, 'ref'> {
  btnLabel: string
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>((props, ref) => {
  const { btnLabel, className = '' } = props

  return (
    <button
      aria-label={`${btnLabel} Button - ${APP_NAME}`}
      className={tailwindClassMerger(
        'box-border flex select-none items-center justify-between gap-3 whitespace-nowrap rounded-lg bg-lightPrimaryColor p-3 px-8 py-4 text-center align-middle font-primaryFont text-sm font-medium uppercase tracking-[0.8px] text-black transition-all duration-3000 ease-in-out',
        className,
      )}
      ref={ref}
    >
      {btnLabel}
    </button>
  )
})

CustomButton.displayName = 'CustomButton'

export default CustomButton
