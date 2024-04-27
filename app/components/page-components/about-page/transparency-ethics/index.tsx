import type { FC } from 'react'

// Common
import HeadingText from '~/components/common/heading-text'

// Helpers
import { tailwindClassMerger } from '~/helpers'

// Data
import { transparencyEthicsData } from '~/data'

// UI
import { MainParentLayout } from '~/ui'

const TransparencEthicsSection: FC = () => {
  return (
    <section>
      <div className={tailwindClassMerger(MainParentLayout, 'py-14')}>
        {/* Heading */}
        <div className="text-center">
          <HeadingText color="text-black" headingLabel="Transparency &amp; Ethics" headingVariant="h2" headingClass="lg:text-5xl mb-5 capitalize" />

          <p className="font-primaryFont text-sm font-normal">
            We believe in fostering open and honest communication with our clients, ensuring that every step of the development process is transparent and accountable. We are committed to upholding
            the highest ethical standards in our work, prioritizing data privacy, client confidentiality, and responsible use of technology.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-12 items-center gap-8 md:-mx-8 md:gap-12">
          {transparencyEthicsData.map((transEthic, index) => {
            return (
              <div className="col-span-12 sm:col-span-6 md:col-span-4" key={index}>
                <div className="duration-300 group relative rounded-3xl border border-lightPrimaryColor bg-white p-8 shadow-2xl shadow-gray-600/10 transition hover:border-lightPrimaryColor dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 sm:flex sm:gap-8 lg:border-transparent lg:shadow-transparent lg:hover:shadow-gray-600/10 dark:lg:bg-transparent">
                  <div className="relative">
                    <div className="flex size-20 items-center justify-center rounded-2xl bg-white p-4 shadow-[0_15px_30px_-10px_rgb(0_0_0_/_14%)]">
                      <transEthic.icon />
                    </div>

                    <HeadingText color="text-black" headingLabel={transEthic.title} headingVariant="h3" headingClass="text-[26px] lg:text-[26px] capitalize mt-4" />

                    <p className="text-justify font-primaryFont text-base">{transEthic.description}</p>
                  </div>
                </div>

                {/* <div className="flex flex-col rounded-xl border border-lightPrimaryColor bg-white shadow-sm dark:bg-neutral-900">
                  <div className="flex-auto p-4 text-center md:p-6">
                    <div className="mx-auto flex size-20 items-center justify-center rounded-2xl bg-white p-4 shadow-[0_15px_30px_-10px_rgb(0_0_0_/_14%)]">
                      <transEthic.icon />
                    </div>

                    <HeadingText color="text-black" headingLabel={transEthic.title} headingVariant="h3" headingClass="text-[26px] lg:text-[26px] capitalize mt-4" />
                  </div>

                  <div className="rounded-b-xl p-4 md:px-6">
                    <p className="text-justify font-primaryFont text-base">{transEthic.description}</p>
                  </div>
                </div> */}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TransparencEthicsSection
