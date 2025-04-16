import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: any,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.error(err);
  response.status(500).json({ message: 'Internal server error' });
};
