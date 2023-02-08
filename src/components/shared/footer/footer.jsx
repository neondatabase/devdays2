import clsx from 'clsx';

import Container from 'components/shared/container';

const Footer = () => (
    <footer
      className={clsx(
        'safe-paddings mt-auto overflow-hidden border-t border-gray-2 bg-black text-white'
      )}
    >
      <Container
        className="flex justify-between py-10 font-sans text-[15px] leading-none text-gray-5 xl:py-8"
        size="lg"
      >
        <p className="">Neon 2023 Ⓒ All rights reserved</p>
        <p className="">
          By entering your email, you agree to our{' '}
          <a
            className="text-white"
            href={`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/terms-of-service`}
            target="_blank"
            rel="noreferrer"
          >
            Terms and Conditions
          </a>{' '}
          and{' '}
          <a
            className="text-white"
            href={`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/privacy-policy`}
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </p>
      </Container>
    </footer>
  );

export default Footer;
