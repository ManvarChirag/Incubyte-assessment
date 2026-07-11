import { Request, Response } from "express";
import { registerUser } from "../services/auth.service";

export const register = (req: Request, res: Response) => {
  const result = registerUser(req.body);

  return res.status(201).json(result);
};