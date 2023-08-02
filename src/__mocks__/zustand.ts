import { act } from '@testing-library/react';
import * as zustand from 'zustand';

const { create: actualCreate } = jest.requireActual<typeof zustand>('zustand');

export const storeResetFns = new Set<() => void>();

export const create = (<T>() =>
    (stateCreator: zustand.StateCreator<T>) => {
        const store = actualCreate(stateCreator);
        const initialState = store.getState();
        storeResetFns.add(() => {
            store.setState(initialState, true);
        });

        return store;
    }) as typeof zustand.create;

afterEach(() => {
    act(() => {
        storeResetFns.forEach((resetFn) => {
            resetFn();
        });
    });
});
