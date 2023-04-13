export interface Contacto{
  id: number;
  nombre: string;
  email?: string;
}

export interface Credentials{
  email: string;
  password: string;
}


export interface Laboral{
  id: number;
  lugarExperiencia: string;
  modalidadExperiencia: string;
  nombreExperiencia: string;
  periodoExperiencia: string;
  contenidoExperiencia: string;
}

export interface RespuestaAPI{
  values: Value[];
}
export interface Value{
  id: number;
  lugarExperiencia: string;
  modalidadExperiencia: string;
  nombreExperiencia: string;
  periodoExperiencia: string;
  contenidoExperiencia: string;
}
