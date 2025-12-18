export function faviconUrlFor(link) {
  try {
    const hostname = new URL(link).hostname
    return `https://icons.duckduckgo.com/ip3/${hostname}.ico`
  } catch {
    return ''
  }
}
