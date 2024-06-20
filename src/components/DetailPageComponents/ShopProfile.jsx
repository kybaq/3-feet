import locationIcon from "../../assets/Icons/pngegg.png";

function ShopProfile({ title, address }) {
  return (
    <div>
      <div className="flex flex-col gap-y-3">
        <h2 className="text-2xl font-semibold text-blue-800">{title}</h2>
        <div className="flex items-center gap-2">
          <img src={locationIcon} alt="📍" className="w-3 h-[18px]" />
          {address}
        </div>
      </div>
    </div>
  );
}

export default ShopProfile;
