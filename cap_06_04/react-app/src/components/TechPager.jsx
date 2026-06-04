import React from "react";

const TechPager = ({
  name,
  email,
  location,
  number,
  college,
  tagLine,
  workedOnProject,
  projectDetails = [],
  skills = [],
}) => {
  const contactInfo = [
    { label: "Email", value: email },
    { label: "Phone", value: number },
    { label: "Location", value: location },
    { label: "Education", value: college },
  ].filter(item => item.value);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 antialiased flex items-center justify-center p-6 sm:p-12 selection:bg-neutral-200 font-body">
      <div className="w-full max-w-xl border-l border-neutral-200 pl-6 sm:pl-10 py-1 space-y-12">
        
        <header className="space-y-2">
          <h1 className="text-3xl font-medium tracking-tight text-neutral-900 font-heading leading-tight">
            {name}
          </h1>
          {tagLine && (
            <p className="text-[11px] font-normal tracking-widest uppercase text-neutral-400 italic">
              &ldquo;{tagLine}&rdquo;
            </p>
          )}
        </header>

        {contactInfo.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {contactInfo.map((item) => (
              <div className="flex flex-col space-y-1" key={item.label}>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 leading-none">
                  {item.label}
                </span>
                <span className="text-sm font-normal text-neutral-600 leading-relaxed break-words">
                  {item.value}
                </span>
              </div>
            ))}
          </section>
        )}

        {workedOnProject && projectDetails.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-neutral-100">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 leading-none">
              Featured Projects
            </h2>

            <div className="space-y-6">
              {projectDetails.map((project) => (
                <div key={project.projectName} className="flex flex-col space-y-1.5 group cursor-default">
                  <h3 className="text-sm font-medium text-neutral-900 tracking-tight font-heading group-hover:text-neutral-900 transition-colors">
                    {project.projectName}
                  </h3>
                  <p className="text-sm font-normal text-neutral-600 leading-relaxed break-words">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-neutral-100">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 leading-none">
              Skills & Expertise
            </h2>

            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-3 gap-4 pb-1 border-b border-neutral-200 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                <div>Technology</div>
                <div className="col-span-2">Proficiency</div>
              </div>

              <div className="divide-y divide-neutral-100">
                {skills.map((skill) => (
                  <div key={skill.technology} className="grid grid-cols-3 gap-4 py-3 align-top">
                    <div className="font-medium text-neutral-900 font-heading break-words">
                      {skill.technology}
                    </div>
                    <div className="col-span-2 font-normal text-neutral-600 leading-relaxed break-words">
                      {skill.level || skill.knowledge || skill.details}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default TechPager;