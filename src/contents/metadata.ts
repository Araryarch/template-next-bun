import { getMetadataItems } from '@/lib/getMetadataItems'

const metadataItems = getMetadataItems()

export const BASE_METADATA = {
  title: metadataItems.title,
  description: metadataItems.description,
  creator: 'Your Team Name 2025 Web Team',
  publisher: 'Your Team Name 2025 Web Team',
  keywords: [
    'Your Team Name',
    'Your Team Name 2025',
    'Your Team Name',
    'Your Team Name',
    'Your Team Name 2025 Web Team',
    'Your Team Name ITS',
    'Your Team Name',
    'Your Team Name 2025 Web Team',
    'Your University Name',
    'Your University Name 2025',
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
