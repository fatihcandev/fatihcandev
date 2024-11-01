import { useState } from 'react';
import classNames from 'classnames';

import { Typewriter } from '../Typewriter';
import { Button } from '../Button';
import { CornerDownLeft } from '@/assets/icons';

const EntranceStage = ({ onEnter }: { onEnter: () => void }) => {
  const [showEnterButton, setShowEnterButton] = useState(false);
  const [renderTitle, setRenderTitle] = useState(false);

  return (
    <div className="relative flex flex-col">
      <div
        className={classNames('flex flex-col', {
          'nameTitleContainer slideUp': showEnterButton,
        })}
      >
        <Typewriter
          text="Fatih Can"
          delay={150}
          className="text-5xl"
          onComplete={() =>
            setTimeout(() => {
              setRenderTitle(true);
            }, 500)
          }
        />
        {renderTitle && (
          <Typewriter
            text="Frontend Developer"
            delay={150}
            onComplete={() => setShowEnterButton(true)}
            className="text-2xl"
          />
        )}
      </div>
      {showEnterButton && (
        <Button
          endIcon={<CornerDownLeft width={16} height={16} />}
          onClick={onEnter}
          className={classNames(
            'fadeInAnimation absolute -bottom-2 left-1/2 transform -translate-x-1/2'
          )}
          autoFocus
        >
          Enter
        </Button>
      )}
    </div>
  );
};

export default EntranceStage;
