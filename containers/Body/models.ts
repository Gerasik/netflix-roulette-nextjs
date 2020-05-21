import Immutable from 'immutable';

import * as Models from '../models';

export type State = Immutable.Record<{
  moviesResponse: Models.MoviesResponseMap;
}>;

export namespace Payload {
  export type SetData = Models.MoviesResponse;
}

export namespace Action {
  export type SetData = Models.IAction<Payload.SetData>;
  export type SetStartData = { type: string };
}

export namespace ActionCreator {
  export type SetData = (payload: Payload.SetData) => Action.SetData;
  export type SetStartData = () => Action.SetStartData;
}
