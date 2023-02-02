import { useState } from "react";

import KillFeed from "./KillFeed";
import Actions from "./Actions";

import mapImage from "../../assets/map.jpeg";

import { ReactComponent as AmmoIcon } from "../../assets/weapons/ammo.svg";

import { AvatarInfo, Container, Footer, Header, Hud, Map, WeaponInfo } from "./styles";

import { Weapon, WEAPONS } from "../../types/weapons";

const defaultWeapon = WEAPONS[0];

const Dashboard: React.FC = () => {
  const [weapon, setWeapon] = useState<Weapon>(defaultWeapon);
  const [currentAmmo, setCurrentAmmo] = useState(defaultWeapon.ammoCapacity);
  const [totalAmmo, setTotalAmmo] = useState(defaultWeapon.totalAmmo);

  return (
    <Container>
      <Hud>
        <Header>
          <KillFeed />

          <Map src={mapImage} alt="" />
        </Header>

        <div></div>

        <Footer>
          <AvatarInfo></AvatarInfo>
          
          <WeaponInfo>
            <div>
              {/* TO FIX */}
              <img src={weapon.icon} alt={weapon.name} />

              <span>
                <AmmoIcon />
                {currentAmmo}/{totalAmmo}
              </span>
            </div>
          </WeaponInfo>
        </Footer>
      </Hud>

      <Actions
        weapon={weapon}
        setWeapon={setWeapon}
        currentAmmo={currentAmmo}
        setCurrentAmmo={setCurrentAmmo}
        totalAmmo={totalAmmo}
        setTotalAmmo={setTotalAmmo}
      />
    </Container>
  );
};

export default Dashboard;