import {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Case Studies')
        .schemaType('caseStudy')
        .child(
          S.documentTypeList('caseStudy').title('Case Studies')
        ),

      S.listItem()
        .title('Services')
        .schemaType('service')
        .child(
          S.documentTypeList('service').title('Services')
        ),

      S.listItem()
        .title('Blog')
        .schemaType('blog')
        .child(
          S.documentTypeList('blog').title('Blog Posts')
        ),
    ])
