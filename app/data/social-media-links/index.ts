import type { ReactNode } from 'react'

export type SocialMediaLinksProps = { linkHref: string; label: string; icon?: ReactNode }

export const socialMediaLinks: SocialMediaLinksProps[] = [
  { label: 'LinkedIn', linkHref: 'https://www.linkedin.com/company/mediateck96/' },
  { label: 'Instagram', linkHref: 'https://www.instagram.com/mediateck96/' },
  { label: 'X', linkHref: 'https://twitter.com/mediateck96/' },
  { label: 'Facebook', linkHref: 'https://www.facebook.com/mediateck96/' },
]
