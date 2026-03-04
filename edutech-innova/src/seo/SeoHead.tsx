import { Helmet } from 'react-helmet-async';

const BASE_URL   = 'https://www.edutechinnova.com';
const OG_IMAGE   = `${BASE_URL}/og-image.png`;
const SITE_NAME  = 'EduTech Innova';

interface SeoHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Componente de SEO reutilizable.
 * Uso: <SeoHead title="Dashboard" description="Panel principal" canonical="/dashboard" />
 * Sobreescribe las metas del index.html para cada ruta.
 */
export function SeoHead({
  title,
  description,
  canonical,
  ogImage = OG_IMAGE,
  noIndex = false,
}: SeoHeadProps) {
  const fullTitle    = `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:image"       content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  );
}
