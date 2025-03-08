

import { MetadataRoute } from "next";

export default function sitemap() {
  const baseUrl = "https://www.globalcoinart.com"; // Change this to your domain

  const staticPages = [
    "/",
    "/about",
    "/exhibit",
    "/contribute",
    "/contact" // Add more pages if needed
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString(), // Automatically updates the last modification date
  }));
}



