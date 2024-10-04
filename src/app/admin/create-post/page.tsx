"use client"

import { SubmitHandler, useForm } from "react-hook-form";

interface PageRegisterPostProps {

}

interface IFormInput {
    title: string
    resume: string
    acthor: string
    paragraphs?: string
    urlImage?: string
}
export default function PageRegisterPost(props : PageRegisterPostProps){
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>();


    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
    }

    return(
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
                    cols={2}
                    rows={2}
                    id="resume"
                    placeholder="Enter your resume35"
                    {...register("resume", {
                        required: "resume is requeried!",
                    })}
                    />
                    {errors.resume && <span className="errorMessage">{errors.resume.message}</span>}
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
                {/* field dynamic for text with paragraphs separate */}

                {/* drop zone for image post */}

                <button type="submit" className='btn'>Create</button>

            </form>
        </div>
    )
}