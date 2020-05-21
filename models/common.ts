export interface IAction<T = any> {
  type: string;
  payload: T;
}

export type Reducer<S, A = IAction> = (state: S, action: A) => S;
