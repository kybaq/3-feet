function Banner({ banner_url }) {
  return (
    <>
      {banner_url !== 0 && (
        <div className="h-[190px] overflow-hidden flex justify-center items-center">
          <img src={banner_url} className="max-w-full h-auto scale-125" />
        </div>
      )}
    </>
  );
}

export default Banner;
