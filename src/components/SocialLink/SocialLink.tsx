import { Button } from '../Button';

const SocialLink = ({
  autoFocus,
  href,
  title,
}: {
  autoFocus?: boolean;
  href: string;
  title: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    title={title}
    className="focus:outline-none"
    tabIndex={-1}
  >
    <Button className="min-w-fit" autoFocus={autoFocus}>
      {title}
    </Button>
  </a>
);

export default SocialLink;
