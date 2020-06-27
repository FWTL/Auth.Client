export interface State {
  processing: boolean;
  errors: Array<string>;
}
export const state: State = {
  errors: [],
  processing: false
};
