import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/visitante",
    },
    sitemap: "https://ipritapema.com.br/sitemap.xml",
  };
}
