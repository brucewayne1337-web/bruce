import { getClient } from '../lib/sanityClient.js'

const fallback = {
  brandName: 'brucewaynee',
  brandUrl: 'https://brucewaynee.com',
  heroTitle: 'brucewaynee',
  heroSubtitle: 'A fast, clean, mobile-first game discovery portal. Informational only—18+; we do not operate or host games.',
  primaryCtaLabel: 'Browse Games',
  primaryCtaHref: '/games',
  secondaryCtaLabel: 'Responsible Play',
  secondaryCtaHref: '/responsible',
  footerDisclaimer1: 'Informational gaming portal – 18+ only. We do not operate or host games.',
  footerDisclaimer2: 'All game links are external. Visiting a game will open a new tab. No payments or accounts are handled on this site.'
}

export async function getSettings() {
  const client = getClient()
  if (!client) return fallback
  try {
    const doc = await client.fetch(`*[_type == "siteSettings"][0]{
      brandName, brandUrl,
      heroTitle, heroSubtitle,
      primaryCtaLabel, primaryCtaHref,
      secondaryCtaLabel, secondaryCtaHref,
      footerDisclaimer1, footerDisclaimer2
    }`)
    return { ...fallback, ...(doc || {}) }
  } catch {
    return fallback
  }
}
