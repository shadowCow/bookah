import React from 'react';
import { setTranslationDirection, translate } from '../../application/Translator/Action';
import { TranslationDirection } from '../../application/Translator/State';
import { useTranslatorDispatch, useTranslatorState } from '../TranslatorProvider';
import styles from './TranslatorView.css';

export type TranslatorViewProps = {

}

export function TranslatorView(props: TranslatorViewProps): JSX.Element {
    const state = useTranslatorState();
    const dispatch = useTranslatorDispatch();
    
    return <div className={styles.layout}>
        <h2 className={styles.header}>Bookah Translator</h2>
        <div className={styles.directionSelectorContainer}>
            <DirectionSelectorView
                direction={state.translationDirection}
                setDirection={(d) => dispatch(setTranslationDirection(d))}
            />
        </div>
        <div className={styles.sourceTextContainer}>
            <SourceTextView
                text={state.sourceText}
                setText={(t) => dispatch(translate(t))}
            />
        </div>
        <div className={styles.translatedTextContainer}>
            <TranslatedTextView
                text={state.translatedText}
            />
        </div>
    </div>
}

type DirectionSelectorViewProps = {
    direction: TranslationDirection,
    setDirection: (direction: TranslationDirection) => void,
}
function DirectionSelectorView(props: DirectionSelectorViewProps): JSX.Element {
    const englishToBookahId: TranslationDirection = 'english_to_bookah';
    const bookahToEnglishId: TranslationDirection = 'bookah_to_english';

    return <div className={styles.directionSelector}>
        <input type="radio"
            id={englishToBookahId}
            name="translationDirection"
            value={englishToBookahId}
            checked={props.direction === 'english_to_bookah'}
            onChange={(e) => props.setDirection('english_to_bookah')}    
        />
        <label htmlFor={englishToBookahId}>English to Bookah</label><br />
        <input type="radio"
            id={bookahToEnglishId}
            name="translationDirection"
            value={bookahToEnglishId}
            checked={props.direction === 'bookah_to_english'}
            onChange={(e) => props.setDirection('bookah_to_english')}
        />
        <label htmlFor={bookahToEnglishId}>Bookah to English</label><br />  
    </div>
}

type SourceTextViewProps = {
    text: string,
    setText: (text: string) => void,
}
function SourceTextView(props: SourceTextViewProps): JSX.Element {
    return <textarea
        className={styles.sourceText} 
        value={props.text}
        placeholder={'Type text to translate here'}
        onChange={(e) => props.setText(e.target.value)}
    />
}

type TranslatedTextViewProps = {
    text: string,
}
function TranslatedTextView(props: TranslatedTextViewProps): JSX.Element {
    const textOrPlaceholder = props.text
        ? props.text
        : 'Type into source text to translate';

    return <p className={styles.translatedText}>
        {textOrPlaceholder}
    </p>
}
