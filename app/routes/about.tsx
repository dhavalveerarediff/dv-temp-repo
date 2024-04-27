import type { MetaFunction } from '@remix-run/node'

// SEO Data
import { SEOTagsData } from '~/data'

// Page Components
import AboutUsHeroSection from '~/components/page-components/about-page/about-hero'
import AboutValuesVision from '~/components/page-components/about-page/values-and-vision'
import TransparencEthicsSection from '~/components/page-components/about-page/transparency-ethics'

export const meta: MetaFunction = () => {
  return [
    { title: SEOTagsData.about.title },
    { name: 'description', content: SEOTagsData.about.description },
    { name: 'keywords', content: SEOTagsData.about.keywords },
    { tagName: 'link', rel: 'alternate', href: SEOTagsData.about.domainUrl, hrefLang: 'en-us' },
    { tagName: 'link', rel: 'alternate', href: SEOTagsData.about.domainUrl, hrefLang: 'x-default' },

    // Meta
    { tagName: 'meta', property: 'og:url', content: SEOTagsData.about.domainUrl },
    { tagName: 'meta', property: 'og:type', content: 'website' },
    { tagName: 'meta', property: 'og:title', content: SEOTagsData.about.title },
    { tagName: 'meta', property: 'og:site_name', content: SEOTagsData.about.title },
    { tagName: 'meta', property: 'og:description', content: SEOTagsData.about.description },
    { tagName: 'meta', property: 'og:image', content: SEOTagsData.about.ogMetaImgUrl },
    { tagName: 'meta', property: 'og:image:url', content: SEOTagsData.about.ogMetaImgUrl },
    { tagName: 'meta', property: 'og:locale', content: 'en_US' },
    { tagName: 'meta', property: 'og:image:alt', content: SEOTagsData.about.authorName },

    // Twitter
    { tagName: 'meta', name: 'twitter:card', content: 'summary_large_image' },
    { tagName: 'meta', name: 'twitter:site', content: '@mediateck96' },
    { tagName: 'meta', name: 'twitter:creator', content: '@mediateck96' },
    { tagName: 'meta', name: 'twitter:domain', content: SEOTagsData.about.domainUrl },
    { tagName: 'meta', name: 'twitter:url', content: SEOTagsData.about.domainUrl },
    { tagName: 'meta', name: 'twitter:title', content: SEOTagsData.about.title },
    { tagName: 'meta', name: 'twitter:description', content: SEOTagsData.about.description },
    { tagName: 'meta', name: 'twitter:image', content: SEOTagsData.about.twitterMetaImgUrl },
    { tagName: 'link', rel: 'canonical', href: SEOTagsData.about.domainUrl },
    { tagName: 'link', rel: 'preload', as: 'image', href: SEOTagsData.about.preloadLogo.path, type: SEOTagsData.about.preloadLogo.type },
    { tagName: 'link', rel: 'preload', as: 'image', href: SEOTagsData.about.preloadImgVid.path, type: SEOTagsData.about.preloadImgVid.type },
  ]
}

const AboutUsPage = () => {
  return (
    <main>
      <AboutUsHeroSection />

      <AboutValuesVision />

      <TransparencEthicsSection />
    </main>
  )
}

export default AboutUsPage
