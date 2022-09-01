export default class ParameterError extends Error {
    constructor(
        public message: string,
        public error?: any,
    ) {
        super(message);
    }
  }
  