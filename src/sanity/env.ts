export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-29'

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || ''

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

// Runtime check - only throw in functions that use these values
export function isConfigured(): boolean {
  return !!(projectId && dataset)
}
