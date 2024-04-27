import { forwardRef, type ComponentProps, type FC } from 'react'

interface TechnologyStackCardProps extends Omit<ComponentProps<'div'>, 'ref'> {
  technologyIcon: FC<ComponentProps<'svg'>>
  technologyName: string
}

const TechnologyStackCard = forwardRef<HTMLDivElement, TechnologyStackCardProps>(({ technologyIcon: TechnologyIcon, technologyName }, ref) => {
  return (
    <div className="rounded-2xl bg-black p-4" ref={ref}>
      <div className="flex flex-col flex-wrap items-center justify-between gap-4 lg:flex-row lg:flex-nowrap">
        <div className="lg:w-2/5">
          <div className="rounded-3xl bg-black">
            <TechnologyIcon aria-hidden className="mx-auto text-3xl text-white" />
          </div>
        </div>
        <div className="lg:w-3/5">
          <div>
            <p className="text-wrap font-primaryFont text-sm font-normal uppercase text-white">{technologyName}</p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default TechnologyStackCard

TechnologyStackCard.displayName = 'TechnologyStackCard'
