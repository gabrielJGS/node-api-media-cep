import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import calculoMediaRepository from "../repositories/calculo.repository";
import logger from "../config/logger";

const calculoMediaRoute = Router();

calculoMediaRoute.post("/calculomedia", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { n1, n2 } = req.body;
    const calculoMedia = await calculoMediaRepository.calcular(n1, n2);
    logger.info(`n1: ${n1} n2: ${n2} Resultado=${calculoMedia}`);
    res.status(StatusCodes.OK).json(calculoMedia);
  } catch (error) {
    next(error);
  }
});

export default calculoMediaRoute;
