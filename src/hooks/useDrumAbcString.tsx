import { useEffect, useState } from 'react';

export const getDrumAbcString = (title: string, note: string) => {
    const defaultAbcString = `
%%percmap D  pedal-hi-hat x
%%percmap E  bass-drum-1
%%percmap F  acoustic-bass-drum
%%percmap G  low-floor-tom
%%percmap A  high-floor-tom
%%percmap B  low-tom
%%percmap ^B tambourine   triangle
%%percmap c  acoustic-snare
%%percmap _c electric-snare
%%percmap C low-wood-block   triangle
%%percmap =c side-stick x
%%percmap d  low-mid-tom
%%percmap ^d hi-wood-block    triangle
%%percmap e  hi-mid-tom
%%percmap ^e cowbell      triangle
%%percmap f  high-tom
%%percmap a ride-cymbal-1     x
%%percmap _a ride-bell     harmonic
%%percmap g  closed-hi-hat      x
%%percmap ^g open-hi-hat      x
%%percmap b  crash-cymbal-1  x
%%percmap ^c' crash-cymbal-2  x
%%percmap ^a open-triangle     triangle
K:C perc
V:ALL stem=up
`;

    const abcStringWithNote = `X:1\nT:${title}${defaultAbcString}${note}`;

    return abcStringWithNote;
};
