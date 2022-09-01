import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import cepRepository from "../repositories/cep.repository";
import logger from "../config/logger";

const calculoMediaRoute = Router();

calculoMediaRoute.get("/buscacep/:cep", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cep } = req.params;
    const cepData = await cepRepository.buscaCep(cep);
    logger.info(cepData);
    res.status(StatusCodes.OK).json(cepData);
  } catch (error) {
    next(error);
  }
});

export default calculoMediaRoute;
