"use client"

import Dropzone from "@/components/Forms/dropZone";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    title: string
    resume: string
    acthor: string
    paragraphs: string
}

interface DropzoneProps {
    onFileUpload: (files: File[]) => void;
}

export default function PageRegisterPost(){
    const {register, handleSubmit, formState: {errors}, watch} = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        const formData = new FormData()

        formData.append("title", data.title)
        formData.append("resume", data.resume)
       
        const listParagraphs = data.paragraphs.split("\n")

        const paragraphs = listParagraphs.filter(item => item !== "")

        formData.append("paragraphs",JSON.stringify(paragraphs))

        formData.append("image", uploadedFiles[0])

        formData.append("acthor", data.acthor)
        handlerRequest(formData)
    }

    const handlerRequest = async (data: FormData) => {

        const url = 'http://localhost:8000/api'
        // logica de autenticação (request na minha api)
        const response = await fetch(
            url + '/posts/create-post',
            {
            method: 'POST',    
            body: data
            }
        )

        if(response.ok){
            alert("Post created with sucess!")
        }else{
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
                        />
                        <ul>
                            {uploadedFiles.map((file) => (
                            <li key={file.name}>{file.name}</li>
                            ))}
                        </ul>
                        
                    </div>
                    

                    <button type="submit" className='btn'>Create</button>

                </form>
            </div>

        </div>
        
    )
}