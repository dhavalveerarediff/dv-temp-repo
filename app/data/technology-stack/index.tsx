import type { ComponentProps, FC } from 'react'

// SVG Icons
import {
  AWSIcon,
  DigitalOceanIcon,
  ExpressjsIcon,
  FlowbiteReactIcon,
  GCPIcon,
  MaterialUIIcon,
  MongoDBIcon,
  NextjsIcon,
  NginxIcon,
  NodejsIcon,
  PostgreSQLIcon,
  ReactjsIcon,
  RemixIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from '~/icons'

export type TechnologyStackBtnProps = { techPlatform: string }
export type TechnologyStackDataProps = { techName: string; techIcon: FC<ComponentProps<'svg'>> }
export type TechStackDataWithCategProps = {
  webPlatform: {
    frontEnd: TechnologyStackDataProps[]
    backEnd: TechnologyStackDataProps[]
  }
  cloudDevOps: {
    devOps: TechnologyStackDataProps[]
    cloud: TechnologyStackDataProps[]
  }
  database: TechnologyStackDataProps[]
}

export const technologyStackBtnData: TechnologyStackBtnProps[] = [{ techPlatform: 'Web Platform' }, { techPlatform: 'Cloud & DevOps' }, { techPlatform: 'Database' }]

export const technologyData: TechStackDataWithCategProps = {
  webPlatform: {
    frontEnd: [
      { techName: 'React', techIcon: ReactjsIcon },
      { techName: 'Next.js', techIcon: NextjsIcon },
      { techName: 'Remix', techIcon: RemixIcon },
      { techName: 'TypeScript', techIcon: TypeScriptIcon },
      { techName: 'Material UI', techIcon: MaterialUIIcon },
      { techName: 'Tailwind CSS', techIcon: TailwindCSSIcon },
      { techName: 'Flowbite React', techIcon: FlowbiteReactIcon },
    ],
    backEnd: [
      { techName: 'Node.js', techIcon: NodejsIcon },
      { techName: 'Express.js', techIcon: ExpressjsIcon },
    ],
  },
  cloudDevOps: {
    devOps: [{ techName: 'Nginx', techIcon: NginxIcon }],
    cloud: [
      { techName: 'AWS', techIcon: AWSIcon },
      { techName: 'Google Cloud', techIcon: GCPIcon },
      { techName: 'Digital Ocean', techIcon: DigitalOceanIcon },
    ],
  },
  database: [
    { techName: 'PostgreSQL', techIcon: PostgreSQLIcon },
    { techName: 'MongoDB', techIcon: MongoDBIcon },
  ],
}
