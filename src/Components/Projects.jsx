import React from "react";
import classes from '../styles/Projects.module.css';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text } from '@mantine/core';
import gameRator from "../../public/GameRator.png";

const spotlightProjects = {
  GameRator: {
    title: "GameRator",
    desc: "A video-game rating website like MetaCritic",
    techStack: "React, JavaScript, PostgreSQL, Sequelize, express.js, node.js ",
    link: "https://github.com/LeonardoGalan/GameratorFrontEnd",
    open: "https://gamerator.onrender.com/",
    image: gameRator,
  },
  Inventory_Management: {
    title: "Inventory Management",
    desc: "A simple inventory management system to add, delete, and update items",
    techStack: "React, Javascript, Next.js, Material-UI, Firebase",
    link: "https://github.com/LeonardoGalan/pantry_app",
    open: "https://pantry-app-lake.vercel.app/",
    image: gameRator,
  },
  AI_Customer_Support: {
    title: "AI Customer Support",
    desc: "An AI-driven customer support chatbot",
    techStack: "React, JavaScript, Next.js, OpenAI, Vercel",
    link: "https://github.com/LeonardoGalan/ai-customer-support",
    open: "https://ai-customer-support-eosin-two.vercel.app/",
    image: gameRator,
  },
};

function Card({ title, desc, techStack, link, open, image }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.desc} size="xs">
          {desc}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

export default function Projects() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = Object.values(spotlightProjects).map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">Personal Projects</span>
      </div>
      <Carousel
        slideSize="100%"
        //   slideGap={{ base: 'xl', sm: 1}}
        align="start"
        slidesToScroll={mobile ? 1 : 1}
        loop
      >
        {slides}
      </Carousel>
    </div>
  );
}