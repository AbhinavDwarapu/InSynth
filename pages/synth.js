import { useRef } from 'react';
import SynthContainer from '../components/_SynthContainer';

export default function SynthPage() {
  const listenerFailed = useRef();
  return (
    <SynthContainer listenerFailId={listenerFailed} />
  );
}
