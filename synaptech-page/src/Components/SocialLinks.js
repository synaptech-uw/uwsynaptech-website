import React from "react";
import "../styles/Styles.css";

export const DISCORD_URL = "https://discord.gg/CwtEv37";
export const INSTAGRAM_URL = "https://www.instagram.com/uwsynaptech/";
export const LINKEDIN_URL = "https://www.linkedin.com/company/synaptechuw/";

// Logos are from iconmonstr.com; license allows use without attribution.
const LINKS = [
  { href: DISCORD_URL, label: "Discord", logo: "/assets/socialMediaLogos/discord_logo.png" },
  { href: INSTAGRAM_URL, label: "Instagram", logo: "/assets/socialMediaLogos/instagram_logo.png" },
  { href: LINKEDIN_URL, label: "LinkedIn", logo: "/assets/socialMediaLogos/linkedin-logo.png" },
];

function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Synaptech social media">
      {LINKS.map((l) => (
        <a key={l.label} className="social-link" href={l.href} target="_blank" rel="noreferrer">
          <img className="social-logo" src={l.logo} alt="" />
          <span>{l.label}</span>
        </a>
      ))}
    </nav>
  );
}

export default SocialLinks;
