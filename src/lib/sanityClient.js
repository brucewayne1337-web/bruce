import { createClient } from '@sanity/client'

const projectId = import.meta.env.SANITY_PROJECT_ID
const dataset = import.meta.env.SANITY_DATASET
const apiVersion = import.meta.env.SANITY_API_VERSION || '2023-10-01'
const token = import.meta.env.SANITY_TOKEN

export const getClient = () => {
  if (!projectId || !dataset) return null
  return createClient({ projectId, dataset, apiVersion, useCdn: true, token })
}
