import type { grouping_project } from '@data/projects/types'

import react from 'react'

import { projects_c } from '@data/projects/c'
import { projects_ios } from '@data/projects/ios'
import { projects_macos } from '@data/projects/macos'
import { projects_web } from '@data/projects/web'

import styles from '@components/projects.module.scss'

export function Projects(): react.ReactElement {
  return (
    <div className={styles.projects}>
      {[projects_web, projects_ios, projects_macos, projects_c].map(
        (grouping_projects: grouping_project): react.ReactElement => (
          <react.Fragment key={grouping_projects.title}>
            {grouping_projects.items.map(project => (
              <div className={styles.project} key={project.title}>
                <h3 className={styles.name}>
                  {project.open_link ? <a href={project.open_link}>{project.title}</a> : project.title}{' '}
                  <span className={styles.platform}>{grouping_projects.title}</span>
                </h3>

                <div className={styles.content}>
                  <div className={styles.description}>{project.description}</div>

                  <br />

                  <div className={styles.source_code_link_container}>
                    <a className={styles.source_code_link} href={project.source_code_link}>source code available at: {project.source_code_link}</a>
                  </div>

                  <br />

                  <div className={styles.tech}>written using: {project.technologies.join(' | ')}</div>
                </div>
              </div>
            ))}
          </react.Fragment>
        )
      )}
    </div>
  )
}
