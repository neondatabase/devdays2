import Container from 'components/shared/container';

const Footer = () => (
  <footer className="safe-paddings z-50 mt-auto overflow-hidden border-t border-gray-2 text-white">
    <Container
      className="flex justify-between gap-3 py-10 font-sans text-[15px] leading-tight text-gray-5 xl:py-8 lg:text-[12px] sm:flex-col sm:items-center"
      size="lg"
    >
      <p className="text-gray-8">Neon 2023 Ⓒ All rights reserved</p>
      <p className="sm:max-w-[80%] sm:text-center">
        By entering your email, you agree to our{' '}
        <a
          className="text-white transition duration-200 hover:text-primary-2"
          href={`${process.env.NEXT_PUBLIC_MAIN_SITE_URL}/terms-of-service`}
          target="_blank"
          rel="noreferrer"
        >
          Terms and Conditions
        </a>{' '}
        and{' '}
        <a
          className="text-white transition duration-200 hover:text-primary-2"
          href={`${process.env.NEXT_PUBLIC_MAIN_SITE_URL}/privacy-policy`}
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
