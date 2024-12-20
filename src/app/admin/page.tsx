"use client"

import { SubmitHandler, useForm } from 'react-hook-form'
import { signInAction } from '../lib/actions'
import { useState } from 'react'

interface IFormInput {
    usermail: string
    password: string
}


export default function AdminPage(){
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>();
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handlerRequestLogin = (data: IFormInput) => {
        signInAction(undefined, data)
            .then((resp) => {
                console.log(data)
                if (typeof resp === 'string') {
                    setErrorMessage(resp);
                  } else {
                    //console.log(resp);
                  }
            })
            .catch(err => {
                console.log('error:', err)
                setErrorMessage(err)
            })
    }

    const onSubmit: SubmitHandler<IFormInput> = data => {
        handlerRequestLogin(data)
    }


    return (

        <div className={'formsContainer'}>
            <h2 className='titleForms'>Login Admin</h2>

            <form 
            className={'formContent'}
            onSubmit={handleSubmit(onSubmit)} 
            >
                <div className={`inputForm`}> 
                    <label htmlFor='usermail' >E-mail</label>
                    <input 
                    type="text"
                    id="usermail"
                    placeholder='Enter your E-mail'
                    {...register("usermail", {
                        required: "Email is requeried!",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email format"
                        }
                    })}
                    />
                    {errors.usermail && <span className='errorMessage'>{errors.usermail.message}</span>}
                </div>

                <div className={`inputForm`}> 
                    <label htmlFor='password'>Password</label>
                    <input 
                    type="password"
                    id="password"
                    placeholder='Enter your password'
                    {...register("password", {
                        required: "Password is requerid!"
                    })}
                    />
                </div>
                {errors.password && <span className='errorMessage'>{errors.password.message}</span>}
                {errorMessage && <span className='errorMessage'>{errorMessage}</span>}
                <button type="submit" className='btn'>Submit</button>
            </form>
        </div>
    ) 
}