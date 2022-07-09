import { useRef } from 'react';
import Head from 'next/head';
import SynthContainer from '../components/_SynthContainer';

export default function SynthPage() {
  const listenerFailed = useRef();
  return (
    <>
      <Head>
        <title>Synth - InSynth</title>
        <meta name="A Web Synth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SynthContainer listenerFailId={listenerFailed} />
    </>

  );
}
