import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import {
  createBookingController,
  getBookingController,
  updateBookingController,
} from '@/controllers/index';

const bookingsRouter = Router();

bookingsRouter
  .all('*/', authenticateToken)
  .get('/', getBookingController)
  .post('/', createBookingController)
  .put('/:bookingId', updateBookingController);

export { bookingsRouter };