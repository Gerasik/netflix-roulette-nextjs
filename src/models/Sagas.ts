import {
  CallEffect,
  ForkEffect,
  SelectEffect,
  PutEffect,
  TakeEffect,
  CancelEffect,
} from 'redux-saga/effects';
import * as Models from 'models';
import { Action } from 'containers/Body/models';

export type WatchFetchData = Generator<CallEffect<true> | ForkEffect<never>>;

export type HandleInput = Generator<
  | CallEffect<true>
  | Generator<SelectEffect | Promise<Models.MoviesResponse> | PutEffect<Action.SetData>, void>
>;

export type WatchInput = Generator<
  | TakeEffect
  | CancelEffect
  | ForkEffect<
      Generator<
        | CallEffect<true>
        | Generator<
            SelectEffect | Promise<Models.MoviesResponse> | PutEffect<Action.SetData>,
            void,
            unknown
          >,
        void,
        void
      >
    >,
  void,
  void
>;
