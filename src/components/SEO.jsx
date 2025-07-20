import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  children,
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      {/* LocalBusiness structured data for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Yanik Cleaning",
          image: "https://yourdomain.com/logo.png",
          "@id": "https://yourdomain.com",
          url: "https://yourdomain.com",
          telephone: "+32 123 456 789",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Your Street 1",
            addressLocality: "Ghent",
            postalCode: "9000",
            addressCountry: "BE",
          },
          description,
        })}
      </script>
      {children}
    </Helmet>
  );
}
