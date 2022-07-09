
# InSynth

A web synthesizer that can be played using a real midi controller or a keyboard. It can display the currently recorded midi message and play it using ToneJS to emulate a synthesizer. The framework used is NextJS and the frontend is created using ReactJS. WebMidiJS was used to capture midi inputs and the project was tested using Cypress for end to end testing. 

The project is currently hosted on [in-synth.vercel.app/synth](in-synth.vercel.app/synth).

## How to Use InSynth

There are currently two ways of playing the synthesizer:

1. With a keyboard, use the keys `` a s d f g h j k `` to play notes C4 to B5. Use the keys `` i o p `` to play a note that matches the framerate of the graph to more easily view how each effect works.

2. With a midi controller, plug it in and ensure you are using a [compatible browser](https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess#browser_compatibility). Then it should appear in the "Set Controller" panel where you can select it. That's all!

The Data Panel shows the values received by InSynth if you are using a midi controller.

The Select Synth panel lets you pick from an AMSynth or a FMSynth. 

The Set Controller panel lets you pick a midi controller (if it is detected).

The ADSR Envelope panel lets you change the attack, decay, sustain and release of each note played.

The Graph panel shows an "oscilloscope" type representation of the notes being played.

The Effects Rack lets you pick and change different effects.

## How to Build

Ensure you have the latest [NodeJS](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/getting-started/install) installed.

Download the project and cd into it. Then run

```bash
yarn dev
```
or 
```bash
npm run dev
```

which will run the development server.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result, playing using a keyboard works on all browsers (except Firefox/Linux, see below) however the Web Midi api is only supported on [these](https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess#browser_compatibility) platforms. 

## Known Bugs
- Sometimes keys can be "sticky" and notes will continue to play even after letting go
- Playing too many keys too quickly can really slow down the Synth
- Changing channel, creates a new synth, leading to a lot of static noise
- Change synth type reinitialises all effects to default values
- Linux/Firefox currently has a broken implementation of event.repeat so keydown events keep firing

## Future Goals
- A theming system
- Effect panel to change the synth properties (sine wave, square, etc.)
- Ability to save settings to localstorage
- Tablet/Mobile layouts
- Fixing the bugs above!
