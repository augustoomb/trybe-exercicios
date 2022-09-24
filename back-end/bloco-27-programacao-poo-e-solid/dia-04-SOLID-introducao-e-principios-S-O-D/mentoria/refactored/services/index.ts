import TalkerService from './talker.service';
import SpectatorService from './spectator.service';

export type ValidationError = {
  error: 'INVALID FIELD' | 'NOT FOUND' | 'CONFLICT';
  message: string;
};

export default { Talker: TalkerService, Spectator: SpectatorService };
