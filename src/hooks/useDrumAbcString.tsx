import { Note, getDrumMapNotes } from '../utils/drumMap';

const percNotes = (notes: Note[]) =>
    notes.map(
        ({ abc, abcStyle, sound }) =>
            `%%percmap ${abc} ${sound} ${abcStyle ? '     ' + abcStyle : ''}`
    ).join(`
`);

export const getDrumAbcString = async (title: string, note: string) => {
    const drumNotes = await getDrumMapNotes();
    const mappedNotes = percNotes(drumNotes);

    const defaultAbcString = `
${mappedNotes}
K:C perc
V:ALL stem=up
`;

    const abcStringWithNote = `X:1\nT:${title}${defaultAbcString}${note}`;

    return abcStringWithNote;
};
