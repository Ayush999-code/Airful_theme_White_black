"use client"

/**
 * This is a Client Component wrapper for Sanity Studio.
 * It handles the client-side rendering of NextStudio which uses
 * React hooks like useSyncExternalStore and useMemo.
 */

import { NextStudio } from 'next-sanity/studio/client-component'
import config from '../../../../sanity.config'

export default function StudioClient() {
  return (
    <NextStudio 
      config={config}
      unstable__noScript={false}
    />
  )
}

