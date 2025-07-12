import { Helmet } from "react-helmet";

const WisaSeo = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Pizzeria Wisa",
    "image": "https://www.wisapizzeria.com/images/other/richresult.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tešanjska bb, Marijin Dvor",
      "addressLocality": "Sarajevo",
      "postalCode": "71000",
      "addressCountry": "BA"
    },
    "telephone": "+387 61 205 605", 
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.5,
      "reviewCount": 180
    },
    "servesCuisine": ["Pizza", "Sendviči", "Maslenice"],
    "url": "https://www.wisapizzeria.com/"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default WisaSeo;
