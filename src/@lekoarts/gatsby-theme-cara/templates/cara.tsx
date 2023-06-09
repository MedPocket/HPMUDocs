import * as React from "react";
import type { HeadFC } from "gatsby";
import { Parallax } from "@react-spring/parallax";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero";
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects";
import About from "@lekoarts/gatsby-theme-cara/src/components/about";
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact";
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo";

const Cara = () => (
  <Layout>
    <Parallax pages={8}>
      <Hero offset={0} factor={1} />
      <Projects offset={2} factor={4} />
      <About offset={6} factor={1} />
      <Contact offset={7} factor={1} />
    </Parallax>
  </Layout>
);

export default Cara;

export const Head: HeadFC = () => <Seo />;
