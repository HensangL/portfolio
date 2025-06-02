import React from 'react';

function Experience() {
  const experiences = [
    {
      company: 'Self-Employed, NYC',
      period: 'Sep 2020 - July 2023',
      title: 'Visual Designer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      dotColor: 'bg-orange-600',
    },
    {
      company: 'Insightancer',
      period: 'Aug 2016 - Sep 2020',
      title: 'UI/UX Designer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      dotColor: 'bg-gray-800',
    },
    {
      company: 'KG Design Studio',
      period: 'Sep 2015 - Aug 2016',
      title: 'Web Designer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      dotColor: 'bg-orange-600',
    },
  ];

  return (
    <div className="mt-20 px-4 md:px-10">
      <h1 className="text-center text-4xl font-semibold font-serif mb-16">
        My Work Experience
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col space-y-12 relative">
        {/* Vertical Dotted Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 border-l-2 border-dotted border-gray-400 z-0"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10"
          >
            {/* Left: Company and Period */}
            <div className="w-full md:w-1/3 text-right pr-6">
              <h2 className="text-xl font-semibold">{exp.company}</h2>
              <p className="text-gray-600">{exp.period}</p>
            </div>

            {/* Center: Dot */}
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
              <div
                className={`w-6 h-6 rounded-full border-4 ${exp.dotColor} border-white z-10`}
              ></div>
            </div>

            {/* Right: Title and Description */}
            <div className="w-full md:w-1/3 pl-6">
              <h2 className="text-xl font-semibold">{exp.title}</h2>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
