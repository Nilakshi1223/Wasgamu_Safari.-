import React from "react";
import PageBanner from "../components/PageBanner";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import aboutImg from "../assets/safari2.webp"; // banner-about.jpg

const About = () => {
  return (
    <>
      <PageBanner
        title="About Wasgamu Safari"
        subtitle="Discover our journey through the wilderness"
        backgroundImage={aboutImg}
      />

      <Container maxWidth="md" sx={{ mt: 6, mb: 8 }}>
        <Typography variant="body1" color="text.secondary" fontSize="1.125rem" lineHeight={1.6}>
          Wasgamu Safari is a family-owned wildlife experience provider based in Sri Lanka. With over 10 years of guiding tourists through the rich biodiversity of Wasgamuwa National Park, we offer safe, sustainable, and immersive safari tours led by local experts.
        </Typography>
      </Container>
    </>
  );
};

export default About;
