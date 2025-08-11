import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      {/* Page Title */}
      <title>{title}</title>

      {/* Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <html lang="en" />

      {/* Favicon Logo from public folder */}
      <link rel="icon" href="/logo.webp" type="image/webp" />
    </Helmet>
  );
};

export default SEO;
