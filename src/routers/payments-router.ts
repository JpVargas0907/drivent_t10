import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
<<<<<<< HEAD
import { getPaymentByTicketId, paymentProcess } from '@/controllers/payments-controller';
=======
import { getPaymentByTicketId, paymentProcess } from '@/controllers';
>>>>>>> 37ba8f70aa6076dc5099fa09f8c936fdb684f1c5

const paymentsRouter = Router();

paymentsRouter.all('/*', authenticateToken).get('/', getPaymentByTicketId).post('/process', paymentProcess);

<<<<<<< HEAD
export { paymentsRouter };
=======
export { paymentsRouter };
>>>>>>> 37ba8f70aa6076dc5099fa09f8c936fdb684f1c5
