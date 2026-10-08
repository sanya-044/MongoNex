import { Mail, Globe, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    name: "Sanya Chauhan",
    role: "CO-FOUNDER & HEAD OF ENGINEERING",
    email: "sanyachauhan453@gmail.com",
    linkedin: "https://www.linkedin.com/in/sanya-chauhan-034899275",
  },
  {
    name: "Abhisek Kumar",
    role: "CO-FOUNDER & CTO",
    email: "as660342@gmail.com",
    linkedin: "https://www.linkedin.com/in/abhi6181",
  },
  {
    name: "Sushant Kumar",
    role: "Co-Founder & CEO",
    email: "singhsushant0804@gmail.com",
    linkedin: "https://www.linkedin.com/in/mongo-nex-572653441",
  },
];

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-28 sm:px-10 lg:px-16 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-400 mb-4">
          Get in Touch
        </p>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
          Connect With Our Team
        </h1>
        <p className="text-neutral-400 text-sm mt-4 max-w-xl leading-relaxed">
          Have a project in mind, looking to collaborate, or want to hire the Mongonex team? Reach out directly to our founders below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="group relative border border-neutral-800 bg-neutral-950 p-8 flex flex-col justify-between transition-all duration-300 hover:border-neutral-600"
          >
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-2">
                0{index + 1} // DIRECT CONTACT
              </span>
              <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-1">
                {contact.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-8">
                {contact.role}
              </p>

              <div className="space-y-4 text-xs">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors break-all"
                >
                  <div className="p-2 border border-neutral-800 bg-neutral-900 group-hover:border-neutral-700">
                    <Mail size={16} className="text-neutral-400" />
                  </div>
                  <span>{contact.email}</span>
                </a>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-neutral-900 flex items-center justify-between">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-neutral-300 hover:text-white transition-colors"
              >
                <Globe size={14} className="text-neutral-400" />
                <span>LinkedIn Profile</span>
              </a>
              <ArrowUpRight
                size={16}
                className="text-neutral-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}