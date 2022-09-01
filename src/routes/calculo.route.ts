import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import calculoMediaRepository from "../repositories/calculo.repository";

const calculoMediaRoute = Router();

calculoMediaRoute.post("/calculomedia", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { n1, n2 } = req.body;
    const calculoMedia = await calculoMediaRepository.calcular(n1, n2);
    res.status(StatusCodes.OK).json(calculoMedia);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

export default calculoMediaRoute;
