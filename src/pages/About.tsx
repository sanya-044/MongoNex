
export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 pt-32 pb-20 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <p className="text-xs uppercase tracking-[0.35em] text-neutral-400 mb-4">About Mongonex</p>
      <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-8">
        We engineer digital realities.
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="space-y-6 text-neutral-300 text-sm leading-relaxed">
          <p>
            Founded with a vision to redefine digital interactions, <strong>Mongonex</strong> is a premier web development agency specializing in cutting-edge full-stack solutions, custom web applications, mobile platforms, and high-end UI/UX design.
          </p>
          <p>
            We bridge the gap between complex backend architecture and breathtaking frontend design. Whether you are a fast-growing startup or an enterprise scaling up your tech infrastructure, our team delivers robust, secure, and lightning-fast solutions tailored to your unique requirements.
          </p>
        </div>
        <div className="border border-neutral-800 p-8 rounded-none bg-neutral-950 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Our Core Expertise</h3>
            <ul className="space-y-3 text-xs uppercase tracking-widest text-neutral-400">
              <li className="border-b border-neutral-900 pb-2">01. Full-Stack MERN & Next.js Architecture</li>
              <li className="border-b border-neutral-900 pb-2">02. Real-Time Chat & Socket.IO Systems</li>
              <li className="border-b border-neutral-900 pb-2">03. Secure Payment & Auth Gateways</li>
              <li className="border-b border-neutral-900 pb-2">04. Custom UI/UX & High-Performance UI</li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-900 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Mongonex Agency © 2026
          </div>
        </div>
      </div>
    </div>
  );
}
