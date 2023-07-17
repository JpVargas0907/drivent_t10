<<<<<<< HEAD
import { NextFunction, Response } from 'express';
=======
import { Response } from 'express';
>>>>>>> 37ba8f70aa6076dc5099fa09f8c936fdb684f1c5
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import ticketService from '@/services/tickets-service';
import { InputTicketBody } from '@/protocols';

<<<<<<< HEAD
export async function getTickets(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
    const { userId } = req;
  
    try {
      const ticket = await ticketService.getTicketByUserId(userId);
      return res.status(httpStatus.OK).send(ticket);
    } catch (e) {
      next(e);
    }
  }

export async function getTicketTypes(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
    try {
      const ticketTypes = await ticketService.getTicketType();
      return res.status(httpStatus.OK).send(ticketTypes);
    } catch (e) {
      next(e);
    }
  }
  

export async function createTicket(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const { userId } = req;
  const { ticketTypeId } = req.body as InputTicketBody;

=======
export async function getTicketTypes(req: AuthenticatedRequest, res: Response) {
  try {
    const ticketTypes = await ticketService.getTicketType();
    return res.status(httpStatus.OK).send(ticketTypes);
  } catch (e) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function getTickets(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const ticket = await ticketService.getTicketByUserId(userId);
    return res.status(httpStatus.OK).send(ticket);
  } catch (e) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function createTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { ticketTypeId } = req.body as InputTicketBody;

  if (!ticketTypeId) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

>>>>>>> 37ba8f70aa6076dc5099fa09f8c936fdb684f1c5
  try {
    const ticket = await ticketService.createTicket(userId, ticketTypeId);
    return res.status(httpStatus.CREATED).send(ticket);
  } catch (e) {
<<<<<<< HEAD
    next(e);
=======
    return res.sendStatus(httpStatus.NOT_FOUND);
>>>>>>> 37ba8f70aa6076dc5099fa09f8c936fdb684f1c5
  }
}
