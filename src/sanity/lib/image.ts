import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

const shouldLog = process.env.NODE_ENV === 'development' || !!process.env.VERCEL;

if (shouldLog) {
  console.log('[Image URL Builder] Initializing with:', {
    projectId: projectId || 'NOT_SET',
    dataset: dataset || 'NOT_SET',
  });
}

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId: projectId || '', dataset: dataset || '' })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
