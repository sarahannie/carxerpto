function BrandCard({ post }) {
  console.log(post);
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex lg:flex-col p-2 mt:p-0">
        <div className="w-[80%] h-[80%] mx-auto lg:w-[280px] lg:h-[210px] bg:green-500">
          <img
            className="w-full h-full object-cover"
            src={post.photo}
            alt="imageIcon"
          />
        </div>
        <p className="text-[16px] font-bold ">{post.title}</p>
      </div>
    </div>
  );
}
export default BrandCard;
