export const getMetadataItems = (
  templateTitle = '',
  templateDescription = '',
  slug = '',
) => {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://itsmachapter.com/'
      : 'http://localhost:3000'
  const pathname = baseUrl + slug
  const title = templateTitle
    ? `${templateTitle} | ITS MA Chapter 2025`
    : 'ITS MA Chapter 2025'
  const description = templateDescription
    ? 'ITS Material Advantage Chapter 2025 adalah acara inovatif yang menjadi wadah bagi komunitas, khususnya di lingkungan Institut Teknologi Sepuluh Nopember (ITS), untuk berbagi ide kreatif. Acara ini bertujuan untuk menyebarluaskan gagasan baru yang belum banyak dieksplorasi, mendorong kolaborasi, serta memperkaya wawasan akademik dan profesional.'
    : 'ITS Material Advantage Chapter 2025 adalah event inspiratif yang menyediakan platform bagi komunitas ITS untuk berbagi ide dan konsep inovatif. Dengan fokus pada eksplorasi gagasan baru, acara ini bertujuan untuk memperkuat jejaring, meningkatkan wawasan, serta membuka peluang kolaborasi bagi peserta.'
  // const ogUrl = new URL(
  //   baseUrl + `/api/og?title=${templateTitle}&description=${description}`,
  // ).href;
  return {
    title,
    templateTitle,
    description,
    pathname,
    // ogUrl,
  }
}

export const generateTemplateMetadata = (
  templateTitle = '',
  templateDescription = '',
  slug = '',
) => {
  const metadataItems = getMetadataItems(
    templateTitle,
    templateDescription,
    slug,
  )
  return {
    title: metadataItems.title,
    alternates: {
      canonical: metadataItems.pathname,
    },
    openGraph: {
      url: metadataItems.pathname,
      // images: metadataItems.ogUrl,
    },
    twitter: {
      // images: metadataItems.ogUrl,
    },
  }
}
