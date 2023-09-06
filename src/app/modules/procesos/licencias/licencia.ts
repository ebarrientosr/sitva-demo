import { Agenda } from "src/app/share/model/agenda";
import { EstadoSesion } from "../../mantenimiento/estado-sesion/estado-sesion";

export class Licencia {
  public id?: number;
  public codigo?: string;
  public fechaInicio?: Date;
  public fechaFin?: Date;
  public grupoParlamentario?: string;
  public persona?: string;
  public tipoLicencia?: string;
  public numeroDocumento?: string;
  public descripcion?: string;
  public fechaRecepcion?: Date;
  public consejoDirectivo?: string;
}
