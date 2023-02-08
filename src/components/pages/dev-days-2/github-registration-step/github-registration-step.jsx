import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import GithubIcon from 'components/shared/header/images/header-github.inline.svg';
import TicketIllustration from 'images/ticket-placeholder.png';

const GithubRegistrationStep = ({ handleGitBtnClick }) => (
  <>
    <div className="w-[760px] xl:w-1/2 lg:w-2/3 md:w-full">
      <h2 className="text-[96px] font-semibold leading-none tracking-tighter text-white md:text-6xl [@media(max-width:1360px)]:text-7xl">
        You’re In. <br />
        Make it Unique.
      </h2>
      <p className="mt-4 font-mono text-xl font-light leading-tight tracking-tighter text-white">
        Generate a unique ticket image with your GitHub profile.
      </p>
      <Button
        className="relative mt-12 border-primary-4 !bg-primary-4 pl-[4.25rem] !text-xl tracking-tighter !text-black hover:border-white xl:pl-[4.25rem] md:pl-[4.25rem]"
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
      <span className="ml-4 inline-flex max-w-[130px] align-middle text-sm font-light leading-snug text-black text-white">
        Only public data is going to be used.
      </span>
    </div>
    <div className="w-7/12 xl:w-1/2 lg:my-4 lg:w-2/3 md:w-full">
      <Image src={TicketIllustration} alt="Elephant illustration" />
    </div>
  </>
);

GithubRegistrationStep.propTypes = {
  handleGitBtnClick: PropTypes.func,
};

export default GithubRegistrationStep;
