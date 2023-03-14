import classicMatt from "../../assets/images/Classic_Matt.webp";
import classicAcryl from "../../assets/images/Acryl_Classic.webp";
import primeMetall from "../../assets/images/Prime_Metall.webp";
import { Material } from "../../types/Material";

export const materials: Array<Material> = [
  {
    id: 1,
    name: "Classic Matt",
    image: classicMatt,
    description: ["Brightness (7/10)", "Easy to clean (7/10)", "Impact and scratch resistant (8/10)"]
  },
  {
    id: 2,
    name: "Lotus Seidenmatt",
    image: classicMatt,
    description: ["Brightness (8/10)", "Easy to clean (10/10)", "Impact and scratch resistant (9/10)"]
  },
  {
    id: 3,
    name: "HD shine",
    image: classicMatt,
    description: ["Brightness (10/10)", "Easy to clean (10/10)", "Impact and scratch resistant (9/10)"]
  },
  {
    id: 4,
    name: "Metal brushed",
    image: primeMetall,
    description: ["Brightness (8/10)", "Easy to clean (9/10)", "Impact and scratch resistant (10/10)"]
  },
  {
    id: 5,
    name: "Classic",
    image: classicAcryl,
    description: ["Brightness (9/10)", "Easy to clean (7/10)", "Impact and scratch resistant (7/10)"]
  }
]