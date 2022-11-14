export type Note = {
    show: boolean;
    midi: number;
    abc: string;
    name: string;
    label: string;
    short: string;
};

export const getRandomNote = (notes: Note[]): Note => {
    return notes[Math.floor(Math.random() * notes.length)];
};

export const getDrumMapNotes = (): Note[] => {
    const notes = [
        {
            show: false,
            midi: 38,
            abc: '_c',
            name: 'electric-snare',
            label: 'Electric Snare',
            short: 'SN',
        },
        {
            show: true,
            midi: 38,
            abc: 'c',
            name: 'acoustic-snare',
            label: 'Snare',
            short: 'SN',
        },
        {
            show: false,
            midi: 37,
            abc: '=c',
            name: 'side-stick',
            label: 'Rim Shot',
            short: 'RS',
        },
        {
            show: true,
            midi: 36,
            abc: 'F',
            name: 'acoustic-bass-drum',
            label: 'Bass',
            short: 'BS',
        },
        {
            show: true,
            midi: 42,
            abc: 'g',
            name: 'closed-hi-hat',
            label: 'Closed Hi-hat',
            short: 'CHH',
        },
        {
            show: true,
            midi: 46,
            abc: `"^o"^g`,
            name: 'open-hi-hat',
            label: 'Open Hi-hat',
            short: 'OHH',
        },
        {
            show: true,
            midi: 51,
            abc: 'a',
            name: 'ride-cymbal-1',
            label: 'Ride',
            short: 'RD',
        },
        {
            show: false,
            midi: 51,
            abc: '_a',
            name: 'ride-bell',
            label: 'Ride bell',
            short: 'RB',
        },
        {
            show: true,
            midi: 49,
            abc: 'b',
            name: 'crash-cymbal-1',
            label: 'Crash',
            short: 'CR',
        },
        {
            show: false,
            midi: 57,
            abc: "!style=x!c'",
            name: 'crash-cymbal-2',
            label: 'Crash 2',
            short: 'CR',
        },
        {
            show: true,
            midi: 48,
            abc: 'e',
            name: 'hi-mid-tom',
            label: 'High Tom',
            short: 'HT',
        },
        {
            show: true,
            midi: 45,
            abc: 'd',
            name: 'low-mid-tom',
            label: 'Low Tom',
            short: 'LT',
        },
        {
            show: true,
            midi: 43,
            abc: 'G',
            name: 'high-floor-tom',
            label: 'Floor Tom',
            short: 'FT',
        },
        {
            show: true,
            midi: 44,
            abc: 'D',
            name: 'pedal-hi-hat',
            label: 'Pedal Hi-hat',
            short: 'PHH',
        },
    ];

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
    const note = notes.find(({ midi }) => midi === noteMidi);
    return note;
};

export const getShownNotes = (notes: Note[]): Note[] => {
    const shownNotes = notes.filter(({ show }) => show);
    return shownNotes;
};
