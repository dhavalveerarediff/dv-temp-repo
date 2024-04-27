import type { ComponentProps, FC } from 'react'

// SVG Icons
import { ClientCentricIcon, EffectiveCollaborationIcon, QualityServiceIcon, ServiceDeliveredInTimeIcon, TeamWorkIcon } from '~/icons'

export type TransparencyEthicsProps = { title: string; description: string; icon: FC<ComponentProps<'svg'>> }

export const transparencyEthicsData: TransparencyEthicsProps[] = [
  {
    description:
      'At Media Teck, we believe in delivering a client-centric approach, where their needs and goals are at the forefront of everything we do. Our primary goal is to understand our clients needs, challenges, and objectives.',
    icon: ClientCentricIcon,
    title: 'Client-centric Approach',
  },
  {
    description: 'At Media Teck, ensuring service delivered in time is a paramount priority. With our professional approach, we consistently strive to meet deadlines and maintain our clients trust.',
    icon: ServiceDeliveredInTimeIcon,
    title: 'Service Delivered in Time',
  },
  {
    description:
      'Effective collaboration is crucial in any professional setting, & Media Teck offers a platform that truly embodies this principle & enables teams to work together effortlessly, resulting in optimized productivity & exceptional outcomes.',
    icon: EffectiveCollaborationIcon,
    title: 'Effective Collaboration',
  },
  {
    description:
      'Teamwork is a fundamental cornerstone for success in any professional setting, and Media Teck exemplifies the power of collaboration. By seamlessly bringing together diverse skill sets and expertise.',
    icon: TeamWorkIcon,
    title: 'Team Work',
  },
  {
    description:
      'At Media Teck, we are committed to providing our clients with the highest quality of service. With a professional tone of voice, we strive to exceed expectations and deliver exceptional results.',
    icon: QualityServiceIcon,
    title: 'Quality of Service',
  },
]
