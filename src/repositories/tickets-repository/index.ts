<<<<<<< HEAD
import { Ticket, TicketStatus, TicketType } from '@prisma/client';
=======
import { TicketStatus, TicketType } from '@prisma/client';
>>>>>>> 37ba8f70aa6076dc5099fa09f8c936fdb684f1c5
import { prisma } from '@/config';
import { CreateTicketParams } from '@/protocols';

async function findTicketTypes(): Promise<TicketType[]> {
  return prisma.ticketType.findMany();
}

<<<<<<< HEAD
async function findTicketByEnrollmentId(enrollmentId: number): Promise<
  Ticket & {
    TicketType: TicketType;
  }
> {
  return prisma.ticket.findFirst({
    where: { enrollmentId },
    include: {
      TicketType: true, //join
=======
async function findTicketByEnrollmentId(enrollmentId: number) {
  return prisma.ticket.findFirst({
    where: { enrollmentId },
    include: {
      TicketType: true
>>>>>>> 37ba8f70aa6076dc5099fa09f8c936fdb684f1c5
    },
  });
}

async function createTicket(ticket: CreateTicketParams) {
  return prisma.ticket.create({
    data: ticket,
  });
}

async function findTickeyById(ticketId: number) {
  return prisma.ticket.findFirst({
    where: {
      id: ticketId,
    },
    include: {
      Enrollment: true,
    },
  });
}

async function findTickeWithTypeById(ticketId: number) {
  return prisma.ticket.findFirst({
    where: {
      id: ticketId,
    },
    include: {
      TicketType: true,
    },
  });
}

async function ticketProcessPayment(ticketId: number) {
  return prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      status: TicketStatus.PAID,
    },
  });
}

<<<<<<< HEAD
async function findValidTicketForBooking(userId: number) {
  return await prisma.ticket.findFirst({
    where: {
      Enrollment: { userId },
      TicketType: { isRemote: false, includesHotel: true },
      status: 'PAID',
    },
  });
}

=======
>>>>>>> 37ba8f70aa6076dc5099fa09f8c936fdb684f1c5
export default {
  findTicketTypes,
  findTicketByEnrollmentId,
  createTicket,
  findTickeyById,
  findTickeWithTypeById,
  ticketProcessPayment,
<<<<<<< HEAD
  findValidTicketForBooking,
};
=======
};
>>>>>>> 37ba8f70aa6076dc5099fa09f8c936fdb684f1c5
