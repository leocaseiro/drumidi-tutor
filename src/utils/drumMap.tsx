import { get } from './storage';

export type Note = {
    abc: string;
    abcStyle?: string;
    label: string;
    midi: number[];
    name: string;
    short: string;
    show: boolean;
    sound: string;
};

export const getRandomNote = (notes: Note[]): Note => {
    return notes[Math.floor(Math.random() * notes.length)];
};

export const defaultNotes = [
    {
        abc: '_c',
        label: 'Electric Snare',
        midi: [38],
        name: 'electric-snare',
        short: 'SN',
        show: false,
        sound: 'electric-snare',
    },
    {
        abc: 'c',
        label: 'Snare',
        midi: [38],
        name: 'acoustic-snare',
        short: 'SN',
        show: true,
        sound: 'acoustic-snare',
    },
    {
        abc: '=c',
        abcStyle: 'x',
        label: 'Rim Shot',
        midi: [37],
        name: 'side-stick',
        short: 'RS',
        show: false,
        sound: 'side-stick',
    },
    {
        abc: 'F',
        label: 'Bass',
        midi: [36],
        name: 'acoustic-bass-drum',
        short: 'BD',
        show: true,
        sound: 'acoustic-bass-drum',
    },
    {
        abc: 'E',
        label: 'Bass',
        midi: [36],
        name: 'bass-drum',
        short: 'BS',
        show: false,
        sound: 'bass-drum',
    },
    {
        abc: 'g',
        abcStyle: 'x',
        label: 'Closed Hi-hat',
        midi: [42],
        name: 'closed-hi-hat',
        short: 'CHH',
        show: true,
        sound: 'closed-hi-hat',
    },
    {
        abc: `"^o"^g`,
        abcStyle: 'x',
        label: 'Open Hi-hat',
        midi: [46],
        name: 'open-hi-hat',
        short: 'OHH',
        show: true,
        sound: 'open-hi-hat',
    },
    {
        abc: 'a',
        abcStyle: 'x',
        label: 'Ride',
        midi: [51],
        name: 'ride-cymbal',
        short: 'RD',
        show: true,
        sound: 'ride-cymbal-1',
    },
    {
        abc: '_a',
        abcStyle: 'harmonic',
        label: 'Ride bell',
        midi: [51],
        name: 'ride-bell',
        short: 'RB',
        show: false,
        sound: 'ride-bell',
    },
    {
        abc: 'b',
        abcStyle: 'x',
        label: 'Crash',
        midi: [49],
        name: 'crash-cymbal',
        short: 'CR',
        show: true,
        sound: 'crash-cymbal-1',
    },
    {
        abc: "!style=x!c'",
        abcStyle: 'x',
        label: 'Crash 2',
        midi: [57],
        name: 'crash-cymbal-2',
        short: 'CR',
        show: false,
        sound: 'crash-cymbal-2',
    },
    {
        abc: '^d',
        abcStyle: 'triangle',
        label: 'High Wood Block',
        midi: [48],
        name: 'hi-wood-block',
        short: 'HW',
        show: false,
        sound: 'hi-wood-block',
    },
    {
        abc: 'e',
        label: 'High Tom',
        midi: [48],
        name: 'hi-mid-tom',
        short: 'HT',
        show: true,
        sound: 'hi-mid-tom',
    },
    {
        abc: 'f',
        label: 'High Tom',
        midi: [48],
        name: 'high-tom',
        short: 'HT',
        show: true,
        sound: 'high-tom',
    },
    {
        abc: 'd',
        label: 'Low Tom',
        midi: [45],
        name: 'low-mid-tom',
        short: 'LM',
        show: true,
        sound: 'low-mid-tom',
    },
    {
        abc: 'B',
        label: 'Low Tom',
        midi: [45],
        name: 'low-tom',
        short: 'LT',
        show: true,
        sound: 'low-tom',
    },
    {
        abc: 'A',
        label: 'Floor Tom',
        midi: [43],
        name: 'high-floor-tom',
        short: 'FT',
        show: true,
        sound: 'high-floor-tom',
    },
    {
        abc: 'G',
        label: 'Low Floor Tom',
        midi: [43],
        name: 'low-floor-tom',
        short: 'FT',
        show: true,
        sound: 'low-floor-tom',
    },
    {
        abc: 'D',
        abcStyle: 'x',
        label: 'Pedal Hi-hat',
        midi: [44],
        name: 'pedal-hi-hat',
        short: 'PHH',
        show: true,
        sound: 'pedal-hi-hat',
    },
    {
        abc: '^B',
        abcStyle: 'triangle',
        label: 'Tambourine',
        midi: [54],
        name: 'tambourine',
        short: 'TB',
        show: true,
        sound: 'tambourine',
    },
    {
        abc: '_C',
        abcStyle: 'triangle',
        label: 'Low Wood Block',
        midi: [77],
        name: 'low-wood-block',
        short: 'TB',
        show: false,
        sound: 'low-wood-block',
    },
    {
        abc: '^e',
        abcStyle: 'triangle',
        label: 'Cowbell',
        midi: [56],
        name: 'cowbell',
        short: 'CB',
        show: false,
        sound: 'cowbell',
    },
    {
        abc: '^a',
        abcStyle: 'triangle',
        label: 'Open Triangle',
        midi: [98],
        name: 'open-triangle',
        short: 'TR',
        show: false,
        sound: 'open-triangle',
    },
];

export const getDrumMapNotes = async (): Promise<Note[]> => {
    const notes = await get<Note[]>('notes');

    return notes;
};

export const getNoteByName = (
    notes: Note[],
    noteName: string
): Note | undefined => {
    const note = notes.find(({ name }) => name === noteName);
    return note;
};

export const getNoteByMidi = (
    notes: Note[],
    noteMidi: number
): Note | undefined => {
    const note = notes.find(({ midi }) => midi.includes(noteMidi));
    return note;
};

export const getShowingNotes = (notes: Note[]): Note[] => {
    const shownNotes = notes.filter(({ show }) => show);
    return shownNotes;
};
