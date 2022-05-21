export type State = {
    translationDirection: TranslationDirection,
    sourceText: string,
    translatedText: string,
};


export type TranslationDirection =
    'bookah_to_english' |
    'english_to_bookah';
