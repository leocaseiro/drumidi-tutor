export type Note = {
    show: boolean;
    midi: number;
    abc: string;
    label: string;
    short: string;
};

export const getRandomNote = (notes: Note[]): Note => {
    return notes[Math.floor(Math.random() * notes.length)];
};

export const getDrumMapNotes = (): Note[] => {
    const notes = [
        {
            show: true,
            midi: 38,
            abc: '_c',
            label: 'electric-snare',
            short: 'SN',
        },
        {
            show: true,
            midi: 38,
            abc: 'c',
            label: 'acoustic-snare',
            short: 'SN',
        },
        { show: true, midi: 37, abc: '=c', label: 'side-stick', short: 'RS' },
        {
            show: true,
            midi: 36,
            abc: 'F',
            label: 'acoustic-bass-drum',
            short: 'BS',
        },
        {
            show: true,
            midi: 42,
            abc: 'g',
            label: 'closed-hi-hat',
            short: 'CHH',
        },
        {
            show: true,
            midi: 46,
            abc: `"^o"^g`,
            label: 'open-hi-hat',
            short: 'OHH',
        },
        { show: true, midi: 51, abc: 'a', label: 'ride-cymbal-1', short: 'RD' },
        { show: true, midi: 51, abc: '_a', label: 'ride-bell', short: 'RB' },
        {
            show: true,
            midi: 49,
            abc: 'b',
            label: 'crash-cymbal-1',
            short: 'CR',
        },
        {
            show: false,
            midi: 57,
            abc: "!style=x!c'",
            label: 'crash-cymbal-2',
            short: 'CR',
        },
        { show: true, midi: 48, abc: 'e', label: 'hi-mid-tom', short: 'HT' },
        { show: true, midi: 45, abc: 'd', label: 'low-mid-tom', short: 'LT' },
        {
            show: true,
            midi: 43,
            abc: 'G',
            label: 'high-floor-tom',
            short: 'FT',
        },
    ];

    return notes;
};

export const getNoteByLabel = (
    notes: Note[],
    noteLabel: string
): Note | undefined => {
    const note = notes.find(({ label }) => label === noteLabel);
    return note;
};

export const getShownNotes = (notes: Note[]): Note[] => {
    const shownNotes = notes.filter(({ show }) => show);
    return shownNotes;
};

// export const useNoteByLabel(noteLabel: string) => {
//     note = useDrumMapNotes().find(({ label }) => label === noteLabel);
//     return note;
// }
