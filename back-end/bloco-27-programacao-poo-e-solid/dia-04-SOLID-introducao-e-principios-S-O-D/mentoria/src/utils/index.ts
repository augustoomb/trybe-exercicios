import PersonValidation from './person.validation';
import TalkerValidation from './talker.validation';
import SpectatorValidation from './spectator.validation';

export type ValidationError = {
  error: 'INVALID FIELD' | 'NOT FOUND' | 'CONFLICT';
  message: string;
};

export default {
  Person: PersonValidation,
  Talker: TalkerValidation,
  Spectator: SpectatorValidation,
};
