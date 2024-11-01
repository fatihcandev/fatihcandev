import { useState } from 'react';
import classNames from 'classnames';

import { IExperience } from '@/types';
import { ChevronDown } from '../../assets/icons';

const Experience = ({
  organization,
  title,
  startDate,
  endDate,
  details,
}: IExperience) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="flex gap-3 items-center experience">
      <div className="self-start pt-1">
        {typeof organization.logo === 'string' ? (
          <div className="w-12 h-12 flex-shrink-0">
            <img
              src={organization.logo}
              alt={organization.name + ' logo'}
              className="object-cover"
            />
          </div>
        ) : (
          <organization.logo width={48} height={48} className="flex-shrink-0" />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span>{title}</span>
            <a
              href={organization.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="w-fit font-bold hover:underline"
            >
              {organization.name}
            </a>
          </div>
          <span className="text-xs text-gray-500">
            {startDate && `${startDate} -`} {endDate}
          </span>
        </div>
        <button
          className="text-xs self-start hover:underline flex items-center"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide details' : 'Show details'}
          <ChevronDown
            width={14}
            height={14}
            className={classNames('flex ml-0.5', {
              'rotate-180': showDetails,
            })}
          />
        </button>
        {showDetails && <div>{details}</div>}
      </div>
    </div>
  );
};

export default Experience;
