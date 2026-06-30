import { lazy, Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

const Skills = lazy(() =>
  import("@/components/sections/Skills").then((m) => ({ default: m.Skills }))
);
const Experience = lazy(() =>
  import("@/components/sections/Experience").then((m) => ({ default: m.Experience }))
);
const Education = lazy(() =>
  import("@/components/sections/Education").then((m) => ({ default: m.Education }))
);
const ProjectGrid = lazy(() =>
  import("@/features/projects/ProjectGrid").then((m) => ({ default: m.ProjectGrid }))
);
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact }))
);

/** Minimal, non-jarring fallback — sections are below the fold and load fast. */
function SectionFallback() {
  return <div className="py-20 md:py-28" aria-hidden="true" />;
}

export function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Suspense fallback={<SectionFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Education />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProjectGrid />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </main>
  );
}
