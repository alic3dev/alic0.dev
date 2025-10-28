import type {
  item_data_professional_experience,
  professional_experience_skill_set
} from '@data/professional_experience.types'

export const skills: professional_experience_skill_set = {
  frameworks_libraries: ['react', 'Next.js', 'Vite', 'Node.js'],
  languages: [
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'Sass',
    'PostgreSQL'
  ],
  software: ['Figma', 'Trello', 'Asana', 'Jira']
}

const date_amazon_start = new Date('Feb 24 2025')
const date_current = new Date()

export const data: item_data_professional_experience[] = [
  {
    date_start: date_amazon_start,
    href: 'https://amazon.com',
    length: `${date_current.getFullYear() * 12 + date_current.getMonth() - (date_amazon_start.getFullYear() * 12 + date_amazon_start.getMonth())} Months`,
    length_detailed: 'Feb 2025',
    location: 'Washington',
    name: 'Amazon - Kuiper',
    roles: [
      {
        date_start: new Date('Feb 24 2025'),
        description: [''],
        length: 'Current',
        length_detailed: 'Feb 2025',
        location: 'Washington',
        technologies: ['type_script', 'react'],
        title: 'Front End Engineer'
      }
    ]
  },
  {
    date_end: new Date('Sep 2022'),
    date_start: new Date('Jan 2022'),
    href: 'https://thehumaneleague.org',
    length: '8 Months',
    length_detailed: 'Jan 2022 - Sep 2022',
    location: 'remote',
    name: 'The Humane League',
    roles: [
      {
        date_end: new Date('Sep 2022'),
        date_start: new Date('Jan 2022'),
        description: [
          'Improved developer experience by maintaining configurations for linting, formatting, and typings.',
          'Built components and pages using Typescript, react, and JSX.',
          'Created and maintained Contentful CMS components.',
          'Contributed to enhancing donation processes and analytic systems for higher supporter conversion rates.'
        ],
        length: '8 Months',
        length_detailed: 'Jan 2022 - Sep 2022',
        location: 'remote',
        technologies: ['type_script', 'react', 'sass', 'postgresql'],
        title: 'Full Stack Developer'
      }
    ]
  },
  {
    date_end: new Date('Jun 2021'),
    date_start: new Date('Jan 2018'),
    href: 'https://www.osmosis.org',
    length: '3 Years 5 Months',
    length_detailed: 'Jan 2018 - Jun 2021',
    location: 'Hybrid remote',
    name: 'Osmosis - Knowledge Diffusion',
    roles: [
      {
        date_end: new Date('Jun 2021'),
        date_start: new Date('Jan 2019'),
        description: [
          'Development and maintenance of backend REST APIs.',
          'Enhanced video streaming technologies by implementing encrypted HLS feeds using an FFMPEG processing pipeline to prevent content piracy.',
          'Led vulnerability triage and resolution efforts on HackerOne platform.',
          'Created mobile apps with Apache Cordova framework.',
          'Upgraded Stripe payment processor for managing recurring subscription payments via Recurly.'
        ],
        length: '2 Years 5 Months',
        length_detailed: 'Jan 2019 - Jun 2021',
        location: 'remote',
        technologies: [
          'knockout',
          'less',
          'pug',
          'phonegap',
          'mariadb',
          'stripe',
          'hackerone'
        ],
        title: 'Full Stack Developer'
      },
      {
        date_end: new Date('Jan 2019'),
        date_start: new Date('Mar 2018'),
        description: [
          'Maintained existing pages to meet updated code standards and minimize technical debt.',
          'Resolved user bug reports by reproducing and fixing issues.'
        ],
        length: '10 Months',
        length_detailed: 'Mar 2018 - Jan 2019',
        location: 'hybrid_remote',
        technologies: ['knockout', 'less', 'pug'],
        title: 'Front End Developer'
      },
      {
        date_end: new Date('Mar 2018'),
        date_start: new Date('Jan 2018'),
        description: [
          'Production of web pages based upon Figma design files in a proprietary framework which utilized Knockout.js + Jade templating.'
        ],
        length: '2 Months',
        length_detailed: 'Jan 2018 - Mar 2018',
        location: 'hybrid_remote',
        technologies: ['knockout', 'less', 'pug'],
        title: 'Front End Developer Intern'
      }
    ]
  }
]
