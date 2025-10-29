import { IncidentInterface } from '../../intranet/models/incident.interface';

declare global {
  interface Window {
    electronAPI: {
      getAllIncidents: () => Promise<IncidentInterface[]>;
    };
  }
}
