import { useEffect, useState } from "react";
import { fetchClubs } from "../../apis/supabase/supabase.api";
import IconButton from "../IconButton/IconButton";
function ClubButtons() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const getClubs = async () => {
      const data = await fetchClubs();
      setClubs(data);
    };
    getClubs();
  }, []);

  return (
    <div className="grid grid-rows-2  grid-flow-col justify-center items-center mt-3 gap-5 p-8 ">
      {clubs.map((club) => (
        <IconButton key={club.id} src={club.logo_url} clubId={club.id} />
      ))}
    </div>
  );
}

export default ClubButtons;
