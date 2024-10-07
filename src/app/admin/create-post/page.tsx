"use client"

import Dropzone from "@/components/Forms/dropZone";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    title: string
    resume: string
    acthor: string
    paragraphs: string
    Image?: string
}

interface DropzoneProps {
    onFileUpload: (files: File[]) => void;
}

export default function PageRegisterPost(){
    const {register, handleSubmit, formState: {errors}, watch} = useForm<IFormInput>();
    const [errorDrop, setErrorDrop] = useState<string>("")

    const convertToBase64 = (file: any) => {
        return new Promise<string | null>((resolve, reject) => {
          const reader = new FileReader();
      
          reader.readAsDataURL(file);  // Converte a imagem para base64
      
          reader.onload = () => {
            const result = reader.result as string;  
      
            if (result) {
              resolve(result.split(',')[1]); 
            } else {
              reject(new Error("Failed to convert file to base64"));
            }
          };
      
          reader.onerror = (error) => reject(error);
        });
      };
      
      

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        
        const listParagraphs = data.paragraphs.split("\n")

        const paragraphs = listParagraphs.filter(item => item !== "")

        const imageBase64 = await convertToBase64(uploadedFiles[0])

        const formData = {...data, paragraphs: JSON.stringify(paragraphs), image: imageBase64}

        handlerRequest(formData)
    }

    const handlerRequest = async (data: IFormInput) => {
        const url = 'http://localhost:8080/api'
        // logica de autenticação (request na minha api)
        const response = await fetch(
            url + '/posts/create-post',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },    
            body: JSON.stringify(data)
            }
        )

        if(response.ok){
            alert("Post created with sucess!")
        }else{
            console.log(response)
            alert("Error on request")
        }
    }

    // configs dropzone
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const handleFileUpload = (files: File[]) => {
        setUploadedFiles(files);
    };

    return(
        <div className="contentCreatePost">
            <div className="formsContainer">
                <h2 className="titleForms">Create a New Post</h2>

                <form
                onSubmit={handleSubmit(onSubmit)} 
                className={'formContent'}
                >
                    <div className="inputForm">
                        <label htmlFor="title">Título</label>
                        <input 
                        type="text"
                        id="title"
                        placeholder="Enter your post title"
                        {...register("title", {
                            required: "Title is requeried!",
                        })} 
                        />
                        {errors.title && <span className="errorMessage">{errors.title.message}</span>}
                    </div>
                    <div className="inputForm">
                        <label htmlFor="resume">Resume</label>
                        <textarea
                        className="textarea"
                        cols={2}
                        rows={2}
                        id="resume"
                        placeholder="Enter your resume"
                        {...register("resume", {
                            required: "resume is requeried!",
                        })}
                        />
                        {errors.resume && <span className="errorMessage">{errors.resume.message}</span>}
                    </div>

                    <div className="inputForm">
                        <label htmlFor="paragraphs">paragraphs</label>
                        <textarea
                        className="textarea-medium"
                        cols={2}
                        rows={2}
                        id="paragraphs"
                        placeholder="Enter your paragraphs"
                        {...register("paragraphs", {
                            required: "paragraphs is requeried!",
                        })}
                        />
                        {errors.paragraphs && <span className="errorMessage">{errors.paragraphs.message}</span>}
                    </div>

                    <div className="inputForm">
                        <label htmlFor="acthor">Autor</label>
                        <input 
                        type="text"
                        id="acthor"
                        placeholder="Enter your post acthor"
                        {...register("acthor", {
                            required: "acthor is requeried!",
                        })} 
                        />
                        {errors.acthor && <span className="errorMessage">{errors.acthor.message}</span>}
                    </div>
                    {/* drop zone for image post */}
                    
                    <div className="inputForm">
                        <label>Upload Image</label>
                        <Dropzone 
                        onFileUpload={handleFileUpload}
                        setErrorDrop={setErrorDrop}
                        />
                        <ul>
                            {uploadedFiles.map((file) => (
                            <li key={file.name}>{file.name}</li>
                            ))}
                        </ul>
                        {errorDrop != "" && <span className="errorMessage">{errorDrop}</span>}
                    </div>
                    

                    <button type="submit" className='btn'>Create</button>

                </form>
            </div>

        </div>
        
    )
}

function convertToBase64(arg0: File) {
    throw new Error("Function not implemented.");
}
