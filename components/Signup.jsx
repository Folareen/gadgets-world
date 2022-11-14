import { Typography, TextField, Button, FormControl, CircularProgress,Box, IconButton, InputBase } from '@mui/material'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { useState } from "react"
import { useRouter } from "next/router"
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import formatErrorMessage from '../utils/formatErrorMessage';

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signupLoading, setSignupLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const {push} = useRouter()

  const signUp = async (e) =>{
  e.preventDefault()
  setSignupLoading(true)

  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password )
    push('/')
    setUser(userCredential)
    await updateProfile(auth.currentUser, {
    displayName: name})
    }
    catch(err){
      toast.error(formatErrorMessage(err.message))
    }
    finally{
      setSignupLoading(false)
    }
  }

  return (
    <Box >

        <Typography variant="h3" align='center' sx={{fontSize: 25, fontWeight: 'bold', mb:2, color:'primary.dark'}} >
          Sign Up 
        </Typography>

        <FormControl component='form' fullWidth>

          <TextField id="outlined" label="Name" required  fullWidth onChange={(e) => {setName(e.target.value)}} value={name}
          />
          <TextField required id="outlined-required" label="Email Address" sx={{my: 2}} fullWidth onChange={(e) => {setEmail(e.target.value)}} value={email}
          />

          <Box sx={{display: 'flex', borderRadius: 1, p:0.9, borderWidth: passwordFocus ? 2 : 1, borderStyle: 'solid', borderColor : passwordFocus ? 'primary.main' :'text.disabled' }} >
            <InputBase  required id="outlined-password-input" placeholder="Password *" type={passwordVisibility ? "text" : "password" } autoComplete="current-password" fullWidth sx={{flex: 1, px:1}} value={password} onChange={(e)=>{setPassword(e.target.value)}} onFocus={()=>{setPasswordFocus(true)}} onBlur={()=>{setPasswordFocus(false)}}/>
            <IconButton sx={{width: 'max-content', height: 'max-content'}} onClick={()=>{setPasswordVisibility(!passwordVisibility)}}>
              {passwordVisibility? <VisibilityOffRoundedIcon/> : <VisibilityRoundedIcon/>}
            </IconButton>  
          </Box>

          <Box sx={{position: 'relative'}}>

            <Button variant="contained"  align='center' type='submit' sx={{my: 2, py: 2, bgcolor:'primary.dark', color: 'primary'}} onClick={signUp } disabled={signupLoading} fullWidth>Sign Up</Button>

            {signupLoading && (
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

export default Signup