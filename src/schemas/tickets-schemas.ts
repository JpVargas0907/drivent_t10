import Joi from 'joi';
import { InputTicketBody } from '@/protocols';

export const ticketsSchema = Joi.object<InputTicketBody>({
  ticketTypeId: Joi.number().required(),
<<<<<<< HEAD
});
=======
});
>>>>>>> 37ba8f70aa6076dc5099fa09f8c936fdb684f1c5
