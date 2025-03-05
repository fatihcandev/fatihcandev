import {
  CiscoLogo,
  NinetyPixelLogo,
  DigieggsLogo,
  UludagLogo,
  KaunoKolegijaLogo,
  VetonLogo,
} from './assets/images';
import { IExperience } from './types';

export const experiences: IExperience[] = [
  {
    title: 'Senior Frontend Developer',
    organization: {
      name: 'veton.ai',
      logo: VetonLogo,
      websiteUrl: 'https://veton.ai/',
    },
    startDate: 'Nov 2024',
    endDate: 'Mar 2025',
    details: (
      <ul className="text-xs list-disc pl-3">
        <li>
          Serve as the first hire Frontend Developer responsible for developing and
          scaling the product, establishing best practices, and ensuring code
          quality for a seamless user experience.
        </li>
        <li>
          Architect a scalable and maintainable frontend codebase with a focus
          on reusable component libraries, utilizing tools such as React,
          TypeScript.
        </li>
        <li>
          Collaborate closely with founders, designers, and backend developers
          to align technical implementations with business goals and enhance the
          overall product vision.
        </li>
        <li>
          Set up and maintain continuous integration and deployment pipelines
          (CI/CD) to streamline development, improve code reliability, and
          facilitate efficient releases.
        </li>
        <li>
          Build a development roadmap, prioritizing feature development and
          technical debt management to achieve project milestones effectively.
        </li>
        <li>
          Collect and analyze user feedback using tracking tools, iteratively
          improving the product based on data-driven insights to optimize user
          engagement and satisfaction.
        </li>
        <li>
          Document the codebase, technical architecture, and onboarding guides,
          ensuring scalability and ease of knowledge transfer for potential
          future team members.
        </li>
        <li>
          Proactively plan for future growth, identifying potential bottlenecks
          and implementing architecture decisions that support product evolution
          and scalability.
        </li>
      </ul>
    ),
  },
  {
    title: 'Senior Software Engineer',
    organization: {
      name: 'Cisco',
      logo: CiscoLogo,
      websiteUrl: 'https://cisco.com/',
    },
    startDate: 'Feb 2022',
    endDate: 'Oct 2024',
    details: (
      <ul className="text-xs list-disc pl-3">
        <li>
          Developed responsive and dynamic web pages for Webex Events, a SaaS
          platform enabling interactive virtual, hybrid, and in-person events.
          Leveraged React, CSS-in-JS, and Apollo GraphQL to enhance user
          experience and satisfaction, contributing to the platform's
          scalability and adaptability across diverse event types.
        </li>
        <li>
          Integrated GraphQL APIs to enable efficient and flexible data
          fetching, enhancing application performance and user experience.
        </li>
        <li>
          Implemented reusable UI components with @mui/material and
          styled-components ensuring design consistency and scalability across
          the platform.
        </li>
        <li>
          Collaborated with product managers, designers, and back-end developers
          to deliver features that align with project goals and timelines.
        </li>
        <li>
          Focused on optimizing web performance and accessibility, ensuring a
          seamless experience across different devices and browsers.
        </li>
        <li>
          Conducted code reviews and participated in agile development
          processes, contributing to continuous improvements in code quality and
          team collaboration.
        </li>
      </ul>
    ),
  },
  {
    title: 'Frontend Developer',
    organization: {
      name: '90Pixel',
      logo: NinetyPixelLogo,
      websiteUrl: 'https://90pixel.com/',
    },
    startDate: 'Mar 2021',
    endDate: 'Jan 2022',
    details: (
      <ul className="text-xs list-disc pl-3">
        <li>
          Developed and maintained web applications for various outsourced
          projects using React, Next.js, and TypeScript.
        </li>
        <li>
          Implemented responsive and dynamic UI components with
          styled-components and SCSS, ensuring high-quality design and
          performance.
        </li>
        <li>
          Integrated REST APIs to create seamless and scalable user experiences,
          optimizing application functionality.
        </li>
        <li>
          Collaborated with cross-functional teams to deliver projects on time
          while adhering to industry best practices and coding standards.
        </li>
        <li>
          Focused on writing clean, reusable, and maintainable code to support
          long-term project scalability.
        </li>
      </ul>
    ),
  },
  {
    title: 'Frontend Developer',
    organization: {
      name: 'DIGIEGGS',
      logo: DigieggsLogo,
      websiteUrl: 'https://digieggs.com/',
    },
    startDate: 'Jul 2020',
    endDate: 'Feb 2021',
    details: (
      <ul className="text-xs list-disc pl-3">
        <li>
          Developed and maintained web applications for various outsourced
          projects using React and TypeScript.
        </li>
        <li>
          Implemented responsive and dynamic UI components with
          styled-components and SCSS, ensuring high-quality design and
          performance.
        </li>
        <li>
          Integrated GraphQL APIs to enable efficient and flexible data
          fetching, enhancing application performance and user experience.
        </li>
        <li>
          Collaborated with cross-functional teams to deliver projects on time
          while adhering to industry best practices and coding standards.
        </li>
        <li>
          Focused on writing clean, reusable, and maintainable code to support
          long-term project scalability.
        </li>
      </ul>
    ),
  },
];

export const educations: IExperience[] = [
  {
    title: 'Computer Education and Instructional Technology',
    organization: {
      name: 'Uludag University',
      logo: UludagLogo,
      websiteUrl: 'https://uludag.edu.tr',
    },
    endDate: '2020',
    details: (
      <p className="text-xs">
        Gained practical knowledge in leveraging instructional technologies and
        diverse teaching methods to effectively instruct students in software.
      </p>
    ),
  },
  {
    title: 'Technologies of Information Systems',
    organization: {
      name: 'Kauno Kolegija',
      logo: KaunoKolegijaLogo,
      websiteUrl: 'https://alytauskolegija.lt',
    },
    endDate: '2017',
    details: (
      <p className="text-xs">
        Participated in the Erasmus program, spending a semester in Alytus,
        Lithuania. This experience strengthened my independence, problem-solving
        abilities, and adaptability, while significantly enhancing my social and
        intercultural communication skills.
      </p>
    ),
  },
];
