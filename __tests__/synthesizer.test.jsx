/* eslint-disable no-undef */
import Synthesizer from '../utils/synthesizer';
import '@testing-library/jest-dom';

describe('Synthesizer Getters and Setters', () => {
  it('Synth Inputs', () => {
    const synthesizer = new Synthesizer();
    synthesizer.setInput('Arturia');
    expect(synthesizer.getInput()).toEqual('Arturia');
  });
  it('Synth Channels', () => {
    const synthesizer = new Synthesizer();
    synthesizer.setChannel(1);
    expect(synthesizer.getChannel()).toEqual(1);
  });
  it('Synth Attack', () => {
    const synthesizer = new Synthesizer();
    synthesizer.setAttack(0.1);
    expect(synthesizer.getAttack()).toEqual(0.1);
  });
  it('Synth Decay', () => {
    const synthesizer = new Synthesizer();
    synthesizer.setDecay(0.15);
    expect(synthesizer.getDecay()).toEqual(0.15);
  });
  it('Synth Sustain', () => {
    const synthesizer = new Synthesizer();
    synthesizer.setSustain(0.2);
    expect(synthesizer.getSustain()).toEqual(0.2);
  });
  it('Synth Release', () => {
    const synthesizer = new Synthesizer();
    synthesizer.setRelease(0.25);
    expect(synthesizer.getRelease()).toEqual(0.25);
  });
});
