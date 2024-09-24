"use client"

import '../../styles/layouts/stylesForms.sass'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'

interface AdminPageProps {

}

interface IFormInput {
    usermail: string
    password: string
}

const defaultValue: IFormInput = {
    usermail: '',
    password: ''
}

export default function AdminPage(props : AdminPageProps){
    const [loginError, setLoginError] = useState<string>('')
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>();

   
    const handlerRequestLogin = (data: IFormInput) => {
        const url = 'http://localhost:8080/api'

        const payloadJSON ={
            username: data.usermail,
            password: data.password
        }
    
        fetch(
            url + '/user/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
              },    
              body: new URLSearchParams({
                  'username': data.usermail,
                  'password': data.password,
                  'grant_type': 'password'
              })
            }
        )
            .then((response) => {
                if(response.status == 200){
                    alert("Login realizado com sucesso")
                }else if(response.status == 401){
                    alert("User not registered!")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const onSubmit: SubmitHandler<IFormInput> = data => {
        handlerRequestLogin(data)
    }

    
    return (

        <div className={'formsContainer'}>      
            <form onSubmit={handleSubmit(onSubmit)} className={'formContent'}>
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
                    {errors.usermail && <span>{errors.usermail.message}</span>}
                </div>

                <div className={`inputForm`}> 
                    <label htmlFor='password'>Password</label>
                    <input 
                    type="text"
                    id="password"
                    placeholder='Enter your password'
                    {...register("password", {
                        required: "Password is requerid!"
                    })}
                    />
                </div>
                {errors.password && <span>{errors.password.message}</span>}
                <button type="submit" className='btn'>Submit</button>
            </form>
        </div>
    ) 
}