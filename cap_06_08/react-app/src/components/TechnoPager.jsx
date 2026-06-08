const skills = [
  { tech: "Java", level: "Advanced", years: 1 },
  { tech: "React", level: "Intermediate", years: 3 },
  { tech: "Node.js", level: "Intermediate", years: 3 },
  { tech: "MongoDB", level: "Intermediate", years: 3 },
];

const TechnoPager = () => {
  return (
    <main className="max-w-[1000px] mx-auto my-3 p-3 rounded-xl shadow-sm font-roboto text-[#5f6b7a]">
      <header className="flex mb-3">
        <div className="flex gap-4 w-full p-3 rounded-sm bg-gradient-to-br from-[#003F61] to-[#0075B3] [clip-path:polygon(0%_0%,100%_0%,85%_100%,0%_100%)] text-white">
          <img
            className="w-[100px] h-[100px] rounded-full mb-2.5"
            src="/images/profile.png"
            alt="Profile"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-medium">Surojit Ghosh</h1>
            <h3 className="text-lg font-normal my-1">Software Engineer</h3>
            <h5 className="flex items-center gap-2 mb-0 text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Kolkata, India
            </h5>
            <a className="no-underline text-inherit" href="mailto:surojitghosh2003@gmail.com">
              <h5 className="flex items-center gap-2 mb-0 text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                surojitghosh2003@gmail.com
              </h5>
            </a>
            <a className="no-underline text-inherit" href="tel:+917063851617">
              <h5 className="flex items-center gap-2 mb-0 text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                +91 7063851617
              </h5>
            </a>
          </div>
        </div>

        <div className="w-full p-3 flex flex-col gap-4">
          <img className="w-[100px] h-auto block self-end" src="/images/iem.png" alt="IEM" />
          <h4 className="text-right mb-0 font-normal text-[#5f6b7a]">
            Software Engineer experienced in Java, React, Spring Boot, and
            microservices. Skilled in developing scalable applications and
            collaborating with cross-functional teams to deliver high-quality
            software solutions.
          </h4>
        </div>
      </header>

      <div className="flex gap-3">
        <div className="w-[425px] bg-[#f0f4f8] p-3 rounded-lg">
          <h3 className="font-medium text-[#0075B3]">Education</h3>
          <ul className="bg-white rounded-sm mb-0 mt-2 p-3 list-inside">
            <li className="py-1">B.Sc. in Computer Science</li>
            <li className="py-1">MCA (Master of Computer Applications)</li>
          </ul>
        </div>

        <div className="p-3 flex-1">
          <div className="mb-4">
            <h3 className="font-medium text-[#0075B3]">Key Projects</h3>
            <div className="bg-[#f0f4f8] p-3 rounded-lg flex flex-col gap-8 mt-3">
              <div>
                <h4 className="font-medium text-[#0075B3]">Discord Ticket Tool Dashboard</h4>
                <ul className="mt-2 mb-0 list-inside">
                  <li>Built ticket, role, and permission management with analytics for moderation.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[#0075B3]">Uniclip - Video Downloader & Trimmer</h4>
                <ul className="mt-2 mb-0 list-inside">
                  <li>Created a web app for downloading and trimming YouTube videos with timestamps.</li>
                </ul>
              </div>
            </div>
          </div>

          <table className="w-full border-separate border-spacing-y-1 mt-8 text-center align-middle">
            <thead>
              <tr>
                <th className="px-3 py-2 bg-[#e6f5fb] text-[#0075B3] font-semibold whitespace-nowrap rounded-s-[100px]">Technology</th>
                <th className="px-3 py-2 bg-[#e6f5fb] text-[#0075B3] font-semibold whitespace-nowrap">Experience Level</th>
                <th className="px-3 py-2 bg-[#e6f5fb] text-[#0075B3] font-semibold whitespace-nowrap rounded-e-[100px]">Years of Experience</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((s) => (
                <tr key={s.tech}>
                  <td className="px-3 py-2 bg-[#f0f4f8] text-[#5f6b7a] rounded-s-[100px]">{s.tech}</td>
                  <td className="px-3 py-2 bg-[#f0f4f8] text-[#5f6b7a]">{s.level}</td>
                  <td className="px-3 py-2 bg-[#f0f4f8] text-[#5f6b7a] rounded-e-[100px]">{s.years}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default TechnoPager;
