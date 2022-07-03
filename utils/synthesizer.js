import * as Tone from 'tone';

// Initialise Synthesizer and set a channel and input for ToneJS
//

export default class Synthesizer {
synth;

controller;

input;

channel;

attack = 0.05;

decay = 0.1;

sustain = 0.7;

release = 1;

// Effects

BitCrusher;

Chorus;

Distortion;

Reverb;

BiquadFilter;

Compressor;

// Sets input and channel and adds listeners to synth
constructor() {
  this.synthInit();
  this.effectInit();
  this.chainEffects();
}

// Create new synth and initialise effects
synthInit(synthName) {
  switch (synthName) {
    case 'AMSynth':
      this.synth = new Tone.PolySynth(Tone.AMSynth);
      break;
    case 'FMSynth':
      this.synth = new Tone.PolySynth(Tone.FMSynth);
      break;
    case 'DuoSynth':
      this.synth = new Tone.PolySynth(Tone.DuoSynth);
      break;
    default:
      this.synth = new Tone.PolySynth(Tone.AMSynth);
      break;
  }
  this.synth.maxPolyphony = 100;
  this.synth.volume.value = -20;
}

// Create dry effects for chaining
effectInit() {
  this.BitCrusher = new Tone.BitCrusher();
  this.BitCrusher.set({
    wet: 0,
  });
  this.Chorus = new Tone.Chorus().start();
  this.Chorus.set({
    wet: 0,
  });
  this.Distortion = new Tone.Distortion();
  this.Distortion.set({
    wet: 0,
  });
  this.Reverb = new Tone.Reverb();
  this.Reverb.set({
    wet: 0,
  });
  this.BiquadFilter = new Tone.BiquadFilter().toDestination();
  this.BiquadFilter.set({
    wet: 0,
  });
}

// Trigger synth noteon
triggerAttackCallback(e) {
  this.setEffects();
  this.synth.triggerAttack(e.note.identifier, '+0', e.velocity);
}

// Trigger synth noteoff
triggerReleaseCallback(e) {
  this.setEffects();
  this.synth.triggerRelease(e.note.identifier);
}

// Detune synth
setDetuneCallback(e) {
  this.setEffects();
  this.synth.set({ detune: e.value * 400 });
}

// Volume synth
setVolumeCallback(e) {
  this.setEffects();
  this.synth.volume.value = Math.log(e.value) * 20;
}

// Set ADSR and chain effects
setEffects() {
  this.synth.set({
    envelope: {
      attack: this.attack,
      decay: this.decay,
      sustain: this.sustain,
      release: this.release,
    },
  });
  this.chainEffects();
}

// Chain effects to Tone.Destination
// Compressor has no wet or dry
chainEffects() {
  this.synth.chain(
    this.BitCrusher,
    this.Chorus,
    this.Distortion,
    this.Reverb,
    this.BiquadFilter,
    // this.Compressor,
    Tone.Destination,
  );
}

/**
   * @param {number} attack
   */
set attack(attack) {
  this.attack = attack * 2;
  this.setEffects();
}

// Set decay
/**
   * @param {number} decay
   */
set decay(decay) {
  this.decay = decay * 2;
  this.setEffects();
}

// Set sustainthis.chainEffects();
/**
   * @param {number} sustain
   */
set sustain(sustain) {
  this.sustain = sustain;
  this.setEffects(); this.chainEffects();
}

// Set release
/**
   * @param {number} release
   */
set release(release) {
  this.release = release * 20;
  this.setEffects();
}

/*
FOR ALL EFFECTS
---------------
Dispose when setting effects to prevent stacking
*/

// Set bit crusher effect,
setBitCrusherEffect(wet, value) {
  if (this.BitCrusher != null) {
    this.BitCrusher.dispose();
  }

  this.BitCrusher = new Tone.BitCrusher(value);
  this.BitCrusher.set({
    wet,
  });
}

// Set distortion effect
setDistortionEffect(wet, value) {
  if (this.Distortion != null) {
    this.Distortion.dispose();
  }
  this.Distortion = new Tone.Distortion(value);
  this.Distortion.set({
    wet,
  });
}

// Set reverb effect
setReverbEffect(wet, decay) {
  if (this.Reverb != null) {
    this.Reverb.dispose();
  }
  this.Reverb = new Tone.Reverb(decay);
  this.Reverb.set({
    wet,
  });
}

// Set filter effect
setBiquadFilterEffect(wet, frequency, type) {
  if (this.BiquadFilter != null) {
    this.BiquadFilter.dispose();
  }
  this.BiquadFilter = new Tone.BiquadFilter(frequency, type).toDestination();
  this.BiquadFilter.set({
    wet,
  });
}

// Set compressor effect
// setCompressorEffect(wet, thres, ratio) {
//   if (this.Compressor != null) {
//     this.Compressor.dispose();
//   }

//   if (wet === 0) {
//     this.Compressor = new Tone.Compressor(-24, 12);
//   } else {
//     this.Compressor = new Tone.Compressor(thres, ratio);
//   }
// }

// Get controller
get controller() {
  if (this.controller === undefined) {
    return -1;
  }
  return (this.controller);
}
}
