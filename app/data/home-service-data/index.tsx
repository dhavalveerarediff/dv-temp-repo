import type { ReactElement, SVGProps } from 'react'

export type HomeServiceButtonDataProps = { btnLabel: string; icon: ReactElement<SVGProps<SVGSVGElement>>; description?: string }
export type HomeServiceInfoDataProps = { btnPlaceholder: string; chipsLabel: Array<string>; description: string; imgPath?: string }
export type HomeServicePlaceHolder = { customSoftware: HomeServiceInfoDataProps; webDevelopment: HomeServiceInfoDataProps; maintenance: HomeServiceInfoDataProps }

// Icons
import { CustomSoftwareIcon, MaintenanceSupportIcon, WebDevelopmentIcon } from '~/icons'

export const homeServiceBtnData: HomeServiceButtonDataProps[] = [
  { btnLabel: 'Custom Software', icon: <CustomSoftwareIcon className="hs-tab-active:fill-[#A22600]" /> },
  { btnLabel: 'Web Development', icon: <WebDevelopmentIcon className="hs-tab-active:fill-[#A22600]" /> },
  { btnLabel: 'Maintenance & Support', icon: <MaintenanceSupportIcon className="hs-tab-active:fill-[#A22600]" /> },
]

export const homeServiceInfoData: HomeServicePlaceHolder = {
  customSoftware: {
    btnPlaceholder: 'Custom Software',
    chipsLabel: ['CRM Development', 'Cloud App', 'ERP Software'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nostrum tempora laudantium! Ullam, soluta mollitia. Veniam id neque, laudantium, cumque repellendus, nihil officia ab blanditiis impedit exercitationem corporis consequuntur quia.',
  },
  webDevelopment: {
    btnPlaceholder: 'Web Development',
    chipsLabel: ['FrontEnd', 'Backend', 'Database'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nostrum tempora laudantium! Ullam, soluta mollitia. Veniam id neque, laudantium, cumque repellendus, nihil officia ab blanditiis impedit exercitationem corporis consequuntur quia.',
  },
  maintenance: {
    btnPlaceholder: 'Maintenance & Support',
    chipsLabel: ['AWS Cloud'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nostrum tempora laudantium! Ullam, soluta mollitia. Veniam id neque, laudantium, cumque repellendus, nihil officia ab blanditiis impedit exercitationem corporis consequuntur quia.',
  },
}
