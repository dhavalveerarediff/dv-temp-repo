import type { FC } from 'react'

// Data
import { homeClientData } from '~/data'

const HomeLogoSection: FC = () => {
  return (
    <section className="border-b border-[#D7D7D7] py-4">
      <div>
        <div className="group flex space-x-16 overflow-hidden">
          <div className="group-hover:paused flex animate-loop-scroll space-x-16">
            {homeClientData.map((clientOne, indexOne) => {
              return <img loading="lazy" src={clientOne.imgPath} className="w-32 max-w-none opacity-30 hover:opacity-100" alt={clientOne.imgName} key={indexOne} />
            })}
          </div>

          <div className="group-hover:paused flex animate-loop-scroll space-x-16" aria-hidden="true">
            {homeClientData.map((clientOne, indexTwo) => {
              return <img loading="lazy" src={clientOne.imgPath} className="w-32 max-w-none opacity-30 hover:opacity-100" alt={clientOne.imgName} key={indexTwo} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeLogoSection
