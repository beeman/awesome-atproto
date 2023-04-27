import { Category, Link } from './types'

export function renderCategory(category: Category, indent = 0): string[] {
  if (!category.name.length) {
    return []
  }
  const output: string[] = []

  output.push(`##${'#'.repeat(indent)} <a name='${category.id}'></a> ${category.name}`)

  const children = category?.children ?? []

  if (children.length) {
    for (const child of children) {
      const rendered = renderCategory(child, indent + 1)
      output.push(...rendered)
    }
  }

  const items = category?.links ?? []
  if (items.length) {
    for (const items of category?.links ?? []) {
      output.push(`- [${items.label}](${items.href}) ${items.source?.length ? `([source](${items.source}))` : ''}`)
    }
  }

  if (children.length || items.length) {
    output.push('')
  }

  return output.flat()
}

export function link(label: string, href: string, source?: string): Link {
  return {
    href,
    label,
    source,
  }
}

export function linkGroup(name: string, children: Category[]): Category {
  return {
    id: slugify(name),
    name,
    children,
  }
}

export function links(name: string, links: Link[]) {
  return { ...linkGroup(name, []), links }
}

export function slugify(name: string) {
  return (
    name
      .toLowerCase()
      // Replace spaces with -
      .replace(/ /g, '-')
      // Replace slashes with -
      .replace(/\//g, '-')
      // Replace hashes with -sharp
      .replace(/#/g, '-sharp')
  )
}
