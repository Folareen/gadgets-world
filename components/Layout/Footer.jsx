import { Typography, Box, Link } from "@mui/material"

const Footer = () => {
  return (
    <Box component='footer' sx={{position: 'absolute', bottom: 1, textAlign: 'center', width: '100%', borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: 'dark.main'}}>
    <Typography >
        Meedah Store C 2022
    </Typography>
    <Typography>
        Built by 
         <Link href="https://twitter.com/_folareen_">
           <span>
            Folareen
           </span>
        </Link>
    </Typography>
    </Box>
  )
}

export default Footer