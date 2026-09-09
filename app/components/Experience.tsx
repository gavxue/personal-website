export default function Experience() {
  const roles = [
    {
      title: "Software Engineering Intern",
      company: "Shopify",
      date: "May 2026 - Aug 2026",
    },
    {
      title: "Software Engineering Intern",
      company: "Shopify",
      date: "Sep 2025 - Dec 2025",
    },
    {
      title: "Software Developer",
      company: "UW Blueprint",
      date: "May 2025 - Present",
    },
    {
      title: "Software Developer Intern",
      company: "Environment and Climate Change Canada",
      date: "Jan 2025 - Apr 2025",
    },
    {
      title: "Software Developer",
      company: "Develop for Good",
      date: "Oct 2024 - Feb 2025",
    },
  ];

  return (
    <section className="text-center my-20" data-aos="fade-up">
      <h2 className="text-4xl font-bold">Experience</h2>
      {roles.map((role) => (
        <div className="hvr-grow" key={`${role.company}-${role.date}`}>
          <div
            className="flex flex-col md:flex-row justify-between text-left my-5"
            data-aos="fade-up"
          >
            <div className="">
              <p className="font-bold">{role.title}</p>
              <p>{role.company}</p>
            </div>
            <div className="my-auto">
              <p>{role.date}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
