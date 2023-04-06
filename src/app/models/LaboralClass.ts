export class LaboralClass{
  private _id: number;
  private _lugarExperiencia: string;
  private _modalidadExperiencia: string;
  private _nombreExperiencia: string;
  private _periodoExperiencia: string;
  private _contenidoExperiencia: string;


  constructor(id: number, lugarExperiencia: string, modalidadExperiencia: string, nombreExperiencia: string, periodoExperiencia: string, contenidoExperiencia: string) {
    this._id = id;
    this._lugarExperiencia = lugarExperiencia;
    this._modalidadExperiencia = modalidadExperiencia;
    this._nombreExperiencia = nombreExperiencia;
    this._periodoExperiencia = periodoExperiencia;
    this._contenidoExperiencia = contenidoExperiencia;
  }


  set id(value: number) {
    this._id = value;
  }

  set lugarExperiencia(value: string) {
    this._lugarExperiencia = value;
  }

  set modalidadExperiencia(value: string) {
    this._modalidadExperiencia = value;
  }

  set nombreExperiencia(value: string) {
    this._nombreExperiencia = value;
  }

  set periodoExperiencia(value: string) {
    this._periodoExperiencia = value;
  }

  set contenidoExperiencia(value: string) {
    this._contenidoExperiencia = value;
  }

  get id(): number {
    return this._id;
  }

  get lugarExperiencia(): string {
    return this._lugarExperiencia;
  }

  get modalidadExperiencia(): string {
    return this._modalidadExperiencia;
  }

  get nombreExperiencia(): string {
    return this._nombreExperiencia;
  }

  get periodoExperiencia(): string {
    return this._periodoExperiencia;
  }

  get contenidoExperiencia(): string {
    return this._contenidoExperiencia;
  }
}
