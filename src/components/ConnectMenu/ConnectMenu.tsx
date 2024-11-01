import { Close } from '@/assets/icons';
import { useAudio } from '@/hooks';
import { Button } from '../Button';
import SocialLink from '../SocialLink/SocialLink';
import menuOpeningSoundSrc from '../../assets/audio/menu-opening.mp3';

const ConnectMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const menuOpeningSound = useAudio(menuOpeningSoundSrc, {
    volume: 0.5,
    playbackRate: 2,
  });

  return (
    <div className="flex gap-2 items-center letsConnectMenu">
      <SocialLink
        href="https://linkedin.com/in/fatihcandev"
        title="Linkedin"
        autoFocus={isOpen}
      />
      <SocialLink href="https://www.github.com/fatihcandev" title="GitHub" />
      <Button
        customClickSound={menuOpeningSound}
        className="min-w-fit"
        onClick={onClose}
        aria-label="Hide the menu"
      >
        <Close width={20} height={20} className="flex-shrink-0" />
      </Button>
    </div>
  );
};

export default ConnectMenu;
