import React from 'react';
import { TranslatorProvider } from './TranslatorProvider';
import { TranslatorView } from './TranslatorView/TranslatorView';

export type RootViewProps = {

}

export function RootView(props: RootViewProps): JSX.Element {
    return <TranslatorProvider>
        <TranslatorView />
    </TranslatorProvider>
}