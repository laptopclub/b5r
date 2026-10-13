import { EnquiryForm } from "../components/enquiry-form";

export default function HomePage() {
  return (
    <div className="landing">
      <header>
        <p>Independent work by Dan Brazier.</p>
      </header>

      <section aria-labelledby="enquiry-heading">
        <h1 id="enquiry-heading">Enquiry</h1>
        <p>Tell me a little about what you have in mind.</p>
        <EnquiryForm />
      </section>
    </div>
  );
}
