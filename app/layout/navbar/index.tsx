import { type FC } from 'react'

// Remix
import { Link, useLocation } from '@remix-run/react'

// flowbite-react
import { type CustomFlowbiteTheme, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'

// Common
import CustomNavbarLinkButton from '~/components/common/navbar-link-button'

// CONSTANTS
import { APP_NAME } from '~/constants'

// Data
import { navbarData } from '~/data'
import { MainParentLayout } from '~/ui'

const customNavbarTheme: CustomFlowbiteTheme['navbar'] = {
  root: {
    base: 'px-0 py-3 sm:px-0',
    inner: {
      base: 'mx-auto flex flex-wrap items-center justify-between',
    },
  },
  link: {
    active: {
      on: 'md:border-b md:border-primaryColor md:text-primaryColor dark:text-white',
      off: 'hover:bg-white',
    },
  },
}

const CustomNavbar: FC = () => {
  const { pathname } = useLocation()

  return (
    <header className={MainParentLayout}>
      <Navbar rounded fluid theme={customNavbarTheme}>
        <NavbarBrand as={Link} to="/" aria-label={`${APP_NAME} Logo`} className="flex items-center space-x-2">
          <img src="/MediaTeck_Initial_SVG_Transparent.svg" srcSet="/MediaTeck_Initial_SVG_Transparent.svg" className="w-12" alt={APP_NAME} title={APP_NAME} />
          <span className="text-secondaryColor text-2xl font-bold dark:text-white" aria-hidden>
            Media Teck
          </span>
        </NavbarBrand>
        <div className="md:order-2">
          <CustomNavbarLinkButton linkHref="/contact" linkLabel="get in touch" btnExtraClass="w-full sm:w-max ml-3 hidden md:flex" />

          <NavbarToggle />
        </div>
        <NavbarCollapse>
          {navbarData.map((nav, index) => {
            return (
              <NavbarLink as={Link} to={nav.navbarLinkHref} active={pathname === nav.navbarLinkHref} key={index}>
                {nav.navbarLinkLabel}
              </NavbarLink>
            )
          })}
        </NavbarCollapse>
      </Navbar>
    </header>
  )
}

export default CustomNavbar
