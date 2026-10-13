import { EnquiryForm } from "../components/enquiry-form";

export default function HomePage() {
  return (
    <div className="mx-auto w-[calc(100%_-_2rem)] max-w-[42rem] py-8 pb-16 max-[40rem]:w-[calc(100%_-_1.5rem)] max-[40rem]:pt-6">
      <section aria-labelledby="enquiry-heading" className="border-t border-ui-strong py-4 pb-8">
        <h1 className="m-0 text-base font-bold leading-6" id="enquiry-heading">Enquiry</h1>
        <p className="m-0 mt-4 text-base leading-6">Tell me a little about what you have in mind.</p>
        <EnquiryForm />
      </section>
    </div>
  );
}
