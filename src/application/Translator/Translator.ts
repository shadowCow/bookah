import { Action, SetTranslationDirection, Translate } from "./Action";
import { State, TranslationDirection } from "./State";

export function createInitialState(): State {
    return {
        translationDirection: 'english_to_bookah',
        sourceText: '',
        translatedText: '',
    };
}

export function transition(
    state: State,
    action: Action,
): State {
    switch (action.kind) {
        case 'SetTranslationDirection':
            return handleSetTranslationDirection(state, action);
        case 'Translate':
            return handleTranslate(state, action);
        default:
            const _exhaust: never = action;
            return action;
    }
}

function handleSetTranslationDirection(
    state: State,
    action: SetTranslationDirection,
): State {
    return {
        translationDirection: action.direction,
        sourceText: '',
        translatedText: '',
    }
}

function handleTranslate(
    state: State,
    action: Translate,
): State {
    const translatedText = translate(
        state.translationDirection,
        action.sourceText,
    );

    return {
        ...state,
        sourceText: action.sourceText,
        translatedText,
    }
}

function translate(
    direction: TranslationDirection,
    sourceText: string,
): string {
    switch (direction) {
        case 'bookah_to_english':
            return 'to english: ' + sourceText;
        case 'english_to_bookah':
            return 'to bookah: ' + sourceText;
        default:
            const _exhaust: never = direction;
            return _exhaust;
    }
}