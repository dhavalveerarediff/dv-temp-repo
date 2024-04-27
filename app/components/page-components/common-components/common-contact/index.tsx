import type { FC } from 'react'

// Remix
import { Link, useFetcher } from '@remix-run/react'

// Common
import HeadingText from '~/components/common/heading-text'
import CustomButton from '~/components/common/custom-button'
import TextFields from '~/components/common/text-field'
import TextArea from '~/components/common/text-area'
import SelectOption from '~/components/common/select-option'

// UI
import { MainParentLayout } from '~/ui'

const industryOption: { label: string; value: string | number }[] = [
  { label: 'Real Estate', value: 'realEstate' },
  { label: 'ECommerce', value: 'ecommerce' },
]

const expectedBudget: { label: string; value: string }[] = [
  { label: '< 10 K', value: '< 10 K' },
  { label: '20 K - 50 K', value: '20K - 50K' },
]

const CommonContactForm: FC = () => {
  const fetcher = useFetcher()

  return (
    <section>
      <div className="rounded-2xl bg-[#181818] py-10">
        <div className={MainParentLayout}>
          <div className="grid items-center lg:grid-cols-12 lg:gap-12">
            <div className="h-full lg:col-span-5">
              <div className="relative lg:h-full">
                <img
                  src="/Dhaval_Vira.avif"
                  srcSet="/Dhaval_Vira.avif"
                  alt="Dhaval Vira CEO and Co-Founder Media Teck"
                  title="Dhaval Vira CEO and Co-Founder Media Teck"
                  className="h-full rounded-3xl"
                />

                {/* Contact Details */}
                <div className="absolute bottom-0 w-full bg-[#181818E6] p-4">
                  <h2 className="font-priamryFont text-center text-2xl font-semibold capitalize text-white lg:text-3xl">
                    Dhaval vira,
                    <span className="ml-2 uppercase">ceo</span>
                  </h2>

                  <div className="my-5 flex items-center justify-between gap-4 text-center">
                    <div className="w-2/4">
                      <div>
                        <Link
                          to="mailto:mediateck96@gmail.com"
                          role="link"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Email Us - Media Teck"
                          aria-hidden
                          tabIndex={-1}
                          className="font-primaryFont text-sm font-normal text-white shadow-none"
                        >
                          mediateck96@gmail.com
                        </Link>
                      </div>
                    </div>
                    <div className="w-2/4">
                      <div>
                        <Link
                          to="tel:+918469637498"
                          role="link"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Call Us - Media Teck"
                          aria-hidden
                          tabIndex={-1}
                          className="font-primaryFont text-sm font-normal text-white shadow-none"
                        >
                          +91 - 846 963 7498
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 text-center">
                    <div className="w-2/4">
                      <Link
                        to="https://maps.google.com/?q=Koday, Mandvi, Kutch, Gujarat"
                        role="link"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Our Location - Media Teck"
                        aria-hidden
                        tabIndex={-1}
                        className="font-primaryFont text-sm font-normal text-white shadow-none"
                      >
                        Kutch - Gujarat, India
                      </Link>
                    </div>
                    <div className="w-2/4">
                      <p className="font-primaryFont text-sm font-normal text-white shadow-none">@mediateck96</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Grid */}
            <div className="lg:order-2 lg:col-span-7">
              <HeadingText color="text-white" headingLabel="Start growing your business with us" headingVariant="h2" headingClass="capitalize" />

              <div>
                <fetcher.Form method="post">
                  <div className="mt-4">
                    <TextFields errorMsg="" idName="fullName" isError={false} isRequired label="Name" name="fullName" type="text" placeholder="Enter your Full Name" />
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap lg:gap-8">
                    <div className="w-full lg:w-2/4">
                      <TextFields errorMsg="" idName="phone" isError={false} isRequired label="Phone" name="phoneNo" type="tel" />
                    </div>
                    <div className="w-full lg:w-2/4">
                      <TextFields errorMsg="" idName="email" isError={false} isRequired label="Email" name="email" type="email" />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap lg:gap-8">
                    <div className="w-full lg:w-2/4">
                      <SelectOption errorMsg="" idName="industry" isError={false} isRequired label="Industry" optionData={industryOption} />
                    </div>
                    <div className="w-full lg:w-2/4">
                      <SelectOption errorMsg="" idName="expectedBudget" isError={false} isRequired label="Expected Budget" optionData={expectedBudget} />
                    </div>
                  </div>

                  <div className="mt-4">
                    <TextArea errorMsg="" idName="message" isError={false} isRequired label="Message" name="message" />
                  </div>

                  <CustomButton btnLabel="send message" type="submit" className="mt-10 flex w-full items-center justify-center" />
                </fetcher.Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommonContactForm
