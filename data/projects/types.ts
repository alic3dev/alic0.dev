import type React from 'react'

export interface project {
  title: string
  open_link?: string
  source_code_link: string
  description: React.ReactNode
  technologies: string[]
}

export interface grouping_project {
  items: project[]
  title: string
}
