import { EnquiryForm } from "../components/enquiry-form";

export default function HomePage() {
  return (
    <div className="landing">
      <header>
        <p>Independent work by Dan Brazier.</p>
      </header>

      <section aria-labelledby="links-heading">
        <h1 id="links-heading">Elsewhere</h1>
        <nav aria-label="Social links">
          <a href="https://github.com/danb5r" rel="me noreferrer" target="_blank">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </section>

      <section aria-labelledby="enquiry-heading">
        <h2 id="enquiry-heading">Enquiry</h2>
        <p>Tell me a little about what you have in mind.</p>
        <EnquiryForm />
      </section>
    </div>
  );
}
