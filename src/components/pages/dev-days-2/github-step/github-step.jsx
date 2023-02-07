import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import GithubIcon from 'components/shared/header/images/header-github.inline.svg';
import TicketIllustration from 'images/ticket-placeholder.png';

const GithubStep = ({ handleGitBtnClick }) => (
  <>
    <div className="w-[580px] xl:w-1/2 lg:w-2/3 md:w-full">
      <h2 className="text-[96px] font-semibold leading-none tracking-tighter text-black dark:text-white xl:text-8xl md:text-6xl">
        You’re In. <br />
        Make it Unique.
      </h2>
      <p className="mt-8 font-mono text-xl font-light leading-tight tracking-tighter text-black dark:text-white">
        Generate a unique ticket image with your GitHub profile.
      </p>
      <Button
        className="relative mt-8 border-primary-4 !bg-primary-4 pl-14 !text-black dark:hover:border-white"
        size="md"
        theme="tertiary"
        rel="noopener noreferrer"
        target="_blank"
        onClick={handleGitBtnClick}
      >
        <GithubIcon
          className="absolute top-1/2 left-2 -translate-y-1/2 text-black"
          width={40}
          height={40}
        />
        <span>Generate with GitHub</span>
      </Button>
      <span className="ml-4 inline-flex max-w-[130px] align-middle text-sm font-light text-black dark:text-white">
        Only public data is going to be used.
      </span>
    </div>
    <div className="w-7/12 xl:w-1/2 lg:my-4 md:w-full">
      <Image src={TicketIllustration} alt="Elephant illustration" />
    </div>
  </>
);

GithubStep.propTypes = {
  handleGitBtnClick: PropTypes.func,
};

export default GithubStep;
