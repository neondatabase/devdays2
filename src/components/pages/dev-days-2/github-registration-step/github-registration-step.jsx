import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import GithubIcon from 'components/shared/header/images/header-github.inline.svg';
import TicketIllustration from 'images/ticket-placeholder.png';

const GithubRegistrationStep = ({ handleGitBtnClick }) => (
  <>
    <div className="w-6/12 xl:w-1/2 lg:w-2/3 sm:w-full">
      <h2 className="text-[96px] font-semibold leading-none tracking-tighter text-white 2xl:text-7xl xl:text-6xl">
        You’re In. <br />
        Make it Unique.
      </h2>
      <p className="mt-4 font-mono text-xl font-light leading-tight tracking-tighter text-white">
        Generate a unique ticket image with your GitHub profile.
      </p>
      <div className="mt-12 flex items-center xs:flex-wrap">
        <Button
          className="gradient-background relative border-primary-4 !bg-primary-4 pl-[4.25rem] !text-xl tracking-tighter !text-black hover:bg-[#00e5bf] xl:pl-[4.25rem] md:pl-[4.25rem]"
          size="md"
          theme="tertiary"
          rel="noopener noreferrer"
          target="_blank"
          onClick={handleGitBtnClick}
        >
          <GithubIcon
            className="absolute top-1/2 left-4 -translate-y-1/2 text-black"
            width={40}
            height={40}
          />
          <span>Generate with GitHub</span>
        </Button>
        <span className="ml-4 max-w-[130px] text-sm font-light leading-snug text-white sm:mt-4 sm:ml-7 sm:max-w-full">
          Only public data is going to be used.
        </span>
      </div>
    </div>
    <div className="w-7/12 xl:w-1/2 lg:mt-2 lg:mb-10 lg:w-2/3 sm:w-full">
      <Image src={TicketIllustration} alt="Elephant illustration" />
    </div>
  </>
);

GithubRegistrationStep.propTypes = {
  handleGitBtnClick: PropTypes.func,
};

export default GithubRegistrationStep;
