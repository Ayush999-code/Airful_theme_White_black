'use client'

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
import {apiVersion} from './src/sanity/env'

export default defineConfig({
  // Studio path (OK for hosted + local)
  basePath: '/studio',

  // 🔑 REQUIRED for hosted Studio
  projectId: 'euny7u3w',

  // ❗ IMPORTANT:
  // Yahan wahi dataset name likho
  // jo Sanity dashboard → Datasets tab me dikh raha ho
  // Example: 'production'
  dataset: 'production',

  schema,

  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})

