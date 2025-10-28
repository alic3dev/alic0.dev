import type { UUID } from 'crypto'

interface GalleryCollectionItem {
  date: Date
  description?: string
  name?: string
  src: UUID
}

interface GalleryCollection {
  items: GalleryCollectionItem[]
  name: string
}

export const data_gallery: GalleryCollection[] = [
  {
    name: 'journal_one',
    items: [
      {
        date: new Date(),
        description: 'Some kind of description',
        name: 'image_one',
        src: crypto.randomUUID() as UUID
      }
    ]
  }
]
