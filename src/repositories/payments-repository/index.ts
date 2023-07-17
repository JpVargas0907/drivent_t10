import { prisma } from '@/config';
import { PaymentParams } from '@/protocols';

async function findPaymentByTicketId(ticketId: number) {
  return prisma.payment.findFirst({
    where: {
      ticketId,
    },
  });
}

async function createPayment(ticketId: number, params: PaymentParams) {
  return prisma.payment.create({
    data: {
      ticketId,
      ...params,
    },
  });
}

<<<<<<< HEAD
export default { findPaymentByTicketId, createPayment };
=======
export default { findPaymentByTicketId, createPayment };
>>>>>>> 37ba8f70aa6076dc5099fa09f8c936fdb684f1c5
