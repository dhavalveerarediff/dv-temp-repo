import type { FC } from 'react'

// Common
import HeadingText from '~/components/common/heading-text'
import SpanText from '~/components/common/cursive-span-text'
import ListItem from '~/components/common/list-item'

// Helpers
import { tailwindClassMerger } from '~/helpers'

// Data
import { valueVissionPointsData, valueVissionStatisticsData } from '~/data'

// CONSTANTS
import { APP_NAME } from '~/constants'

// UI
import { MainParentLayout } from '~/ui'

const AboutValuesVision: FC = () => {
  return (
    <section>
      <div className={tailwindClassMerger(MainParentLayout, 'py-10')}>
        <div className="grid grid-cols-12 items-center gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-4 md:border-r md:border-lightPrimaryColor">
            <SpanText spanText={`about ${APP_NAME}`} />

            <HeadingText color="text-black" headingLabel="values and vision" headingVariant="h2" headingClass="mt-5 lg:text-6xl" />

            <ul className="mt-5 list-outside">
              <ListItem text="quality program" className="mt-5" />
              <ListItem text="innovation" className="mt-5" />
              <ListItem text="client success" className="mt-5" />
              <ListItem text="teamwork" className="mt-5" />
            </ul>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-primaryFont text-lg font-semibold text-black md:text-xl">{APP_NAME} is a full-service Web Design & Development Company based in India.</p>

            <p className="mt-4 text-wrap font-primaryFont text-base font-normal text-black">
              We offer a comprehensive suite of digital solutions, encompassing web design and development, digital marketing, e-commerce solutions, and cloud development. Leveraging our team&apos;s
              expertise and staying abreast of technological advancements, we craft innovative digital solutions tailored to your specific needs across diverse industries. From conceptualizing to
              execution, we harness cutting-edge technologies to deliver impactful digital solutions. Embracing technological progress, we continuously innovate to bring you the cutting-edge solutions
              your business needs.
            </p>

            <p className="mt-4 font-primaryFont text-base font-normal text-black">To learn more about our approach to business and work, feel free to hop on over to our Open Contact Page.</p>

            <div className="mt-8">
              <div className="grid grid-cols-12 gap-8 md:gap-12">
                {valueVissionStatisticsData.map((statistics, indexOne) => {
                  return (
                    <div className="col-span-6 sm:col-span-6 md:col-span-3" key={indexOne}>
                      <div className="text-center">
                        <p className="mb-3 font-primaryFont text-base font-medium capitalize">{statistics.label}</p>

                        <SpanText spanText={statistics.value} className="text-3xl font-bold capitalize md:text-5xl" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-12 gap-4 md:gap-12">
                {valueVissionPointsData.map((vVPoint, indexTwo) => {
                  return (
                    <div className="col-span-12 border-b border-b-lightPrimaryColor pb-10 sm:col-span-6" key={indexTwo}>
                      <div className="flex gap-2">
                        <div className="w-[10%]">
                          <span className="font-primaryFont text-xl font-medium text-secondaryColor">{`0${indexTwo + 1}`}/</span>
                        </div>
                        <div className="w-[90%]">
                          <p className="font-primaryFont text-base font-normal text-black">{vVPoint.points}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutValuesVision
