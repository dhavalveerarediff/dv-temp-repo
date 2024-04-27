import type { FC } from 'react'

// Remix
import { Link } from '@remix-run/react'

// UI
import { MainParentLayout } from '~/ui'

const CustomFooter: FC = () => {
  return (
    <footer className="m-0 p-0">
      <div className="border-t py-10">
        <div className={MainParentLayout}>
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 sm:col-span-6 md:col-span-6">
              <img src="/PNGLogo/Media_Teck_Transparent_Cropped.png" srcSet="/PNGLogo/Media_Teck_Transparent_Cropped.png" alt="Media Teck" title="Media Teck" loading="lazy" className="md:w-1/3" />

              <p className="mt-3 text-center font-primaryFont text-sm font-normal md:text-left">Media Teck - software product development company.</p>
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <p className="font-primaryFont text-xl font-bold capitalize">services</p>

              <ul className="mt-4">
                <li className="pb-4">
                  <Link to="/services/web-development" role="link" aria-label="Web Development Service - Media Teck" className="font-primaryFont text-sm font-normal shadow-none">
                    Web Development
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="/services/custom-software" role="link" aria-label="Custom Software Service - Media Teck" className="font-primaryFont text-sm font-normal shadow-none">
                    Custom Software
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="/services/maintenance-support" role="link" aria-label="Maintenance &amp; Support Service - Media Teck" className="font-primaryFont text-sm font-normal shadow-none">
                    Maintenance &amp; Support
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="/services/cloud-infrastructure" role="link" aria-label="Cloud Infrastructure Service - Media Teck" className="font-primaryFont text-sm font-normal shadow-none">
                    Cloud Infrastructure
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <p className="font-primaryFont text-xl font-bold capitalize">about us</p>

              <ul className="mt-4">
                <li className="pb-4">
                  <Link to="/about" role="link" aria-label="About - Media Teck" className="font-primaryFont text-sm font-normal shadow-none">
                    About
                  </Link>
                </li>
              </ul>

              <div className="mt-3">
                <p className="font-primaryFont text-xl font-bold capitalize">contact us</p>

                <ul className="mt-4">
                  <li className="pb-4">
                    <Link
                      to="tel:+918469637498"
                      role="link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Call Us - Media Teck"
                      aria-hidden
                      tabIndex={-1}
                      className="font-primaryFont text-sm font-normal shadow-none"
                    >
                      +91 - 846 963 7498
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link
                      to="mailto:mediateck96@gmail.com"
                      role="link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Email Us - Media Teck"
                      aria-hidden
                      tabIndex={-1}
                      className="font-primaryFont text-sm font-normal shadow-none"
                    >
                      mediateck96@gmail.com
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link
                      to="https://maps.google.com/?q=Koday, Mandvi, Kutch, Gujarat"
                      role="link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Our Location - Media Teck"
                      aria-hidden
                      tabIndex={-1}
                      className="font-primaryFont text-sm font-normal shadow-none"
                    >
                      Kutch - Gujarat, India
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t">
            <p className="text-md mt-3 text-center font-primaryFont uppercase tracking-[0.5px] text-[#060748]">Copyright &copy; {new Date().getFullYear()} Media Teck</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default CustomFooter
