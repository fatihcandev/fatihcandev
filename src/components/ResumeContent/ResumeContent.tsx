import { Fragment } from 'react/jsx-runtime';
import { educations, experiences } from '@/constants';
import { Experience } from '../Experience';

const ResumeContent = () => (
  <>
    <p className="text-justify">
      Hello! I'm Fatih. I’m a frontend developer with over 4 years of experience
      building user-friendly, scalable web applications. My go-to tools are
      React and TypeScript, and I’m well-versed in integrating both GraphQL and
      REST APIs to ensure a seamless, responsive experience across all devices.
      I’ve led several frontend initiatives, focusing on crafting reusable
      components and boosting team collaboration through agile practices. With a
      strong eye for UI/UX, accessibility (WCAG), and performance optimization,
      I’m passionate about making the web both beautiful and accessible for
      everyone. Problem-solving and continuous improvement are at the heart of
      everything I do.
    </p>
    <h1 className="text-3xl font-bold">Experience</h1>
    {experiences.map((experience, index) => (
      <Fragment key={index}>
        <Experience {...experience} />
        {index < experiences.length - 1 && (
          <span className="border-t border-gray-400" />
        )}
      </Fragment>
    ))}
    <h1 className="text-3xl font-bold">Education</h1>
    {educations.map((education, index) => (
      <Fragment key={index}>
        <Experience {...education} />
        {index < educations.length - 1 && (
          <span className="border-t border-gray-400" />
        )}
      </Fragment>
    ))}
  </>
);

export default ResumeContent;
