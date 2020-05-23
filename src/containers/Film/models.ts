import * as Models from 'models';

export type State = Models.MovieMap;

export namespace Payload {
  export type SetFilmData = Models.MovieMap;
  export type SetFilmId = number;
}

export namespace Action {
  export type SetFilmData = Models.IAction<Payload.SetFilmData>;
  export type SetFilmId = Models.IAction<Payload.SetFilmId>;
}

export namespace ActionCreator {
  export type SetFilmData = (payload: Payload.SetFilmData) => Action.SetFilmData;
  export type SetFilmId = (payload: Payload.SetFilmId) => Action.SetFilmId;
}
