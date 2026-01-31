"use client";

interface EnquiryFormProps {
  title?: string;
  buttonText?: string;
}

export function EnquiryForm({
  title = "Submit Application",
  buttonText = "Enquire Now"
}: EnquiryFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Enquiry form submitted');
    alert('Thank you for your enquiry! We will get back to you soon.');
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <h3 className="text-xl font-semibold text-white mb-4">
        {title}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#2b9f9a]"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#2b9f9a]"
            placeholder="Tell us about your project..."
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-gradient-to-r from-[#d5f5f1] via-[#8ddbd4] to-[#2b9f9a] px-5 py-3 text-sm font-semibold text-black shadow-[0_14px_40px_rgba(34,119,116,0.35)] transition hover:shadow-[0_22px_55px_rgba(34,119,116,0.4)] cursor-pointer"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

