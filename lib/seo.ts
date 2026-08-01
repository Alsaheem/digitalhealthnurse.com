export const SITE_URL = "https://digitalhealthnurse.com";

export const SITE_NAME = "Digital Health Nurse";

export const PRIMARY_KEYWORDS = [
  "nurse career change",
  "nursing to digital health",
  "digital health careers for nurses",
  "non-clinical nursing careers",
  "healthcare career transition",
  "leave clinical practice career",
  "transferable skills for nurses",
  "clinical informatics nurse",
  "nurse informatics career",
  "clinical applications specialist",
  "healthcare customer success",
  "digital health implementation",
  "clinical safety officer",
  "health tech careers for nurses",
  "product specialist healthcare",
  "career mentoring for nurses",
  "digital health career coach",
  "nursing career advice UK",
  "CV help for nurses leaving clinical",
  "LinkedIn profile nurse career change",
  "how to leave nursing without leaving healthcare",
  "nursing experience transferable skills",
  "applying for digital health jobs with no tech background",
  "alternative careers for nurses UK",
] as const;

export const DEFAULT_DESCRIPTION =
  "Career mentoring for nurses and healthcare professionals exploring digital health, health tech, informatics, customer success and other non-clinical careers.";

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "en-GB",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Stacy Nyangere",
        url: SITE_URL,
        email: "stacy@digitalhealthnurse.com",
        jobTitle: "Digital Health Career Mentor",
        description:
          "Registered Adult Nurse offering career mentoring for nurses and healthcare professionals transitioning into digital health and non-clinical roles.",
        sameAs: ["https://www.linkedin.com/in/snyangere"],
        knowsAbout: [...PRIMARY_KEYWORDS],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/stacy-mentoring-portrait.png`,
        description: DEFAULT_DESCRIPTION,
        provider: { "@id": `${SITE_URL}/#person` },
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        serviceType: [
          "Career mentoring for nurses",
          "Digital health career coaching",
          "Healthcare career transition guidance",
        ],
        audience: {
          "@type": "Audience",
          audienceType:
            "Nurses and healthcare professionals exploring digital health and non-clinical careers",
        },
        keywords: PRIMARY_KEYWORDS.join(", "),
      },
    ],
  };
}
