import { type FC, useEffect } from 'react'

// Remix
import { Link } from '@remix-run/react'

// Common
import CustomButton from '~/components/common/custom-button'
import SpanText from '~/components/common/cursive-span-text'

// CONSTNATS
import { APP_NAME } from '~/constants'

// Data
import { homeServiceBtnData, homeServiceInfoData } from '~/data'

const HomeServicesSection: FC = () => {
  useEffect(() => {
    // Add role="tablist" to the nav element after component mounts
    const navElement = document.querySelector('nav[aria-label="Tabs"]')
    if (navElement) {
      navElement.setAttribute('role', 'tablist')
    }
  }, []) // Run this effect only once after the component mounts

  return (
    <>
      {/* <!-- Features --> */}
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="p-6 md:p-16">
          {/* <!-- Grid --> */}
          <div className="grid lg:grid-cols-12 lg:gap-16">
            <div className="order-2 mb-10 lg:order-2 lg:col-span-6 lg:mb-0">
              <div className="rounded-3xl border border-[#D7D7D7] transition-all duration-3000 ease-in-out hover:border hover:border-primaryColor">
                {/* <!-- Tab Content --> */}
                <div className="p-5">
                  {/* <ServiceInfoRightSidebar /> */}
                  <div id="home-services-tabs-with-card-1" role="tabpanel" aria-labelledby="home-services-tabs-with-card-item-1">
                    <div>
                      {homeServiceInfoData['customSoftware'].chipsLabel.map((chipLabel, indexTwo) => {
                        return (
                          <span
                            key={indexTwo}
                            className="m-1 inline-flex items-center gap-3 rounded-full border border-gray-500 px-3 py-1.5 text-xs font-medium text-gray-500 transition-all duration-3000 ease-in-out hover:border-primaryColor dark:text-gray-400"
                          >
                            <span className="max-w-full flex-initial font-primaryFont text-xs font-semibold uppercase leading-none text-black">{chipLabel}</span>
                          </span>
                        )
                      })}

                      <div className="mt-5 font-primaryFont text-sm font-normal text-[#5B6585]">
                        <p>{homeServiceInfoData['customSoftware'].description}</p>
                      </div>

                      <div>
                        <img
                          src="/home_services/custom_software.svg"
                          srcSet="/home_services/custom_software.svg"
                          alt="Custom Software Development with Media Teck"
                          title="Custom Software Development with Media Teck"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  <div id="home-services-tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="home-services-tabs-with-card-item-2">
                    <div>
                      {homeServiceInfoData['webDevelopment'].chipsLabel.map((chipLabel, indexThree) => {
                        return (
                          <span
                            key={indexThree}
                            className="m-1 inline-flex items-center gap-3 rounded-full border border-gray-500 px-3 py-1.5 text-xs font-medium text-gray-500 transition-all duration-3000 ease-in-out hover:border-primaryColor dark:text-gray-400"
                          >
                            <span className="max-w-full flex-initial font-primaryFont text-xs font-semibold uppercase leading-none text-black">{chipLabel}</span>
                          </span>
                        )
                      })}

                      <div className="mt-5 font-primaryFont text-sm font-normal text-[#5B6585]">
                        <p>{homeServiceInfoData['webDevelopment'].description}</p>
                      </div>

                      <div>
                        <img
                          src="/home_services/web_development.svg"
                          srcSet="/home_services/web_development.svg"
                          alt="Web Development with Media Teck"
                          title="Web Development with Media Teck"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  <div id="home-services-tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="home-services-tabs-with-card-item-3">
                    <div>
                      {homeServiceInfoData['maintenance'].chipsLabel.map((chipLabel, indexFour) => {
                        return (
                          <span
                            key={indexFour}
                            className="m-1 inline-flex items-center gap-3 rounded-full border border-gray-500 px-3 py-1.5 text-xs font-medium text-gray-500 transition-all duration-3000 ease-in-out hover:border-primaryColor dark:text-gray-400"
                          >
                            <span className="max-w-full flex-initial font-primaryFont text-xs font-semibold uppercase leading-none text-black">{chipLabel}</span>
                          </span>
                        )
                      })}

                      <div className="mt-5 font-primaryFont text-sm font-normal text-[#5B6585]">
                        <p>{homeServiceInfoData['maintenance'].description}</p>
                      </div>

                      <div>
                        <img
                          src="/home_services/maintenance_support.svg"
                          srcSet="/home_services/maintenance_support.svg"
                          alt="Web Maintenance &and Support with Media Teck"
                          title="Web Maintenance &and Support with Media Teck"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Tab Content --> */}
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="order-1 mb-10 md:mb-0 lg:col-span-6">
              <SpanText spanText="our services" />

              <h2 className="mt-5 font-primaryFont text-2xl font-bold text-gray-800 dark:text-gray-200 md:text-4xl">Services Offered</h2>

              {/* <!-- Tab Navs --> */}
              <div>
                <nav className="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" aria-hidden="true" tabIndex={-1}>
                  {homeServiceBtnData.map((btnData, index) => {
                    return (
                      <button
                        type="button"
                        className={`${index === 0 ? 'active' : ''} rounded-xl p-4 text-start hover:bg-gray-200 hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hs-tab-active:bg-slate-900 md:p-5`}
                        id={`home-services-tabs-with-card-item-${index + 1}`}
                        data-hs-tab={`#home-services-tabs-with-card-${index + 1}`}
                        aria-controls={`home-services-tabs-with-card-${index + 1}`}
                        tabIndex={-1}
                        role="tab"
                        key={index}
                      >
                        <span className="mr-2 flex">
                          {btnData.icon}
                          <span className="ms-6 grow">
                            <span className="block text-lg font-semibold text-gray-800 hs-tab-active:text-[#A22600] dark:text-gray-200 dark:hs-tab-active:text-[#A22600]">{btnData.btnLabel}</span>
                            <span className="mt-1 block text-gray-800 dark:text-gray-200 dark:hs-tab-active:text-gray-200">{btnData.description}</span>
                          </span>
                        </span>
                      </button>
                    )
                  })}
                </nav>

                <Link to="/services" role="link" aria-label={`View All Services of ${APP_NAME}`}>
                  <CustomButton btnLabel="Our Services" className="mx-auto my-10 flex w-full justify-center capitalize lg:w-max" />
                  <span className="sr-only">View All Services of {APP_NAME}</span>
                </Link>
              </div>
              {/* <!-- End Tab Navs --> */}
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
      {/* <!-- End Features --> */}
    </>
  )
}

export default HomeServicesSection
