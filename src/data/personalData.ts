export interface RedesSociales {
  github: string;
  linkedin: string;
}

export interface Skill {
  name: string;
  level: number; // porcentaje (0-100)
}

export interface PersonalData {
  nombre: string;
  fullName: string;
  profesion: string;
  bio: string;
  ubicacion: string;
  email: string;
  redes: RedesSociales;
}

const personalData: PersonalData = {
  nombre: 'Nicolás Herrera',
  fullName: 'Nicolas Herrera Vilches',
  profesion: 'FullStack Developer',
  bio: 'Apasionado por crear experiencias digitales modernas y atractivas.',
  ubicacion: 'Santiago, Chile',
  email: 'n.herrera.vilches@gmail.com',
  redes: {
    github: 'https://github.com/enemyers',
    linkedin: 'https://www.linkedin.com/in/nicol%C3%A1s-herrera-vilches-449284b4/'
  },
};

export default personalData;
