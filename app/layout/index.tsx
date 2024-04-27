import { Fragment, type FC, type PropsWithChildren } from 'react'

// WhatsApp FAB
import WhatsAppFAB from '~/components/common/whatsapp-fab'

// Navbar
import CustomNavbar from './navbar'

// Footer
import CustomFooter from './footer'

const CustomLayout: FC<PropsWithChildren> = props => {
  const { children } = props

  return (
    <Fragment>
      <CustomNavbar />

      {children}

      <CustomFooter />

      <WhatsAppFAB />
    </Fragment>
  )
}

export default CustomLayout
