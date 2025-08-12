import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string; // under 60 chars
  description: string; // under 160 chars
  canonical?: string;
  jsonLd?: Record<string, any>;
}

const SEO = ({ title, description, canonical, jsonLd }: SEOProps) => {
  const url = canonical || (typeof window !== 'undefined' ? window.location.href : '/');
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
