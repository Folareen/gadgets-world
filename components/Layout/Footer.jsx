import { Typography, Box, Link } from "@mui/material"

const Footer = () => {
  return (
    <Box component='footer' sx={{position: 'absolute', bottom: 1, textAlign: 'center', width: '100%', borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: 'dark.main'}}>
    <Typography >
        Gadgets World &copy; 2022
    </Typography>
    <Typography>
        Built by 
        <Link href="https://twitter.com/_folareen_" sx={{ml: 0.5}}>
            <span>
             Folareen
           </span>
        </Link>
    </Typography>
    </Box>
  )
}

export default Footer