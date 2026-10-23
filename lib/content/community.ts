import type { CommunityPostContent, CommunitySectionContent } from "./types";
import certImage from "./images/linkedin-ucp-volunteer.jpg";
import trophyImage from "./images/certificates/loopverse-trophy.jpg";
import loopverseCertImage from "./images/certificates/loopverse-certificate.jpg";
import avatarImage from "./images/hashir-cutout.png";

const posts: readonly CommunityPostContent[] = [
  {
    id: "nastp-loopverse",
    authorName: "Hashir Farooq",
    authorRole: "AI & Full-Stack Developer · Founder @ MegaTrix",
    authorAvatar: {
      src: avatarImage,
      alt: "Hashir Farooq",
    },
    publishedDate: "National Aerospace Science & Technology Park (NASTP) Lahore",
    postUrl: "https://lnkd.in/p/dUV5Zch3",
    contentLines: [
      "Secured the 2nd Runner-Up position at National Aerospace Science & Technology Park (NASTP) Lahore in the AI/ML challenge.",
      "Engineered an end-to-end Weather Prediction system leveraging Machine Learning, RAG, and Large Language Models alongside teammate Abu Sufian.",
    ],
    tags: ["#NASTP", "#ArtificialIntelligence", "#MachineLearning", "#RAG", "#LLMs", "#Innovation"],
    postImage: {
      src: trophyImage,
      alt: "LoopLab LoopVerse 3.0 Second Runner Up AI/ML Award Trophy at NASTP Lahore",
    },
    secondaryImage: {
      src: loopverseCertImage,
      alt: "LoopLab LoopVerse 3.0 Certificate of Participation awarded to Hashir Farooq",
    },
    viewOnLinkedInLabel: "View on LinkedIn",
    openLightboxLabel: "Inspect Award & Certificate",
    closeLightboxLabel: "Close preview",
    certificateBadge: "🏆 2nd Runner-Up · AI/ML",
    verifiedLabel: "Verified award",
    cardKicker: "NASTP Lahore · LoopVerse",
  },
  {
    id: "ucp-openhouse",
    authorName: "Hashir Farooq",
    authorRole: "AI & Full-Stack Developer · Founder @ MegaTrix",
    authorAvatar: {
      src: avatarImage,
      alt: "Hashir Farooq",
    },
    publishedDate: "Fall 2025 · University of Central Punjab",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7436066341008334848/",
    contentLines: [
      "Volunteered at FOIT & CS FYP Open House Exhibition at University of Central Punjab.",
      "It was a great experience being part of the event and supporting the department's flagship technology showcase.",
    ],
    tags: ["#UCP", "#FOIT", "#Volunteer", "#FYPOpenHouse"],
    postImage: {
      src: certImage,
      alt: "Certificate of Appreciation awarded to Hashir Farooq at UCP FOIT&CS FYP Open House Exhibition Fall 2025",
    },
    secondaryImage: undefined,
    viewOnLinkedInLabel: "View on LinkedIn",
    openLightboxLabel: "Inspect Certificate",
    closeLightboxLabel: "Close certificate",
    certificateBadge: "Certificate of Appreciation",
    verifiedLabel: "Verified post",
    cardKicker: "UCP FOIT & CS",
  },
];

export const communityContent: CommunitySectionContent = {
  index: "04",
  label: "Community & Honours",
  headline: {
    serif: "Campus & Competitions.",
    sans: "Hackathons, volunteer leadership, and public impact.",
  },
  post: posts[0],
  posts,
};
