import { ReactComponent as AkIcon } from "../assets/weapons/ak.svg";
import { ReactComponent as M4Icon } from "../assets/weapons/m4.svg";
import { ReactComponent as SniperIcon } from "../assets/weapons/sniper.svg";

export interface Weapon {
  name: string;
  ammoCapacity: number;
  totalAmmo: number;
  icon: string;
}

export const WEAPONS: Weapon[] = [
  {
    name: 'ak',
    ammoCapacity: 30,
    totalAmmo: 150,
    icon: AkIcon,
  },
  {
    name: 'm4',
    ammoCapacity: 30,
    totalAmmo: 150,
    icon: M4Icon,
  },
  {
    name: 'sniper',
    ammoCapacity: 5,
    totalAmmo: 30,
    icon: SniperIcon,
  },
];