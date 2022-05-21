export type BookahTransliterationConsonant =
    | 'b'
    | 'p'
    | 'g'
    | 'k'
    | 'd'
    | 't'
    | 'v'
    | 'f';

export type BookahTransliterationVowel =
    | 'oo'
    | 'ee'
    | 'y'
    | 'ih'
    | 'eh'
    | 'aa'
    | 'ah'
    | 'oh';

export const orderedConsonants: Array<BookahTransliterationConsonant> = [
    'b',
    'p',
    'g',
    'k',
    'd',
    't',
    'v',
    'f',
];

export const orderedVowels: Array<BookahTransliterationVowel> = [
    'oo',
    'ee',
    'y',
    'ih',
    'eh',
    'aa',
    'ah',
    'oh',
];

export type BookahPair =
    | 'boo'
    | 'bee'
    | 'by'
    | 'bih'
    | 'beh'
    | 'baa'
    | 'bah'
    | 'boh'
    | 'poo'
    | 'pee'
    | 'py'
    | 'pih'
    | 'peh'
    | 'paa'
    | 'pah'
    | 'poh'
    | 'goo'
    | 'gee'
    | 'gy'
    | 'gih'
    | 'geh'
    | 'gaa'
    | 'gah'
    | 'goh'
    | 'koo'
    | 'kee'
    | 'ky'
    | 'kih'
    | 'key'
    | 'kaa'
    | 'kah'
    | 'koh'
    | 'doo'
    | 'dee'
    | 'dy'
    | 'dih'
    | 'deh'
    | 'daa'
    | 'dah'
    | 'doh'
    | 'too'
    | 'tee'
    | 'ty'
    | 'tih'
    | 'teh'
    | 'taa'
    | 'tah'
    | 'toh'
    | 'voo'
    | 'vee'
    | 'vy'
    | 'vih'
    | 'veh'
    | 'vaa'
    | 'vah'
    | 'voh'
    | 'foo'
    | 'fee'
    | 'fy'
    | 'fih'
    | 'feh'
    | 'faa'
    | 'fah'
    | 'foh';

export const transliteration: Array<BookahPair> = [
    'boo',
    'bee',
    'by',
    'bih',
    'beh',
    'baa',
    'bah',
    'boh',
    'poo',
    'pee',
    'py',
    'pih',
    'peh',
    'paa',
    'pah',
    'poh',
    'goo',
    'gee',
    'gy',
    'gih',
    'geh',
    'gaa',
    'gah',
    'goh',
    'koo',
    'kee',
    'ky',
    'kih',
    'key',
    'kaa',
    'kah',
    'koh',
    'doo',
    'dee',
    'dy',
    'dih',
    'deh',
    'daa',
    'dah',
    'doh',
    'too',
    'tee',
    'ty',
    'tih',
    'teh',
    'taa',
    'tah',
    'toh',
    'voo',
    'vee',
    'vy',
    'vih',
    'veh',
    'vaa',
    'vah',
    'voh',
    'foo',
    'fee',
    'fy',
    'fih',
    'feh',
    'faa',
    'fah',
    'foh',
];

export type Dictionary = {
    [k: string]: string,
}
export function dictionary(): Dictionary {
    return {};
}

export const englishToBookahDictionary: Dictionary = {

}

export const bookahToEnglishDictionary: Dictionary = Object.entries(englishToBookahDictionary).reduce(
    (acc, [k, v]) => {
        // swap key and value to make a reverse dictionary
        acc[v] = k;
        return acc;
    },
    dictionary(),
)