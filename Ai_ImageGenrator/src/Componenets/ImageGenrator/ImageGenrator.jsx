import React from 'react'
import './ImageGenrator.css'
import default_Image from "../Assets/default_Img.jfif"
import { useState } from 'react'
import { useRef } from 'react'

export const ImageGenrator = () => {

  const imageGenrator = async () => {
    if (inputRef.current.value === "") {
      alert("Please enter a description!");
      return;
    }
    const query = inputRef.current.value;
    const response = await fetch(
      // " Add YOUR  API KEY HERE  "
       );

    if (!response.ok) {
      console.error("Failed to fetch image");
      return;
    }

    const data = await response.json();
    setImage_Url(data.urls?.regular || "/");
  };

  const [image_Url, setImage_Url] = useState("/");
  let inputRef = useRef(null);

  return (
    <div className='ai-image-genrator'>
      <div className="header">AI Image <span> Generator</span></div>
      <div className="img-loading">
        <div className="image">
          <img   src={image_Url === "/" ? default_Image : image_Url} alt='img' className='mx-auto mb-5  w-auto h-auto' />
        </div>
        <div className="search-box">
          <input type="text" ref={inputRef} className='search-input' placeholder='Describe What You Want to See' />
          <button className="generate-btn" onClick={imageGenrator}>Generate</button>
        </div>
      </div>
    </div>
  );
};
