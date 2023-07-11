import Cropper from "react-easy-crop";
import {useCallback, useState} from "react";

import style from './ImageCropper.module.scss';
import getCroppedImg from "../../utils/util.js";
import btn from "../Button/Button.module.scss";

export default function ImageCropper({ IMAGE, aspect, shape,setImageURL, setfile, setIsOpen }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const cropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, [])

  const cropImage = async () => {
    try {
      const { file, url } = await getCroppedImg(
          IMAGE,
          croppedAreaPixels,
      );
      setImageURL(url);
      setfile(file);
      setIsOpen(false);

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className={style.container}>
        <Cropper
            onCropChange={setCrop}
            crop={crop}
            image={IMAGE}
            zoom={zoom}
            aspect={aspect}
            onZoomChange={setZoom}
            onCropComplete={cropComplete}
            cropShape={shape}
        />
      </div>
      <button className={`${btn.btn} ${btn.primary} ${style.btn}`} onClick={cropImage}>Done</button>
    </>
  );
}
