import { useEffect, useState } from "react";
import getCroppedImg from "./util.js";

export default function useGetImg( img, Area){
  const [image, setImage] = useState(img)
  const getImg = async (Area) => {
    try {
      const mg = await getCroppedImg(img, Area);
      setImage(mg)
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => { getImg( Area)}, [])
  return image
}