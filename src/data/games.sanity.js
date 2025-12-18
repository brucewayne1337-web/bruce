import { getClient } from '../lib/sanityClient.js'
import { games as fallbackGames } from './games.js'

export async function getGames() {
  const client = getClient()
  if (!client) return fallbackGames
  try {
    const data = await client.fetch(`*[_type == "game"]{ "key": coalesce(slug.current, _id), name, tagline, icon, "url": url } | order(name asc)`) 
    const normalized = (data || []).map((item) => ({
      key: item.key || (item.name ? item.name.toLowerCase().replace(/\s+/g, '-') : 'game'),
      name: item.name || 'Untitled',
      tagline: item.tagline || 'Explore and visit',
      icon: item.icon || '🎮',
      url: item.url || '#'
    }))
    return normalized.length ? normalized : fallbackGames
  } catch {
    return fallbackGames
  }
}
