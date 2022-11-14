import {Typography,TextField, Button, FormControl, CircularProgress,Box, Alert, IconButton, InputBase } from '@mui/material'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { useState } from "react"
import { useRouter } from "next/router"
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import formatErrorMessage from '../utils/formatErrorMessage';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginLoading, setLoginLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const {push} = useRouter()

  const login = async (e) =>{
    e.preventDefault()
    setLoginLoading(true)

    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password )
      push('/')
      setUser(userCredential)
    }
    catch(err){
      toast.error(formatErrorMessage(err.message))
    }
    finally{
      setLoginLoading(false)
    }
  }

  return (
    <Box >

        <Typography variant="h3" align='center' sx={{fontSize: 25, fontWeight: 'bold', mb:2, color:'primary.dark'}} >
          Login
        </Typography>

        <FormControl component='form' fullWidth>

          <TextField required id="outlined-required" label="Email Address" sx={{mb: 2 }} fullWidth value={email} onChange={(e)=>{setEmail(e.target.value)}}
          />

          <Box sx={{display: 'flex', borderRadius: 1, p:0.9, borderWidth: passwordFocus ? 2 : 1, borderStyle: 'solid', borderColor : passwordFocus ? 'primary.main' :'text.disabled' }} >
            <InputBase  required id="outlined-password-input" placeholder="Password *" type={passwordVisibility ? "text" : "password" } autoComplete="current-password" fullWidth sx={{flex: 1, px:1}} value={password} onChange={(e)=>{setPassword(e.target.value)}} onFocus={()=>{setPasswordFocus(true)}} onBlur={()=>{setPasswordFocus(false)}}/>
            <IconButton sx={{width: 'max-content', height: 'max-content'}} onClick={()=>{setPasswordVisibility(!passwordVisibility)}}>
              {passwordVisibility? <VisibilityOffRoundedIcon/> : <VisibilityRoundedIcon/>}
            </IconButton>  
          </Box>

          <Box sx={{position: 'relative'}}>

            <Button variant="contained"  align='center' type='submit' sx={{my: 2, py: 2, bgcolor:'primary.dark', color: 'primary'}} onClick={login} disabled={loginLoading} fullWidth>Login</Button>

            {loginLoading && (
              <CircularProgress
                size={24}
                sx={{color: 'success.main',position: 'absolute',top: '50%',left: '50%',marginTop: '-12px',marginLeft: '-12px',
                }}
            />
            )}

          </Box>
        
        </FormControl>
    </Box>
  )
}

export default Login