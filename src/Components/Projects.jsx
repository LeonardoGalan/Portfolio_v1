import React from "react";
import classes from '../styles/Projects.module.css';
import "../styles/Projects.css";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Button, Paper, Title, useMantineTheme, Text } from "@mantine/core";
import inventory from "../assets/Inventory_Management.gif";
import gameRator from "../assets/Gamerator-vid.mp4";
import ai_chat from "../assets/Chat-support-vid.mp4";

const spotlightProjects = {
  GameRator: {
    title: "GameRator",
    desc: "A video-game rating website like MetaCritic",
    techStack: "React, JavaScript, PostgreSQL, Sequelize, express.js, node.js ",
    open: "https://gamerator.onrender.com/",
    image: gameRator,
  },
  AI_Customer_Support: {
    title: "AI Customer Support",
    desc: "An AI-driven customer support chatbot",
    techStack: "React, JavaScript, Next.js, OpenAI, Vercel",
    open: "https://ai-customer-support-eosin-two.vercel.app/",
    image: ai_chat,
  },
  Inventory_Management: {
    title: "Inventory Management",
    desc: "A simple inventory database management system to add, delete, and update items",
    techStack: "React, Javascript, Next.js, Material-UI, Firebase",
    open: "https://pantry-app-lake.vercel.app/",
    image: inventory,
  },
};

function Card({ title, desc, techStack, open, image, isFirst }) {
  const isVideo = image.endsWith(".mp4");

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        background: "transparent", // Remove background color
      }}
      className={classes.card}
    >
      {isVideo ? (
        <video autoPlay loop muted className={classes.backgroundVideo}>
          <source src={image} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={classes.backgroundImage}
        />
      )}
      <div
        className={classes.content}
        style={{
          position: "absolute",
          zIndex: 1,
          bottom: "10%",
          left: "5%",
        }}
      >
        <Text
          className={classes.desc}
          size="md"
          style={{
            color: isFirst ? "#ffffff" : "",
          }}
        >
          {desc}
        </Text>
        <Text
          className={classes.techStack}
          size="sm"
          style={{
            color: isFirst ? "white" : "",
          }}
        >
          {techStack}
        </Text>
        <Title
          order={3}
          className={classes.title}
          style={{
            color: isFirst ? "gold" : "",
          }}
        >
          {title}
        </Title>
      </div>
      <Button
        variant={"filled"}
        color={"blue"}
        onClick={() => {
          open && window.open(open, "_blank");
        }}
      >
        Demo
      </Button>
    </Paper>
  );
}

export default function Projects() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = Object.values(spotlightProjects).map((item, index) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} isFirst={index === 0} />
    </Carousel.Slide>
  ));

  return (
    <div id="projects">
      <div className="section-header" style={{ paddingBottom: "20px" }}>
        <span className="section-title">Personal Projects</span>
      </div>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Carousel
          slideSize="100%"
          align="start"
          slidesToScroll={mobile ? 1 : 1}
          loop
          withIndicators
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
}