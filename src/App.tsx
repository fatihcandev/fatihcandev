import { useRef, useState } from 'react';
import classNames from 'classnames';

import {
  Button,
  ConnectMenu,
  EntranceStage,
  GrowTransitionWrapper,
  ResumeContent,
  ThemeToggle,
} from './components';
import { Stage } from './types';
import { useAudio } from './hooks';
import entranceSoundSrc from './assets/audio/entrance.mp3';
import transitionSoundSrc from './assets/audio/transition.mp3';
import menuOpeningSoundSrc from './assets/audio/menu-opening.mp3';
import { ArrowLeft } from './assets/icons';

import './App.css';

function App() {
  const [stage, setStage] = useState(Stage.Entrance);
  const [showConnectMenu, setShowConnectMenu] = useState(false);
  const transitionSound = useAudio(transitionSoundSrc, {
    volume: 0.5,
  });
  const entranceSound = useAudio(entranceSoundSrc);
  const menuOpeningSound = useAudio(menuOpeningSoundSrc, {
    volume: 0.5,
    playbackRate: 2,
  });
  const linkedinButtonRef = useRef<HTMLButtonElement>(null);

  const handleEnterButton = () => {
    setStage(Stage.Menu);
    entranceSound.play();
  };

  const handleStageChange = (newStage: Stage) => {
    transitionSound.play();
    setStage(newStage);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 relative dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <ThemeToggle />
      {stage === Stage.Entrance && (
        <EntranceStage onEnter={handleEnterButton} />
      )}
      {stage === Stage.Menu && (
        <GrowTransitionWrapper>
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <div
              className={classNames({
                'opacity-25 pointer-events-none': showConnectMenu,
              })}
            >
              <Button
                className="fadeInAnimation"
                onClick={() => handleStageChange(Stage.Resume)}
                tabIndex={showConnectMenu ? -1 : 0}
                autoFocus
              >
                See my resume
              </Button>
            </div>
            <div
              className={classNames({
                'opacity-25 pointer-events-none': showConnectMenu,
              })}
            >
              <Button
                customClickSound={menuOpeningSound}
                className="fadeInAnimation"
                onClick={() => setShowConnectMenu(true)}
                tabIndex={showConnectMenu ? -1 : 0}
                ref={linkedinButtonRef}
              >
                Let's connect
              </Button>
            </div>
            {showConnectMenu && (
              <ConnectMenu
                isOpen={showConnectMenu}
                onClose={() => {
                  setShowConnectMenu(false);
                  linkedinButtonRef.current?.focus();
                }}
              />
            )}
            <div
              className={classNames({
                'opacity-25 pointer-events-none': showConnectMenu,
              })}
            >
              <a
                href="mailto:contact@fatihcan.dev"
                target="_blank"
                rel="noreferrer"
                className="focus:outline-none"
                tabIndex={-1}
              >
                <Button
                  className="fadeInAnimation"
                  tabIndex={showConnectMenu ? -1 : 0}
                >
                  Contact me
                </Button>
              </a>
            </div>
          </div>
        </GrowTransitionWrapper>
      )}
      {stage === Stage.Resume && (
        <GrowTransitionWrapper>
          <div className="flex flex-col p-4 gap-4 w-full lg:w-1/2 lg:mx-auto">
            <Button
              onClick={() => handleStageChange(Stage.Menu)}
              className="min-w-fit self-start"
              autoFocus
              aria-label="Go back to the menu"
            >
              <ArrowLeft width={16} height={16} className="flex-shrink-0" />
            </Button>
            <ResumeContent />
          </div>
        </GrowTransitionWrapper>
      )}
    </div>
  );
}

export default App;
