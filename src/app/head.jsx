/* eslint-disable react/prop-types, import/no-extraneous-dependencies */
import riveWasmUrl from '@rive-app/canvas/rive.wasm';
import { RuntimeLoader } from 'rive-react';

import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

RuntimeLoader.setWasmUrl(riveWasmUrl);
const Head = () => (
  <>
    <SEO {...SEO_DATA.developerDays2} />
    <link rel="preload" href={`${riveWasmUrl}`} as="fetch" crossOrigin="true" />
    <link rel="preload" href="/animations/input-lines.riv" as="fetch" crossOrigin="true" />
  </>
);

export default Head;
