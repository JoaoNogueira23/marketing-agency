"use client"

import '../../styles/layouts/stylesForms.sass'
import { SubmitHandler, useForm } from 'react-hook-form'
import {useRouter} from 'next/navigation'
import { authenticate } from '../lib/actions'

interface AdminPageProps {

}

interface IFormInput {
    usermail: string
    password: string
}


export default function AdminPage(props : AdminPageProps){
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>();

    const handlerRequestLogin = (data: IFormInput) => {
        authenticate(undefined, data)
    }

    const onSubmit: SubmitHandler<IFormInput> = data => {
        handlerRequestLogin(data)
    }

    return (

        <div className={'formsContainer'}>      
            <form 
            onSubmit={handleSubmit(onSubmit)} 
            className={'formContent'}
            //action={formAction}
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
                {/* {errorMessage && <span className='errorMessage'>{errorMessage}</span>} */}
                <button type="submit" className='btn'>Submit</button>
            </form>
        </div>
    ) 
}