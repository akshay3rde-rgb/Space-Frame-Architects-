import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import SelectedProjects from "@/components/home/SelectedProjects";
import StatsSection from "@/components/home/StatsSection";
import CitiesSection from "@/components/home/CitiesSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import BlogPreview from "@/components/home/BlogPreview";
import { projects } from "@/data/projects";
import { cities } from "@/data/cities";
import { philosophy } from "@/data/philosophy";
import { articles } from "@/data/blog";
import { stats } from "@/data/stats";
import { exteriors } from "@/data/images";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const latestArticles = [...articles]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 3);

  return (
    <>
      <Hero image={exteriors[4]} />
      <Intro />
      <SelectedProjects projects={featured} />
      <StatsSection stats={stats} />
      <CitiesSection cities={cities} />
      <PhilosophySection pillars={philosophy} />
      <BlogPreview articles={latestArticles} />
    </>
  );
}
