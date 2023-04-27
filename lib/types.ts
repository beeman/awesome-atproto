export interface Category {
  id: string
  name: string
  children?: Category[]
  links?: Link[]
}

export interface Link {
  href: string
  label: string
  source?: string
}
