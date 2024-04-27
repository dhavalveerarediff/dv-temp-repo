import type { FC } from 'react'

// Remix
import { Link } from '@remix-run/react'

// Common
import HeadingText from '~/components/common/heading-text'
import CustomButton from '~/components/common/custom-button'

// Helpers
import { tailwindClassMerger } from '~/helpers'

// CONSTANTS
import { APP_NAME } from '~/constants'

// Data
import { homeProjectsData } from '~/data'

// UI
import { MainParentLayout } from '~/ui'

const HomeProjectsSection: FC = () => {
  return (
    <section className="mt-10 border-t border-[#87868636] pt-10">
      <div className={tailwindClassMerger(MainParentLayout, 'py-10')}>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <HeadingText color="text-black" headingLabel="Projects" headingVariant="h2" />
          </div>
          <div>
            <div className="flex lg:justify-end">
              <Link to="/works" role="link" aria-label={`All Projects of ${APP_NAME}`}>
                <CustomButton btnLabel="all projects" className="capitalize" />
                <span className="sr-only">All Projects of {APP_NAME}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-3">
          {homeProjectsData.map((project, index) => {
            return (
              <div className="m-4 p-2" key={index}>
                <div className="mb-5">
                  <Link to={project?.projectLink} role="link" target="_blank" rel="noreferrer" aria-label={`${project.projectName} - Media Teck`}>
                    <img
                      src={project.imgPath}
                      alt={`${project.projectName} - Media Teck`}
                      title={`${project.projectName} - Media Teck`}
                      className="h-[25vh] w-full rounded-3xl object-cover object-center align-middle"
                      aria-hidden
                    />
                  </Link>
                </div>
                <div className="w-full">
                  <div className="pt-5">
                    <p className="mb-5 max-w-max rounded-3xl bg-[#181818AD] px-5 py-2 font-primaryFont text-xs font-semibold uppercase tracking-[0.5px] text-white">{project.projectCategory}</p>

                    <Link to={project?.projectLink} role="link" target="_blank" rel="noreferrer" aria-label={`${project.projectName} - Media Teck`}>
                      <h3 className="font-primaryFont text-3xl font-extrabold -tracking-tighter text-black transition-all duration-3000 ease-in-out hover:text-primaryColor">{project.projectName}</h3>
                    </Link>
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

export default HomeProjectsSection
