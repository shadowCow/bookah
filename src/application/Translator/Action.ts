import { TranslationDirection } from "./State";

export type Translate = {
    kind: 'Translate',
    sourceText: string,
}
export function translate(sourceText: string): Translate {
    return {
        kind: 'Translate',
        sourceText,
    }
}

export type SetTranslationDirection = {
    kind: 'SetTranslationDirection',
    direction: TranslationDirection,
}
export function setTranslationDirection(direction: TranslationDirection): SetTranslationDirection {
    return {
        kind: 'SetTranslationDirection',
        direction,
    }
}

export type Action =
    | Translate
    | SetTranslationDirection;