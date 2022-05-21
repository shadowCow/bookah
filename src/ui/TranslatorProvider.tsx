import React from 'react';
import { Action } from '../application/Translator/Action';
import { State } from '../application/Translator/State';
import { createInitialState, transition } from '../application/Translator/Translator';

const StateContext = React.createContext<State | undefined>(undefined);
const DispatchContext = React.createContext<React.Dispatch<Action> | undefined>(undefined);

export type TranslatorProviderProps = {
    children: React.ReactNode,
}

export function TranslatorProvider(props: TranslatorProviderProps): JSX.Element {
    const [state, dispatch] = React.useReducer(
        transition,
        createInitialState(),
    );

    return <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
            {props.children}
        </StateContext.Provider>
    </DispatchContext.Provider>
}

export function useTranslatorState(): State {
    const context = React.useContext(StateContext);

    if (context) {
        return context;
    } else {
        throw 'Translator not provided'
    }
}

export function useTranslatorDispatch(): React.Dispatch<Action> {
    const context = React.useContext(DispatchContext);

    if (context) {
        return context;
    } else {
        throw 'Translator not provided'
    }
}