import { StateCreator } from 'zustand';

export type ZuSlice<Slice> = StateCreator<Slice, [], [], Slice>;

declare module '*.scss';
