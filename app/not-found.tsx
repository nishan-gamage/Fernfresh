import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-sand/60 pb-28 pt-44">
      <Container className="max-w-2xl text-center">
        <Eyebrow>404</Eyebrow>
        <h1 className="font-display text-5xl tracking-tight text-fern-900 sm:text-6xl">
          This page has been swept away.
        </h1>
        <p className="mt-6 text-lg text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-10 flex justify-center gap-3">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/book" variant="outline">
            Get a quote
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
