import { Skull } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';

import { ReactComponent as AkIcon } from "../../assets/weapons/ak.svg";
import { ReactComponent as M4Icon } from "../../assets/weapons/m4.svg";
import { ReactComponent as SniperIcon } from "../../assets/weapons/sniper.svg";

import { ActionsContainer } from "./styles";

import { Weapon, WEAPONS } from '../../types/weapons';

interface ActionsProps {
  weapon: Weapon;
  setWeapon: Dispatch<SetStateAction<Weapon>>;
  currentAmmo: number;
  setCurrentAmmo: Dispatch<SetStateAction<number>>;
  totalAmmo: number;
  setTotalAmmo: Dispatch<SetStateAction<number>>;
}

const Actions: React.FC<ActionsProps> = ({
  weapon,
  setWeapon,
  currentAmmo,
  setCurrentAmmo,
  totalAmmo,
  setTotalAmmo
}) => {
  const handleShoot = () => {
    currentAmmo !== 0 && setCurrentAmmo((state) => state - 1);
  }

  const handleReload = () => {
    const ammoToReload = weapon.ammoCapacity - currentAmmo;

    if (totalAmmo > ammoToReload) {
      setCurrentAmmo(weapon.ammoCapacity);
      setTotalAmmo((state) => state - ammoToReload);
    } else {
      setCurrentAmmo((state) => state + totalAmmo);
      setTotalAmmo(0);
    }
  }

  const handleWeaponChange = (weaponName: string) => {
    const weapon = WEAPONS.find(({name}) => name === weaponName);

    if(!weapon) return;

    setWeapon(weapon);
    setCurrentAmmo(weapon.ammoCapacity);
    setTotalAmmo(weapon.totalAmmo);
  };

  return (
    <ActionsContainer>
      <form>
        <input type="text" />
        <span>matou</span>
        <input type="text" />
        <span>com</span>

        <div>
          <AkIcon />
          <M4Icon />
          <SniperIcon />
        </div>

        <button type="submit"><Skull /></button>
      </form>

      <div>
        <button type="button" onClick={handleShoot}>Shoot</button>
        <button type="button" onClick={handleReload}>Reload</button>
      </div>

      <div>
        <button type="button" onClick={() => handleWeaponChange('ak')}><AkIcon /></button>
        <button type="button" onClick={() => handleWeaponChange('m4')}><M4Icon /></button>
        <button type="button" onClick={() => handleWeaponChange('sniper')}><SniperIcon /></button>
      </div>
    </ActionsContainer>
  );
};

export default Actions;