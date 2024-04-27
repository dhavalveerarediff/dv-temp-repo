export type HomeProjectsProps = { projectName: string; projectCategory: string; projectType: string; projectLink: string; imgPath: string }

export const homeProjectsData: HomeProjectsProps[] = [
  { projectName: 'The Gilded Table', projectCategory: 'Restaurant', projectType: 'Website', projectLink: 'https://the-gilded-table.netlify.app', imgPath: '/projects/the_gilded_table.avif' },
  {
    projectName: 'Comfort - The Home Craft',
    projectCategory: 'Furniture',
    projectType: 'Website',
    projectLink: 'https://comfort---the-home-craft.pages.dev/',
    imgPath: '/projects/Comfort_Furniture_Store.avif',
  },
  { projectName: 'Tiaara', projectCategory: 'Clothing', projectType: 'eCommerce', projectLink: 'https://tiaara.in', imgPath: '/projects/Tiaara_ECommerce.avif' },
]
