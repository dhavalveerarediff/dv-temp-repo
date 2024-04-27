import type { FC } from 'react'

// Remix
import { Link } from '@remix-run/react'

// Common
import HeadingText from '~/components/common/heading-text'
import CustomButton from '~/components/common/custom-button'

// CONSTANTS
import { APP_NAME } from '~/constants'

// UI
import { MainParentLayout } from '~/ui'

const HomeWhyChooseUsSection: FC = () => {
  return (
    <section className="py-10">
      <div className={MainParentLayout}>
        <HeadingText color="text-black" headingLabel="why choose us" headingVariant="h2" />

        <div>
          <p className="mt-4 font-primaryFont text-xl font-normal text-black lg:max-w-2xl">Tailored to you we create custom software specifically designed to meet your unique business needs.</p>
        </div>

        <section>
          <div className="mt-5 border-t border-[#87868636]">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center lg:border-r lg:border-[#87868636]">
                <div className="pt-10">
                  <div>
                    <p className="mb-5 font-primaryFont text-lg font-normal text-[#181818]">
                      We pride ourselves on delivering high-quality custom software solutions that drive business growth and success. You gain a trusted partner who is dedicated to understanding your
                      unique requirements and delivering innovative, and secure software tailored to your needs.
                    </p>
                  </div>

                  <Link to="/about" role="link" aria-label={`About ${APP_NAME}`}>
                    <CustomButton btnLabel="about us" className="flex w-full justify-center capitalize lg:w-fit" />
                    <span className="sr-only">About {APP_NAME}</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="md:p-8">
                  <div className="w-full">
                    <img
                      src="/home_about_us.avif"
                      srcSet="/home_about_us.avif"
                      alt="About Media Teck"
                      title="About Media Teck"
                      loading="lazy"
                      className="rounded-3xl object-cover object-center md:h-[45vh]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center lg:items-center">
                <div className="pb-0 pt-8 lg:pl-12 lg:pr-5">
                  <div className="w-full">
                    <div className="border-t-[3px] border-primaryColor pt-5 text-center">
                      <p className="font-primaryFont text-7xl font-extrabold text-black ">3+</p>
                      <p className="mt-2 font-primaryFont text-[#575A5F]">With 3 years of experience</p>
                    </div>
                    <div className="mt-6 border-t-[3px] border-primaryColor pt-5 text-center">
                      <p className="font-primaryFont text-7xl font-extrabold text-black ">250+</p>
                      <p className="mt-2 font-primaryFont capitalize text-[#575A5F]">250+ Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center lg:items-center">
                <div className="pb-0 pt-8 lg:pl-12 lg:pr-5">
                  <div className="w-full">
                    <div className="border-t-[3px] border-primaryColor pt-5 text-center">
                      <p className="font-primaryFont text-7xl font-extrabold text-black ">95k</p>
                      <p className="mt-2 font-primaryFont capitalize text-[#575A5F]">95k Hours Worked</p>
                    </div>
                    <div className="mt-6 border-t-[3px] border-primaryColor pt-5 text-center">
                      <p className="font-primaryFont text-7xl font-extrabold text-black ">10+</p>
                      <p className="mt-2 font-primaryFont capitalize text-[#575A5F]">10+ Projects Done</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default HomeWhyChooseUsSection
