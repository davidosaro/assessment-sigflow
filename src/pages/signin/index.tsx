
import { useState } from 'react';
import TextField from '../../components/inputs/textfield'
import Button from '../../components/inputs/button';
import Notify from '../../components/utils/Notify'
import validateInput from '../../utils/validator'
import { Form, useNavigate } from "react-router-dom";
import { setUser } from '../../utils/localStorage';
import request from '../../api/apiService.ts';

export default function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({email: "", password: ""});

  const updateForm = (params: string, value: string) => {
    setForm({...form, [params]: value})
  }
  const submitForm = async () => {
    try {
      setLoading(true);
      // validations
      validateInput("email", form.email, `email cannot be blank`)
      validateInput("password", form.password, `password cannot be blank`)
      // timer
      const _timer = setTimeout(async ()=> {
        setLoading(false)
        // verifications
        clearTimeout(_timer)
        const response = await request(form);
        const result = await response.json()
        console.log(result)
        if (result.status == true) {
          Notify(result.message, 'success');
          navigate("/admin");
          setUser(result.data);
        } else {
          Notify(result.message, 'error')
        }
      }, 1000)
    } catch (error: unknown) {
      Notify((error as Error).message, 'error');
      setLoading(false);
    }
  }
  return (
    <section className="flex justify-center ">
      <div className='w-full flex flex-col items-center'>
        <div className="border-[1px] bg-white rounded-lg max-w-[480px] w-full min-h-[427px] p-[30px] mb-[10px]">
          <header className="text-center mb-[20px]">
            <h1 className="text-[24px] font-primary text-primary">Welcome back!</h1>
            <p className="text-grey-300 text-[14px] font-normal font-primary">Sign in to access your account</p>
          </header>
          <form className='space-y-[12px]'>
            <div className='space-y-[6px]'>
              <label className='font-primary text-primary text-[14px]'>Email</label>
              <TextField text='' type="email" value={form.email} onChange={(e) => updateForm("email", e.target.value)}/>
            </div>
            <div className='space-y-[6px]'>
              <label className='font-primary text-primary text-[14px] mb-[6px]'>Password</label>
              <TextField text='' type='password' icon="eye" value={form.password} onChange={(e) => updateForm("password", e.target.value)}/>

            </div>
            <div className='font-primary font-normal text-[14px] text-success cursor-not-allowed w-fit pb-[20px]'>Forgot Password?</div>

            <Button 
              text="Sign In"
              loading={loading}
              onClick={submitForm}
            />
          </form>
          <div className='font-primary text-[16px] text-grey-300 text-center my-[20px]'>
            OR
          </div>
          <div className='flex flex-col justify-center items-center gap-[22px] px-0 sm:px-[16px]'>
            <div className='flex flex-col sm:flex-row gap-[22px] justify-center w-full sm:w-fit'>
            <Button 
                text="Sign in with Github"
                type='outline'
                icon="github"
                className='min-w-fit  !p-[3px_15px]'
                // onClick={submitForm}
              />
              <Button 
                text="Sign in with Google"
                type='outline'
                className='min-w-fit !p-[3px_15px]'
                icon='google'
                // onClick={submitForm}
              />
            </div>
            <Button 
              text="Sign in with Google"
              type='outline'
              icon='key'
              className='min-w-[137px] w-full sm:w-fit !p-[3px_15px]'
              // className='w-[50%]'
              // onClick={submitForm}
            />
          </div>
        </div>
        <div className='text-[14px] text-primary font-primary text-center'>
          Don't have an account? 
          <strong className='ml-[4px] font-medium text-success cursor-not-allowed'>Sign Up</strong>
        </div>
      </div>
    </section>
  )
}