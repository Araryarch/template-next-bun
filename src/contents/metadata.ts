import { getMetadataItems } from '@/lib/getMetadataItems'

const metadataItems = getMetadataItems()

export const BASE_METADATA = {
  title: metadataItems.title,
  description: metadataItems.description,
  creator: 'ITS Material Advantage Chapter 2025 Web Team',
  publisher: 'ITS Material Advantage Chapter 2025 Web Team',
  keywords: [
    'ITS Material Advantage Chapter',
    'ITS Material Advantage Chapter 2025',
    'ITS Material Advantage Chapter',
    'IMAC',
    'ITS MA CHAPTER',
    'IMAC ITS',
    'IMACS',
    'ITS',
    'Institut Teknologi Sepuluh Nopember',
    'Sepuluh Nopember Institute of Technology',
  ],
  robots: 'follow, index',
  generator: 'Next.js',
  alternates: {
    canonical: metadataItems.pathname,
  },

  // todo: add og:image when logo is released
  // icons: {
  //   icon: [
  //     {
  //       url: '/favicon/android-chrome-192x192.png',
  //       sizes: '192x192',
  //       type: 'image/png',
  //     },
  //     {
  //       url: '/favicon/favicon-32x32.png',
  //       sizes: '32x32',
  //       type: 'image/png',
  //     },
  //     {
  //       url: '/favicon/favicon-16x16.png',
  //       sizes: '16x16',
  //       type: 'image/png',
  //     },
  //   ],
  //   apple: {
  //     url: '/favicon/apple-touch-icon.png',
  //     sizes: '180x180',
  //     type: 'image/png',
  //   },
  // },
}
