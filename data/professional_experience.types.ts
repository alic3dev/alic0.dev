export interface professional_experience_skill_set {
  frameworks_libraries: string[]
  languages: string[]
  software: string[]
}

type location_item_data_professional_experience_role =
  | 'remote'
  | 'hybrid_remote'

export interface item_data_professional_experience_role {
  date_end?: Date
  date_start: Date
  description: string[]
  length: string
  length_detailed: string
  location: location_item_data_professional_experience_role | string
  technologies: string[]
  title: string
}

export interface item_data_professional_experience {
  date_end?: Date
  date_start: Date
  href: string
  length: string
  length_detailed: string
  location: location_item_data_professional_experience_role | string
  // logo: React.ReactElement
  name: string
  roles: item_data_professional_experience_role[]
}
