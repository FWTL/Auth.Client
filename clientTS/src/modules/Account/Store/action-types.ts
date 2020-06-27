const ACCOUNT = "account/";

export const enum ACTIONS {
  REGISTER_USER = "REGISTER_USER",
}

export function ModuleAction(action: ACTIONS): string {
  return ACCOUNT + action;
}
