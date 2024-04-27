/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import type { FC } from 'react'

// Common
import HeadingText from '~/components/common/heading-text'
import SpanText from '~/components/common/cursive-span-text'

// Data
import { technologyData, technologyStackBtnData } from '~/data'

// UI
import { MainParentLayout } from '~/ui'

// Tech Stack Card
import TechnologyStackCard from './technology-stack-card'

const HomeTechnologyStackSection: FC = () => {
  return (
    <section className="mt-10 border-t border-[#87868636] py-10">
      <div className={MainParentLayout}>
        <div className="py-10">
          <SpanText spanText="Technology stack" />

          <HeadingText color="text-black" headingLabel="Technology stack We use" headingVariant="h2" headingClass="mt-7" />
        </div>

        <div className="my-10 border-t border-[#87868636]">
          {/* <!-- Grid --> */}
          <div className="mt-10 grid lg:grid-cols-12 lg:gap-16">
            <div className="order-2 mb-10 lg:order-2 lg:col-span-8 lg:mb-0">
              <div className="p-5">
                <div id="technology-tabs-with-card-1" role="tabpanel" aria-labelledby="technology-tabs-with-card-item-1">
                  <div>
                    <p className="font-primaryFont text-3xl font-extrabold">Front-End</p>

                    <div className="mt-5 grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-3">
                      {technologyData['webPlatform'].frontEnd.map((fe, index) => {
                        return (
                          <div key={index}>
                            <TechnologyStackCard technologyIcon={fe.techIcon} technologyName={fe.techName} />
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="font-primaryFont text-3xl font-extrabold">Back-End</p>

                    <div className="mt-5 grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-3">
                      {technologyData['webPlatform'].backEnd.map((be, indexTwo) => {
                        return (
                          <div key={indexTwo}>
                            <TechnologyStackCard technologyIcon={be.techIcon} technologyName={be.techName} />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div id="technology-tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="technology-tabs-with-card-item-2">
                  <div>
                    <p className="font-primaryFont text-3xl font-extrabold">DevOps</p>

                    <div className="mt-5 grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-3">
                      {technologyData['cloudDevOps'].devOps.map((dev, indexThree) => {
                        return (
                          <div key={indexThree}>
                            <TechnologyStackCard technologyIcon={dev.techIcon} technologyName={dev.techName} />
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="font-primaryFont text-3xl font-extrabold">Cloud</p>

                    <div className="mt-5 grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-3">
                      {technologyData['cloudDevOps'].cloud.map((cloud, indexFOur) => {
                        return (
                          <div key={indexFOur}>
                            <TechnologyStackCard technologyIcon={cloud.techIcon} technologyName={cloud.techName} />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div id="technology-tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="technology-tabs-with-card-item-3">
                  <div>
                    <p className="font-primaryFont text-3xl font-extrabold">Database</p>

                    <div className="mt-5 grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-3">
                      {technologyData['database'].map((db, indexFive) => {
                        return (
                          <div key={indexFive}>
                            <TechnologyStackCard technologyIcon={db.techIcon} technologyName={db.techName} />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 mb-10 md:mb-0 lg:col-span-4">
              {/* <!-- Tab Navs --> */}
              <div>
                <nav className="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" aria-hidden="true" tabIndex={-1} role="tablist">
                  {technologyStackBtnData.map((techData, index) => {
                    return (
                      <button
                        type="button"
                        className={`${index === 0 ? 'active' : ''} rounded-xl p-4 text-start hover:bg-gray-200 hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-tab-active:bg-slate-900 md:p-5`}
                        id={`technology-tabs-with-card-item-${index + 1}`}
                        data-hs-tab={`#technology-tabs-with-card-${index + 1}`}
                        aria-controls={`technology-tabs-with-card-${index + 1}`}
                        tabIndex={-1}
                        role="tab"
                        key={index}
                      >
                        <span className="mr-2 flex">
                          <span className="ms-6 grow">
                            <span className="block text-lg font-semibold text-gray-800 hs-tab-active:text-[#A22600] dark:text-gray-200 dark:hs-tab-active:text-[#A22600]">{techData.techPlatform}</span>
                          </span>
                        </span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeTechnologyStackSection
