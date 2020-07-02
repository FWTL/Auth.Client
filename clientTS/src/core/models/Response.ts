export interface ErrorResponse {
  errors: Map<string, Array<string>>;
  status: number;
}

export class UnknownResponse implements ErrorResponse {
  errors: Map<string, string[]>;
  status = 404;
}
