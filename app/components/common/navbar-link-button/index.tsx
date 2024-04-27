import { forwardRef } from 'react'

// Remix
import { Link } from '@remix-run/react'

// Helpers
import { tailwindClassMerger } from '~/helpers'

// CONSTANTS
import { APP_NAME } from '~/constants'

type CustomNavbarLinkButtonProps = {
  linkHref: string
  linkLabel: string
  btnExtraClass?: string
}

const CustomNavbarLinkButton = forwardRef<HTMLAnchorElement, CustomNavbarLinkButtonProps>((props, ref) => {
  const { linkHref, linkLabel, btnExtraClass = '' } = props

  return (
    <Link to={linkHref} role="link" aria-label={`${linkLabel} - ${APP_NAME}`} ref={ref}>
      <button
        type="button"
        title="Let's Discuss Your Project"
        aria-label={`${linkLabel} Button - ${APP_NAME}`}
        className={tailwindClassMerger(
          'box-border select-none whitespace-nowrap rounded-lg border border-lightPrimaryColor bg-lightPrimaryColor p-3 text-center align-middle font-primaryFont text-sm font-medium uppercase tracking-[0.8px] text-black transition-all duration-3000 ease-in-out hover:border hover:border-primaryColor hover:bg-transparent hover:text-black',
          btnExtraClass,
        )}
      >
        {linkLabel}
      </button>
      <span className="sr-only">
        {linkLabel} - {APP_NAME}
      </span>
    </Link>
  )
})

CustomNavbarLinkButton.displayName = 'CustomNavbarLinkButton'

export default CustomNavbarLinkButton
