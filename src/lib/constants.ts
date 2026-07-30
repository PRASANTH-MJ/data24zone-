export const SITE_CONFIG = {
  name: "Data24Zone",
  tagline: "Transforming Businesses Through Technology, Automation & AI",
  mission:
    "Helping businesses and students grow through software solutions, AI, automation, and industry-oriented training.",
  url: "https://data24zone.com",
  ogImage: "/og-image.png",
  email: "hello@data24zone.in",
  phone: "+91 93605 28096",
  whatsapp: "919360528096",
  address: "Goundanur, Perur, Coimbatore, Tamil Nadu, India",
} as const;

// Basic no-API-key Google Maps embed (Google's documented "output=embed" form).
export const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(SITE_CONFIG.address)}&output=embed`;

export const SOCIAL_URLS = {
  linkedin: "https://linkedin.com/company/data24zone",
  twitter: "https://twitter.com/data24zone",
  instagram: "https://instagram.com/data24zone",
  facebook: "https://facebook.com/data24zone",
  youtube: "https://youtube.com/@data24zone",
  github: "https://github.com/data24zone",
} as const;
