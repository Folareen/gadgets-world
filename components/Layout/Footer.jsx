import { Typography, Box, Link, Paper } from "@mui/material"
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Heading = ({title}) => (
  <Typography sx={{fontSize: 18, textAlign: {xs: 'left', sm: 'center'}, color: 'light.main'}}>
    {title}
  </Typography>
)

const Text = ({children}) => (
  <Typography sx={{fontSize: {xs: 14, md: 16}, display: 'flex', alignItems: 'center'}}>
    {children}
  </Typography>
)

const Footer = () => {
  return (
    <Paper component='footer' sx={{position: 'absolute', bottom: 0, textAlign: 'center', width: '100%', backgroundColor: '#1D566E', p: 2}} elevation={4}>

      <Box sx={{display: 'flex', justifyContent: {xs: 'flex-start', md: 'space-between'}, my: 1, width: '90%', maxWidth: '1000px', mx: 'auto', flexWrap: 'wrap'}}>

        <Box sx={{mx: {xs: 'auto', md: 0}}}>
          <Box sx={{color: 'logo.main', textAlign: 'center', fontSize: 18, display: 'flex', justifyContent: 'center'}} >
              Gadgets World <Typography sx={{ml: 1, color: 'light.main'}} componennt="span">&copy; 2022</Typography>
          </Box>
          <Typography sx={{color: 'light.main'}}>
              Built by 
              <Link href="https://twitter.com/_folareen_" sx={{ml: 0.5, color: 'secondary.main', textDecoration: 'underline'}}>
                  <span>
                  Folareen
                </span>
              </Link>
          </Typography>
        </Box>


        <Box sx={{fontSize: 16, color: 'light.light' , textAlign: 'left', my: {xs: 4, sm: 0}, mx: {sm: 2}}}>
          <Heading title="Contact us" />
          <Text>
            <LocationOnRoundedIcon sx={{mr: 1}} fontSize="small" /> 1, lorem street,ipsum,Nigeria
          </Text>
          <Text>
            <CallRoundedIcon sx={{mr: 1}} fontSize="small" /> +2348060127619
          </Text>
          <Text>
            <EmailRoundedIcon sx={{mr: 1}} fontSize="small" /> supportlorem@gadgetsworld.com
          </Text>
        </Box>

        <Box sx={{fontSize: 12, color: 'light.light' , textAlign: 'left'}}>
          <Heading title="Support" />
          {
            ['FAQ', 'Feedback and complains', 'lorem ipsum' ].map((text) => (<Text>{text}</Text>))
          }
        </Box>

      </Box>

    </Paper>
  )
}

export default Footer