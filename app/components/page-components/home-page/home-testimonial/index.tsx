import type { FC } from 'react'

// Common
import HeadingText from '~/components/common/heading-text'
import SpanText from '~/components/common/cursive-span-text'

// Helpers
import { tailwindClassMerger } from '~/helpers'

// Data
import { homeTestimonialData } from '~/data'

// UI
import { MainParentLayout } from '~/ui'

const HomeTestimonialSection: FC = () => {
  return (
    <section className="border-t border-[#87868636]">
      <div className={tailwindClassMerger(MainParentLayout, 'py-10')}>
        <div className="mb-10 text-center">
          <SpanText spanText="Testimonials" />

          <HeadingText color="text-black" headingLabel="what our clients say" headingVariant="h2" headingClass="mt-7" />

          <p className="mt-5 font-primaryFont text-xl font-normal">Loved by business and individuals across the globe</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeTestimonialData.map((testimonial, index) => {
            return (
              <div className="flex h-auto" key={index}>
                <div className="flex flex-col rounded-xl border border-gray-200 bg-white transition-all duration-3000 ease-in-out hover:border hover:border-primaryColor dark:border-gray-700 dark:bg-slate-900">
                  <div className="flex-auto p-4 md:p-6">
                    <p className="font-primaryFont text-base italic text-gray-800 dark:text-gray-200 md:text-lg">{testimonial.testimonialMessage}</p>
                  </div>

                  <div className="rounded-b-xl bg-primaryColor p-4 dark:bg-slate-700 md:px-7">
                    <div className="flex items-center">
                      <div className="ms-3 grow">
                        <p className="font-primaryFont text-sm font-semibold text-black dark:text-gray-200 sm:text-base">{testimonial.personName}</p>
                        <p className="font-primaryFont text-xs text-black dark:text-gray-400">
                          {testimonial.designation} | {testimonial.companyName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonialSection
