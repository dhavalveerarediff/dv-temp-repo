import type { FC } from 'react'

// Remix
import { Link } from '@remix-run/react'

// Common
import HeadingText from '~/components/common/heading-text'

// UI
import { MainParentLayout } from '~/ui'

const HomeHeroSection: FC = () => {
  return (
    <section>
      <div className="flex h-screen items-center justify-center overflow-hidden">
        <div className={MainParentLayout}>
          <div className="flex flex-wrap items-center justify-between gap-8 text-center">
            <div className="w-full">
              <HeadingText color="text-black" headingLabel="customized software solutions for business" headingVariant="h2" />

              <p className="my-10 font-primaryFont text-base font-normal tracking-[0.8px] text-black">
                Media Teck solve the world&apos;s biggest problems with Expertise. Media Teck helps global brand with digital products on web, mobile and connected platforms.
              </p>

              <Link to="/contact" role="link" aria-label="Lets Discuss your Project">
                <div className="mx-auto max-w-sm rounded-[100px] border-none bg-lightPrimaryColor px-3 py-9 text-center">
                  <p className="font-primaryFont text-xs font-medium uppercase tracking-[0.8px] text-black">Let&apos;s discuss your project</p>
                  <span className="sr-only">Lets Discuss your Project</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSection
