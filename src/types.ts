export enum Stage {
  Entrance,
  Menu,
  Resume,
  Connect,
  About,
}

export interface IExperience {
  title: string;
  details: React.ReactNode;
  organization: {
    name: string;
    websiteUrl: string;
    logo:
      | string
      | React.FunctionComponent<
          React.SVGProps<SVGSVGElement> & {
            title?: string;
          }
        >;
  };
  startDate?: string;
  endDate: string;
}
