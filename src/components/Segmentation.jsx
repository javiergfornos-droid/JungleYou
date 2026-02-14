import { User, Building2, Building } from 'lucide-react';

const MAP_TOOL_URL = '/index.html'; // The existing Map/Calculator tool

const roles = [
  {
    id: 'individual',
    name: 'The Pioneer',
    phrase: 'I wish to Jungle my space',
    description: 'You own a home or space and want to transform your roof into a green oasis.',
    Icon: User,
    userType: 'individual',
  },
  {
    id: 'company',
    name: 'The Sponsor',
    phrase: 'I wish to finance a Jungle',
    description: 'Your company wants to invest in green infrastructure and ESG impact.',
    Icon: Building2,
    userType: 'company',
  },
  {
    id: 'host',
    name: 'The Host',
    phrase: 'I wish to host a Jungle',
    description: 'You have a building with available rooftop space to offer for greening.',
    Icon: Building,
    userType: 'host',
  },
];

export default function Segmentation() {
  const handleClick = (userType) => {
    window.location.href = `${MAP_TOOL_URL}?userType=${userType}`;
  };

  return (
    <section id="join" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <p className="text-fern text-sm font-semibold tracking-[0.2em] uppercase text-center">
          Get Involved
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-black text-center tracking-tight">
          Choose Your Role
        </h2>
        <p className="mt-4 text-body text-center max-w-xl mx-auto">
          Everyone can be part of the jungle revolution. Pick the path that fits you best.
        </p>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => handleClick(role.userType)}
              className="group relative flex flex-col items-center text-center p-10 rounded-2xl border-2 border-gray-100 bg-white hover:border-fern hover:shadow-2xl hover:shadow-fern/10 transition-all duration-300 cursor-pointer"
            >
              {/* Icon circle */}
              <div className="w-20 h-20 rounded-full bg-beige flex items-center justify-center mb-6 group-hover:bg-fern/10 transition-colors duration-300">
                <role.Icon
                  size={36}
                  strokeWidth={1.5}
                  className="text-fern"
                />
              </div>

              {/* Role name */}
              <h3 className="text-xl font-bold text-black">{role.name}</h3>

              {/* Description */}
              <p className="mt-2 text-sm text-body leading-relaxed">
                {role.description}
              </p>

              {/* Action phrase */}
              <p className="mt-6 text-fern font-semibold text-sm group-hover:underline">
                {role.phrase} &rarr;
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
