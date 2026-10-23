import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { aboutContent } from "@/lib/content/about";
import { projects } from "@/lib/content/projects";
import { projectDetail, projectsSection } from "@/lib/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { TechLabel } from "@/components/ui/TechLabel";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export const instant = false;

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} | ${projectDetail.metaTitle}`,
    description: project.shortDescription,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      type: "article",
      url: `/projects/${project.id}`,
      title: `${project.title} | ${aboutContent.name}`,
      description: project.shortDescription,
      ...(project.gallery?.[0] && { images: [{ url: project.gallery[0].src.src, alt: project.gallery[0].alt }] }),
    },
  };
}

// "Label: detail" strings become a bold label plus body text.
function splitFeature(feature: string) {
  const i = feature.indexOf(":");
  if (i < 0) return { label: "", body: feature };
  const body = feature.slice(i + 1).trim();
  return { label: feature.slice(0, i), body: body.charAt(0).toUpperCase() + body.slice(1) };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const index = projects.findIndex((p) => p.id === id);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const [cover, ...shots] = project.gallery ?? [];
  const external = { target: "_blank", rel: "noopener noreferrer" } as const;

  return (
    <>
      <Header />
      <main id="main">
        <article id="top">
          <Container className="pb-16 pt-32 md:pb-20 md:pt-40">
            <Reveal onLoad y={12}>
              <Link
                href={projectDetail.back.href}
                className="group inline-flex items-center gap-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                <Icon name="arrowUp" className="size-4 -rotate-90 transition-transform duration-300 group-hover:-translate-x-1" />
                {projectDetail.back.label}
              </Link>
              <p className="mt-10 flex flex-wrap items-center gap-3 text-sm font-medium">
                <span className="rounded-full border border-contour px-3 py-1">{projectsSection.typeLabels[project.category]}</span>
                <span className="text-graphite">{project.role}</span>
              </p>
            </Reveal>
            <h1 className="mt-6 max-w-[18ch] text-[clamp(2.75rem,6.5vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
              <RevealText onLoad delay={0.1} stagger={0.015} text={project.title} />
            </h1>
            <Reveal onLoad delay={0.4} className="mt-8 grid grid-cols-12 items-end gap-x-6 gap-y-8">
              <p className="col-span-12 max-w-[46ch] text-lead md:col-span-7">{project.shortDescription}</p>
              <div className="col-span-12 flex flex-wrap gap-3 md:col-span-5 md:justify-end">
                {project.liveUrl && <Button href={project.liveUrl} {...external}>{projectsSection.liveLabel}</Button>}
                {project.githubUrl && (
                  <Button href={project.githubUrl} variant="secondary" icon="github" {...external}>{projectsSection.codeLabel}</Button>
                )}
              </div>
            </Reveal>
          </Container>

          {cover && (
            <Container>
              <Reveal onLoad delay={0.55} y={40}>
                <div className="overflow-hidden rounded-card border border-contour bg-fog">
                  <Image src={cover.src} alt={cover.alt} preload placeholder="blur" sizes="(min-width: 1440px) 1330px, 95vw" className="h-auto w-full" />
                </div>
              </Reveal>
            </Container>
          )}

          <Container className="grid grid-cols-12 gap-x-6 gap-y-14 py-24 md:py-32 lg:gap-x-10">
            <aside className="col-span-12 lg:col-span-4">
              <dl className="space-y-8 lg:sticky lg:top-28">
                <div className="border-t border-contour pt-5">
                  <dt className="text-sm text-graphite">{projectDetail.roleLabel}</dt>
                  <dd className="mt-2 font-semibold">{project.role}</dd>
                </div>
                <div className="border-t border-contour pt-5">
                  <dt className="text-sm text-graphite">{projectDetail.stackLabel}</dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                      <span key={t} className="inline-flex items-center rounded-full border border-contour bg-paper px-3.5 py-2 text-sm transition-[background-color,color,border-color,translate] duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-chalk">
                        <TechLabel name={t} />
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>

            <section className="col-span-12 lg:col-span-8" aria-labelledby="features-title">
              <h2 id="features-title" className="text-h2-sans">{projectDetail.featuresTitle}</h2>
              <ol className="mt-12">
                {project.keyFeatures.map((f, i) => {
                  const { label, body } = splitFeature(f);
                  return (
                    <li key={f} className="group grid grid-cols-12 gap-x-6 border-t border-contour py-7 transition-colors duration-300 last:border-b hover:border-ink">
                      <span className="col-span-2 font-serif text-3xl leading-none text-graphite transition-colors duration-300 group-hover:text-ink md:col-span-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="col-span-10 md:col-span-11">
                        {label && <h3 className="text-xl font-bold tracking-tight">{label}</h3>}
                        <p className="mt-2 max-w-[60ch] text-graphite">{body}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>
          </Container>

          {shots.length > 0 && (
            <section aria-labelledby="gallery-title" className="pb-24 md:pb-32">
              <Container>
                <h2 id="gallery-title" className="mb-12 text-h2-sans">{projectDetail.galleryTitle}</h2>
                <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
                  {shots.map((shot, i) => (
                    <Reveal key={shot.alt} delay={(i % 2) * 0.1} className={i === 0 && shots.length % 2 === 1 ? "md:col-span-2" : undefined}>
                      <figure className="group">
                        <div className="overflow-hidden rounded-card border border-contour bg-fog">
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            placeholder="blur"
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="h-auto w-full transition-transform duration-700 ease-snap group-hover:scale-[1.02]"
                          />
                        </div>
                        <figcaption className="mt-3 text-sm text-graphite">{shot.alt}</figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </Container>
            </section>
          )}

          <Container className="pb-24 md:pb-32">
            <Link
              href={`/projects/${next.id}`}
              className="group relative isolate -mx-4 flex items-end justify-between gap-6 overflow-hidden rounded-card border-t border-contour px-4 py-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:-mx-8 md:px-8 md:py-14"
            >
              <span aria-hidden="true" className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-snap group-hover:scale-y-100" />
              <span className="transition-colors duration-500 group-hover:text-chalk">
                <span className="block text-sm font-medium opacity-70">{projectDetail.nextLabel}</span>
                <span className="mt-2 block text-h2-sans">{next.title}</span>
              </span>
              <span className="grid size-14 shrink-0 place-items-center rounded-full border-[1.5px] border-ink transition-[background-color,border-color,rotate] duration-500 ease-snap group-hover:rotate-45 group-hover:border-volt group-hover:bg-volt">
                <Icon name="arrowUpRight" />
              </span>
            </Link>
          </Container>
        </article>
      </main>
      <Footer />
    </>
  );
}
