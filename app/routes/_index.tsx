import type { MetaFunction } from '@remix-run/node'

// SEO Data
import { SEOTagsData } from '~/data'

// CONSTANTS
import { APP_NAME, APP_URL } from '~/constants'

// Page Components
import HomeHeroSection from '~/components/page-components/home-page/home-hero-section'
import HomeLogoSection from '~/components/page-components/home-page/home-logo'
import HomeServicesSection from '~/components/page-components/home-page/home-services'
import HomeIndustriesSection from '~/components/page-components/home-page/home-industries'
import HomeWhyChooseUsSection from '~/components/page-components/home-page/home-why-choose-us'
import HomeProjectsSection from '~/components/page-components/home-page/home-projects'
import HomeTechnologyStackSection from '~/components/page-components/home-page/home-technology-stack'
import HomeTestimonialSection from '~/components/page-components/home-page/home-testimonial'

// Common
import CommonContactForm from '~/components/page-components/common-components/common-contact'

export const meta: MetaFunction = () => {
  return [
    { title: SEOTagsData.home.title },
    { name: 'description', content: SEOTagsData.home.description },
    { name: 'keywords', content: SEOTagsData.home.keywords },
    { tagName: 'link', rel: 'alternate', href: SEOTagsData.home.domainUrl, hrefLang: 'en-us' },
    { tagName: 'link', rel: 'alternate', href: SEOTagsData.home.domainUrl, hrefLang: 'x-default' },

    // Meta
    { tagName: 'meta', property: 'og:url', content: SEOTagsData.home.domainUrl },
    { tagName: 'meta', property: 'og:type', content: 'website' },
    { tagName: 'meta', property: 'og:title', content: SEOTagsData.home.title },
    { tagName: 'meta', property: 'og:site_name', content: SEOTagsData.home.title },
    { tagName: 'meta', property: 'og:description', content: SEOTagsData.home.description },
    { tagName: 'meta', property: 'og:image', content: SEOTagsData.home.ogMetaImgUrl },
    { tagName: 'meta', property: 'og:image:url', content: SEOTagsData.home.ogMetaImgUrl },
    { tagName: 'meta', property: 'og:locale', content: 'en_US' },
    { tagName: 'meta', property: 'og:image:alt', content: SEOTagsData.home.authorName },

    // Twitter
    { tagName: 'meta', name: 'twitter:card', content: 'summary_large_image' },
    { tagName: 'meta', name: 'twitter:site', content: '@mediateck96' },
    { tagName: 'meta', name: 'twitter:creator', content: '@mediateck96' },
    { tagName: 'meta', name: 'twitter:domain', content: SEOTagsData.home.domainUrl },
    { tagName: 'meta', name: 'twitter:url', content: SEOTagsData.home.domainUrl },
    { tagName: 'meta', name: 'twitter:title', content: SEOTagsData.home.title },
    { tagName: 'meta', name: 'twitter:description', content: SEOTagsData.home.description },
    { tagName: 'meta', name: 'twitter:image', content: SEOTagsData.home.twitterMetaImgUrl },
    { tagName: 'link', rel: 'canonical', href: SEOTagsData.home.domainUrl },
    { tagName: 'link', rel: 'preload', as: 'image', href: SEOTagsData.home.preloadLogo.path, type: SEOTagsData.home.preloadLogo.type },
    {
      'script:ld+json': {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        name: APP_NAME,
        url: `${APP_URL}/`,
        image: [`${APP_URL}${SEOTagsData.home.preloadLogo.path}`],
        logo: `${APP_URL}${SEOTagsData.home.preloadLogo.path}`,
        founder: 'Dhaval Vira',
        sameAs: [
          'https://www.instagram.com/mediateck96/',
          'https://www.linkedin.com/company/mediateck96/',
          'https://twitter.com/mediateck96',
          'https://www.facebook.com/mediateck96',
          'https://wa.me/918469637498',
        ],
      },
    },
  ]
}

export default function Index() {
  return (
    <main>
      <HomeHeroSection />

      <HomeLogoSection />

      <HomeServicesSection />

      <HomeIndustriesSection />

      <HomeWhyChooseUsSection />

      <HomeProjectsSection />

      <HomeTechnologyStackSection />

      <HomeTestimonialSection />

      <CommonContactForm />
    </main>
  )
}
