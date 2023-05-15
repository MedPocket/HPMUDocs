import type { GatsbyConfig, PluginRef } from "gatsby"

const config: GatsbyConfig = {
  pathPrefix: `HPMUDocs`,
  siteMetadata: {
    siteTitle: `HPMUDocs`,
    siteTitleAlt: `HPMUDocs | MedPocket`,
    siteHeadline: `HPMUDocs | by MedPocket`,
    siteUrl: `https://medpocket.github.io/HPMUDocs`,
    siteDescription: `HPMUDocs bởi MedPocket - Dự án này nhằm thu thập và sắp xếp tất cả các tài liệu liên quan đến chương trình giảng dạy và nghiên cứu của trường Đại học Y Hải Phòng`,
    siteImage: `/og-image.jpg`,
    siteLanguage: `en`,
    author: `@torn4dom4n`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HPMUDocs | MedPocket`,
        short_name: `HPMUDocs`,
        description: `HPMUDocs bởi MedPocket - Dự án này nhằm thu thập và sắp xếp tất cả các tài liệu liên quan đến chương trình giảng dạy và nghiên cứu của trường Đại học Y Hải Phòng`,
        start_url: `/`,
        background_color: `#141821`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
