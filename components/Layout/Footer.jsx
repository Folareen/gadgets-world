import { Typography, Box, Link, Paper } from "@mui/material"
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Footer = () => {
  return (
    <Paper component='footer' sx={{position: 'absolute', bottom: 0, textAlign: 'center', width: '100%', backgroundColor: 'light.main', p: 2}} elevation={8}>

      <Box sx={{display: 'flex', justifyContent: {xs: 'center', md: 'space-between'}, my: 1, width: '90%', maxWidth: '1000px', mx: 'auto', flexWrap: 'wrap'}}>

        <Box>
          <Typography sx={{color: 'darkblue', textAlign: 'center', fontSize: 18}} >
              Gadgets World &copy; 2022
          </Typography>
          <Typography sx={{color: 'dark.main'}}>
              Built by 
              <Link href="https://twitter.com/_folareen_" sx={{ml: 0.5}}>
                  <span>
                  Folareen
                </span>
              </Link>
          </Typography>
        </Box>


        <Box sx={{fontSize: 16, color: 'dark.main' , textAlign: 'left', my: {xs: 4, md: 0}}}>
          <Typography sx={{fontSize: 18, textAlign: 'center'}}>
            Contact us
          </Typography>
          <Typography sx={{display: 'flex', alignItems: 'center', width: 'max-content'}}>
            <LocationOnRoundedIcon sx={{mr: 1}} fontSize="small" /> 1, lorem street,ipsum,Nigeria
          </Typography>
          <Typography sx={{display: 'flex', alignItems: 'center', width: 'max-content'}}>
            <CallRoundedIcon sx={{mr: 1}} fontSize="small" /> +2348060127619
          </Typography>
          <Typography sx={{display: 'flex', alignItems: 'center', width: 'max-content'}}>
            <EmailRoundedIcon sx={{mr: 1}} fontSize="small" /> supportlorem@gadgetsworld.com
          </Typography>
        </Box>

        <Box sx={{fontSize: 16, color: 'dark.main' , textAlign: 'left'}}>
          <Typography sx={{fontSize: 18, textAlign: 'center'}}>
            Support
          </Typography>
          <Typography>
            FAQ
          </Typography>
          <Typography>
            Feedback and complaints
          </Typography>
        </Box>

      </Box>

    </Paper>
  )
}

export default Footer