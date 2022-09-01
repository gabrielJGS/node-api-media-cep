import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ParameterError from "../models/errors/parameter.error.model";
import ForbiddenError from "../models/errors/forbidden.error.model";
import logger from "../config/logger";

/* istanbul ignore next */
function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  logger.error(error);
  if (error instanceof ParameterError) {
    res.send(error).status(StatusCodes.BAD_REQUEST);
  } else if (error instanceof ForbiddenError) {
    res.send(error).status(StatusCodes.FORBIDDEN);
  } else {
    res.send(error).status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

export default errorHandler;
