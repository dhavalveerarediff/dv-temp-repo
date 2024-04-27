export type SEOTagProps = {
  title: string
  description: string
  keywords: string
  domainUrl: string
  authorName: string
  ogMetaImgUrl: string
  twitterMetaImgUrl: string
  preloadLogo: {
    path: string
    type: string
  }
  preloadImgVid: {
    path: string
    type: string
  }
}

export type PageNameSEOType = {
  home: SEOTagProps
  about: SEOTagProps
  services: SEOTagProps
  industries?: SEOTagProps
  work: SEOTagProps
  contact: SEOTagProps
  client: SEOTagProps
}

export const SEOTagsData: PageNameSEOType = {
  home: {
    title: 'Media Teck The Top Spot for Perfect Web Development Solution',
    description: 'Media Teck: Your New Gen Web Dev Agency for High-Quality Results & Success Rates - Speciale in Custom Web Development, Website Design. Trust the Experts.',
    keywords:
      'web dev agency, creative agency, digital agency, digital web agency, digital web dev agency, web development agency, web development agency, custom web development, website design, website development services, business websites e-commerce websites, ecommerce websites, CMS development',
    domainUrl: 'https://mediateck.vercel.app/',
    authorName: 'Media Teck',
    ogMetaImgUrl: 'https://mediateck.vercel.app/PNGLogo/Media_Teck_Initials_Transparent_200x200.png',
    twitterMetaImgUrl: 'https://mediateck.vercel.app/PNGLogo/Media_Teck_Initials_Transparent_300x157.png',
    preloadLogo: { path: '/MediaTeck_Initial_SVG_Transparent.svg', type: 'image/svg+xml' },
    preloadImgVid: { path: '', type: '' },
  },
  about: {
    title: 'Media Teck - About Us: Our Story, Our Team, Our Work',
    description: 'Introducing Media Teck, an esteemed web development company, and a boutique digital agency.',
    keywords:
      'web design, web development, digital agency, web hosting, domain register, e-commerce, ecommerce, web development agency, custom web development, about mediateck, website development services, business websites, e-commerce websites, ecommerce websites',
    domainUrl: 'https://mediateck.vercel.app/',
    authorName: 'Media Teck',
    ogMetaImgUrl: 'https://mediateck.vercel.app/PNGLogo/Media_Teck_Initials_Transparent_200x200.png',
    twitterMetaImgUrl: 'https://mediateck.vercel.app/PNGLogo/Media_Teck_Initials_Transparent_300x157.png',
    preloadLogo: { path: '/MediaTeck_Initial_SVG_Transparent.svg', type: 'image/svg+xml' },
    preloadImgVid: { path: '/about_page/about_hero_img.avif', type: 'image/avif' },
  },
  services: {
    title: 'Media Teck: Unleash Your Digital Potential with Expert Web Design & Dev',
    description: "Elevate Your Online Presence with Media Teck's Professional Web Design and Development Services.",
    keywords:
      'Media Teck services, web design, web development, responsive design, e-commerce solutions, digital consulting, online presence, tangible results, comprehensive offerings, digital success, professional web services, web development company, web design agency, responsive web design, e-commerce web development, website maintenance, best web design companies in India, top web development agencies in India',
    domainUrl: 'https://mediateck.vercel.app/',
    authorName: 'Media Teck',
    ogMetaImgUrl: 'https://mediateck.vercel.app/PNGLogo/Media_Teck_Initials_Transparent_200x200.png',
    twitterMetaImgUrl: 'https://mediateck.vercel.app/PNGLogo/Media_Teck_Initials_Transparent_300x157.png',
    preloadLogo: { path: '/MediaTeck_Initial_SVG_Transparent.svg', type: 'image/svg+xml' },
    preloadImgVid: { path: '', type: '' },
  },
  work: {
    title: "Explore Media Teck's Portfolio: A Gallery of Design Excellence",
    description: "Explore Media Teck's portfolio and witness design excellence in action. Discover top-notch digital solutions that inspire.",
    keywords:
      'projects, portfolio, work, media teck projects, media teck work, media teck portfolio, e-commerce projects, ecommerce projects, e-commerce portfolio, web design portfolio, design excellence, top-notch digital solutions, creative web design, innovative web development, award-winning web design, portfolio showcase, web design agency portfolio, design agency portfolio, website design examples, innovative web development solutions, top-notch digital solutions for businesses of all sizes, award-winning web design agencies in India',
    domainUrl: 'https://mediateck.vercel.app/',
    authorName: 'Media Teck',
    ogMetaImgUrl: 'https://mediateck.vercel.app/PNGLogo/Media_Teck_Initials_Transparent_200x200.png',
    twitterMetaImgUrl: 'https://mediateck.vercel.app/PNGLogo/Media_Teck_Initials_Transparent_300x157.png',
    preloadLogo: { path: '/MediaTeck_Initial_SVG_Transparent.svg', type: 'image/svg+xml' },
    preloadImgVid: { path: '', type: '' },
  },
  contact: {
    title: 'Contact Media Teck to Unlock New Possibilities in the Digital World',
    description: 'Looking to reach out to Media Teck? Contact us today to discuss your needs, or get help with any queries. We are here to assist you every step of the way',
    keywords:
      'Media Teck Contact, Reach Out to Media Teck, Contact Us Today, Unlock New Possibilities, Digital World Solutions, Discuss Your Needs, Queries and Assistance, MediaTeck Assistance, Every Step Support, contact, contact us, get in touch, contact information, phone number, email address, skype',
    domainUrl: 'https://mediateck.vercel.app/',
    authorName: 'Media Teck',
    ogMetaImgUrl: 'https://mediateck.vercel.app/PNGLogo/Media_Teck_Initials_Transparent_200x200.png',
    twitterMetaImgUrl: 'https://mediateck.vercel.app/PNGLogo/Media_Teck_Initials_Transparent_300x157.png',
    preloadLogo: { path: '/MediaTeck_Initial_SVG_Transparent.svg', type: 'image/svg+xml' },
    preloadImgVid: { path: '', type: '' },
  },
  client: {
    title: 'Media Teck: Partnering with Industry Giants',
    description: 'Elevate your digital success with Media Teck, your tech partner. Discover transformative solutions from industry collaborations.',
    keywords:
      'media teck clients, clients, list of clients, leading brands, web development agency clients, custom web development clients, website design clients, website development services clients, business websites clients, technology partner, industry collaborations, innovative solutions, business growth, digital success, tech expertise, Media Teck services, tech partnerships, technology integration, software development,',
    domainUrl: 'https://mediateck.vercel.app/',
    authorName: 'Media Teck',
    ogMetaImgUrl: 'https://mediateck.vercel.app/PNGLogo/Media_Teck_Initials_Transparent_200x200.png',
    twitterMetaImgUrl: 'https://mediateck.vercel.app/PNGLogo/Media_Teck_Initials_Transparent_300x157.png',
    preloadLogo: { path: '/MediaTeck_Initial_SVG_Transparent.svg', type: 'image/svg+xml' },
    preloadImgVid: { path: '', type: '' },
  },
}
