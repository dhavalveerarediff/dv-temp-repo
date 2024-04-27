import type { ReactElement, SVGProps } from 'react'

// Icons
import {
  BToBIcon,
  BToCIcon,
  BankingFinanceIcon,
  CommunityWebDesignIcon,
  ECommerceIcon,
  EducationIcon,
  EventsIcon,
  FoodBeveragesIcon,
  GroceryIcon,
  HealthFitnessIcon,
  HotelRestaurantIcon,
  JewelryFashionIcon,
  JobsRecruitersIcon,
  MatrimonialIcon,
  MedicalDoctorsIcon,
  NewsBlogPublicationIcon,
  RealEstateIcon,
  ToursTravelIcon,
  TransportIcon,
} from '~/icons'

export type IndustriesDataProps = { industryTitle: string; industryIcon: ReactElement<SVGProps<SVGSVGElement>> }

export const industriesData: IndustriesDataProps[] = [
  { industryTitle: 'Real Estate', industryIcon: <RealEstateIcon /> },
  { industryTitle: 'Jobs & Recruiters', industryIcon: <JobsRecruitersIcon /> },
  { industryTitle: 'Matrimonial', industryIcon: <MatrimonialIcon /> },
  { industryTitle: 'Medical & Doctors', industryIcon: <MedicalDoctorsIcon /> },
  { industryTitle: 'Food & Beverage', industryIcon: <FoodBeveragesIcon /> },
  { industryTitle: 'Tours & Travel', industryIcon: <ToursTravelIcon /> },
  { industryTitle: 'School & Education', industryIcon: <EducationIcon /> },
  { industryTitle: 'B2C', industryIcon: <BToCIcon /> },
  { industryTitle: 'B2B', industryIcon: <BToBIcon /> },
  { industryTitle: 'Transport', industryIcon: <TransportIcon /> },
  { industryTitle: 'Event', industryIcon: <EventsIcon /> },
  { industryTitle: 'ECommerce', industryIcon: <ECommerceIcon /> },
  { industryTitle: 'Health & Fitness', industryIcon: <HealthFitnessIcon /> },
  { industryTitle: 'Banking & Finance', industryIcon: <BankingFinanceIcon /> },
  { industryTitle: 'Hotels & Restaurants', industryIcon: <HotelRestaurantIcon /> },
  { industryTitle: 'Grocery', industryIcon: <GroceryIcon /> },
  { industryTitle: 'Community Web Design', industryIcon: <CommunityWebDesignIcon /> },
  { industryTitle: 'Jewelry & Fashion Accessories', industryIcon: <JewelryFashionIcon /> },
  { industryTitle: 'News / Blogs & Publication', industryIcon: <NewsBlogPublicationIcon /> },
]
