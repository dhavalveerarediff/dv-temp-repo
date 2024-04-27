import type { FC } from 'react'

// Remix
import { Link } from '@remix-run/react'

// Common
import HeadingText from '~/components/common/heading-text'
import CustomButton from '~/components/common/custom-button'
import SpanText from '~/components/common/cursive-span-text'

// CONSTANTS
import { APP_NAME } from '~/constants'

// Data
import { industriesData } from '~/data'

// UI
import { MainParentLayout } from '~/ui'

const HomeIndustriesSection: FC = () => {
  return (
    <section>
      <div className="rounded-2xl py-[5em]">
        <div className="p-4">
          <div className="text-center">
            <SpanText spanText="industries" />

            <HeadingText color="text-black" headingLabel="industries we service" headingVariant="h2" headingClass="mt-10" />

            <p className="my-5 font-primaryFont text-lg font-normal">
              At Media Teck, we have successfully worked with clients of very type, whether big businesses or small start-ups, and belonging to diverse industries. When working with any client, we
              start by understanding what the business is all about, the challenges faced and the competitors. Backed by our knowledge of different industries and their nitty-gritty aspects, we will
              help you become the leaders of your domain.
            </p>
          </div>

          {/* Industries Array */}
          <section className="mt-0 w-full md:mt-12">
            {/* <!-- Icon Blocks --> */}
            <div className={MainParentLayout}>
              <div className="grid grid-cols-2 items-center gap-12 md:grid-cols-3 lg:grid-cols-6">
                {industriesData.map((industry, index) => {
                  return (
                    <div className="flex flex-col items-center justify-center" key={index}>
                      <div className="relative flex size-12 items-center justify-center rounded-xl bg-white before:absolute before:-inset-px before:-z-[1] before:rounded-xl before:bg-gradient-to-br before:from-primaryColor before:via-transparent before:to-lightPrimaryColor dark:bg-slate-900">
                        {industry?.industryIcon ? (
                          industry?.industryIcon
                        ) : (
                          <svg
                            className="size-6 flex-shrink-0 text-blue-600 dark:text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="10" height="14" x="3" y="8" rx="2" />
                            <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                            <path d="M8 18h.01" />
                          </svg>
                        )}
                      </div>
                      <div className="mt-5">
                        <h3 className="text-center text-lg font-semibold text-gray-800 dark:text-black">{industry.industryTitle}</h3>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-10 flex w-full flex-col flex-wrap items-center justify-center gap-4 py-10 text-center text-black md:flex-nowrap">
              <p>Didn&apos;t found your&apos;s? Feel free to reach us there&apos;s alot under the hood</p>
              <Link to="/contact" aria-label={`Say Hi to ${APP_NAME}`} role="link">
                <CustomButton btnLabel="Say Hi!" className="capitalize" />
                <span className="sr-only">Say Hi to {APP_NAME}</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default HomeIndustriesSection
