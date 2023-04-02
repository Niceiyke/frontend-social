import uuid from "react-uuid";

const ImageList = ({ images }) => {
  let img = images?.length;


  return images && img > 1
    ? images?.map((image) => {
        return (
          <img
            key={uuid(2)}
            src={`${image.image}`}
            className="h-auto w-2/4 mt-1 mb-1 pr-1"
          />
        );
      })
    : images?.map((image) => {
        return (
          <img
            key={uuid(2)}
            src={`${image.image}`}
            className="h-auto w-full mt-1 mb-1 pr-1"
           
          />
        );
      });
};

export default ImageList;
