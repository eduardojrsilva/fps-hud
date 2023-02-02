import { ReactComponent as AkIcon } from "../../assets/weapons/ak.svg";
import { ReactComponent as M4Icon } from "../../assets/weapons/m4.svg";
import { ReactComponent as SniperIcon } from "../../assets/weapons/sniper.svg";

import { KillFeedContainer } from "./styles";

const KillFeed: React.FC = () => {
  return (
    <KillFeedContainer>
      <span>
        t1r4na
        <AkIcon />
        xossin
      </span>

      <span>
        EdgardoBalza
        <M4Icon />
        t1r4na
      </span>

      <span>
        b0r3sca
        <SniperIcon />
        quexa
      </span>

      <span>
        b0r3sca
        <SniperIcon />
        EdgardoBalza
      </span>
    </KillFeedContainer>
  );
};

export default KillFeed;