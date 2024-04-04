function CategoryCard({ cards }) {
  // console.log(cards)
  return (
    <div className="h-[250px] relative mt-8 rounded-md overflow-hidden bg-gradient-to-b from-[#0f375a] via-[#8a9196]  to-[#003B6d] inset-0 opacity-[90%]">
      <img
        className="w-full h-[250px] object-cover object-center mix-blend-overlay"
        src={cards.photoImage}
        alt="imageIcon"
      />

      <div className="absolute text-start top-[190px] ml-2">
        <p className="text-[18px] text-white font-bold ">{cards.name}</p>
        <p className="text-[16px] text-white font-bold ">{cards.title}</p>
      </div>
    </div>
  );
}

// flex flex-col lg:flex  lg:w-[400px] lg-h-[210px] lg:flex-col gap-8 p-2 mt:p-0 shadow-md bg-green-400

export default CategoryCard;
