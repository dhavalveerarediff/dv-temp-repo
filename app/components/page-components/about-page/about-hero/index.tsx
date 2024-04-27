import type { FC } from 'react'

// Common
import HeadingText from '~/components/common/heading-text'
import SpanText from '~/components/common/cursive-span-text'

// Helpers
import { tailwindClassMerger } from '~/helpers'

// CONSTANTS
import { APP_NAME } from '~/constants'

// UI
import { MainParentLayout } from '~/ui'

const AboutUsHeroSection: FC = () => {
  return (
    <section>
      <div className={tailwindClassMerger(MainParentLayout, 'py-10')}>
        <div className="grid grid-cols-12 items-center gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-6">
            <SpanText spanText="who are we" className="" />

            <HeadingText color="text-black" headingLabel="We are a creative digital agency based in India." headingVariant="h1" headingClass="lg:text-5xl capitalize mt-6" />

            <p className="mt-7 text-lg font-normal">
              Our team of top-tier professionals delivers enterprise-grade solutions worldwide. We embrace technological advancements to transform your business with cutting-edge solutions.
            </p>

            <p className="mt-7 text-lg font-normal">
              Our expertise spans a wide range of services, including app design, web development, digital marketing, e-commerce solutions, and cloud development. By employing industry-leading
              professionals, we harness technological expertise to craft innovative digital solutions that cater to diverse client needs across various business verticals and domains.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <img src="/about_page/about_hero_img.avif" srcSet="/about_page/about_hero_img.avif" alt={`About ${APP_NAME}`} title={`About ${APP_NAME}`} loading="eager" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsHeroSection
