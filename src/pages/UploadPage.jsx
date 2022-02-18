import React, { useState } from 'react'
import { Dropzone, FileItem } from "@dropzone-ui/react";
import axios from 'axios';

const url = "https://api.cloudinary.com/v1_1/dauddi/auto/upload";
const uploadPreset = "cqr4xiiq";

const UploadPage = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [coverImageFiles, setCoverImageFiles] = useState([]);
  const [uploadedAudioFiles, setUploadedAudioFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }  
  const handleArtistChange = (e) => {
    setArtist(e.target.value);
  }  
  const handleCoverImageChange = (uploadedImage) => {
    setCoverImageFiles(uploadedImage);
  }
  const handleAudioFileChange = (uploadedAudio) => {
    setUploadedAudioFiles(uploadedAudio);
  }
  const handleDeleteImageFile = () => {
    setCoverImageFiles([]);
  }
  const handleDeleteAudioFile = () => {
    setUploadedAudioFiles(null);
  }

  const uploadFileToCloudinary = async (file, url, presets) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_presets", presets);
     
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    })
    const data = await response.json();
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const imageResponse = await uploadFileToCloudinary(coverImageFiles[0].file, url, uploadPreset)
    const audioResponse = await uploadFileToCloudinary(uploadedAudioFiles[0].file, url, uploadPreset)

    console.log("img", imageResponse);
    console.log("audio", audioResponse);
    setIsSubmitting(false);
  }

  return (
    <div className='w-[90%] md:w-3/4 text-left m-4 mb-36 md:m-8'>
      <h2 className="text-xl md:text-3xl pl-5 md:pl-0 md:text-center text-indigo-900 font-extrabold" >Upload Music</h2>

      <form action="submit" className="w-[90%] mx-auto mt-10 " >
        <div>
          <label htmlFor="title" className="text-lg font-extrabold text-indigo-900 " > Song Title : </label>
          <div className="w-full mt-4" >
            <input type="text" className="w-full md:w-[100%] xl:w-[65%] p-4 rounded-lg font-semibold text-md md:text-lg border-indigo-400 " value={title} onChange={handleTitleChange} required />
          </div>
        </div>
          
        <div className='mt-5' >
          <label htmlFor="title" className="text-lg font-extrabold text-indigo-900" > Artist Name : </label>
          <div className='w-full mt-4' >
            <input type="text" className="w-full md:w-[100%] xl:w-[65%] p-4 rounded-lg font-semibold text-md md:text-lg border-indigo-400" value={artist} onChange={handleArtistChange} required />
          </div>
        </div>

        <div className='mt-5' >
          <label htmlFor="cover" className="text-lg font-extrabold text-indigo-900"> Upload Cover Image : </label>
          <div className='w-full md:w-[100%] xl:w-[65%] mt-4 ' >
            <Dropzone 
            maxFiles={1}
            onChange={handleCoverImageChange}
            value={coverImageFiles}
            accept="image/*"
            required
            >
              { coverImageFiles.map(file => <FileItem key={file.id} {...file} onDelete={handleDeleteImageFile} preview />) }
            </Dropzone>
          </div>
        </div>
        
        <div className='mt-5' >
          <label htmlFor="cover" className="text-lg font-extrabold text-indigo-900" > Upload Audio File : </label>
          <div className='w-full md:w-[100%] xl:w-[65%] mt-4' >
            <Dropzone
            onChange={handleAudioFileChange} 
            maxFiles={1}
            value={uploadedAudioFiles}
            accept="audio/*"
            required
            >
              { uploadedAudioFiles.map( file => <FileItem key={file.id} {...file} onDelete={handleDeleteAudioFile} info /> ) }
            </Dropzone>
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} onClick={handleSubmit} className="mt-6 bg-indigo-800 p-4 w-full md:w-[100%] xl:w-[65%] text-white font-extrabold text-lg hover:bg-indigo-900 rounded-md mb-[10%] " >
          Submit
        </button>
      </form>
    </div>
  )
}

export default UploadPage