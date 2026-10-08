
import annImg from "../assets/ann.png";
import myyyyfinalpicImg from "../assets/myyyyfinalpic.png";
import sushImg from "../assets/sush.png";
const founders = [
  {
    name: "Sanya Chauhan",
    role: "B.Tech CSE Full Stack Developer",
    bio: "Specializing in robust MERN & Next.js full-stack development, database architecture, and secure authentication systems.",
    image: myyyyfinalpicImg,
  },
  {
    name: "Abhisek Kumar",
    role: "B.Tech CSE Full Stack Developer",
    bio: "Expert in scalable backend routing, API integration, and high-performance frontend interfaces.",
    image: annImg,
  },
  {
    name: "Sushant Kumar",
    role: "Sales Specialist",
    bio: "Driving client acquisition, strategic partnerships, and business growth for high-impact tech ventures.",
    image: sushImg
  },
];

export default function Founders() {
  return (
    <div className="min-h-screen bg-black text-white px-6 pt-32 pb-20 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <p className="text-xs uppercase tracking-[0.35em] text-neutral-400 mb-4">Leadership</p>
      <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-16">
        The Minds Behind Mongonex
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {founders.map((founder, index) => (
          <div key={index} className="group border border-neutral-800 bg-neutral-950 overflow-hidden">
            <div className="h-80 overflow-hidden">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-2">{founder.role}</p>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-3">{founder.name}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{founder.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}