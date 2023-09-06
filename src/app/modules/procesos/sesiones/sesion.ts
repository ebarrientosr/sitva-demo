import { Agenda } from "src/app/share/model/agenda";
import { EstadoSesion } from "../../mantenimiento/estado-sesion/estado-sesion";

export class Sesion {
  public id?: number;
  public tipoSesion?: string;
  public titulo?: string;
  public fechaInicio?: Date;
  public fechaFin?: Date;
  public estado?: EstadoSesion;
  public agendasVinculadas: Agenda[] = [];
}
