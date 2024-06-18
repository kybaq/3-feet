import Doosan from "../../assets/Logos/Doosan_Bears.png";
import Hanhwa from "../../assets/Logos/Hanhwa_Eagles.png";
import KIA from "../../assets/Logos/KIA_Tigers.png";
import KT_wiz from "../../assets/Logos/KT_Wiz.png";
import Kiwoom from "../../assets/Logos/Kiwoom.png";
import LG_Twins from "../../assets/Logos/LG_Twins.png";
import Lotte_Giants from "../../assets/Logos/Lotte_Giants.png";
import NC_Dinos from "../../assets/Logos/NC_Dinos.png";
import SSG_Landers from "../../assets/Logos/SSG_Landers.png";
import Samsung from "../../assets/Logos/Samsung_Lions.png";
import IconButton from "../IconButton/IconButton";
function ClubButtons() {
  const LogoList = [Doosan, Samsung, Hanhwa, KIA, Kiwoom, KT_wiz, LG_Twins, Lotte_Giants, NC_Dinos, SSG_Landers];

  return (
    <div className="grid grid-rows-2 grid-flow-col justify-center items-center mt-3 gap-5 ">
      {LogoList.map((clubName) => (
        <IconButton key={clubName} src={clubName} />
      ))}
    </div>
  );
}

export default ClubButtons;
