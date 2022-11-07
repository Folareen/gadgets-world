import { Box, Typography } from "@mui/material";
import excited_man from "../assets/excited-man.png";

const Banner = () => {
  return (
    <Box
      sx={{
        marginTop: 2,
        borderRadius: 2,
        width: '90%',
        mx: 'auto',
        maxWidth: '900px',
        height: '65vh',
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'light.main', boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)'
      }}
    >

      <Box sx={{width: {xs:'100%', sm: '50%'}, height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'space-between',px: {sm: 4, xs: 1}, textAlign: {xs: 'center', sm: 'left'}}}>

        <Typography sx={{fontSize: {md: 42, xs: 36}, textTransform: 'uppercase', fontWeight: 'bold', fontWeight: 'bold', backgroundColor: 'secondary.main', color: 'dark.main', px: 1, width: 'max-content', borderRadius: 1, mb: {sm: 4, xs: 2}, mx: {xs: 'auto', sm: 0}}}>
          PROMO DAY
        </Typography>

        <Typography sx={{fontSize: {md: 36, xs: 28}, textTransform: 'uppercase', display: 'inline-block', color: 'dark.main', mx: {xs: 'auto', sm: 0}}}>
          Enjoy 30% discount on purchases above
          <Typography sx={{fontSize: {lg: 36, xs: 28}, backgroundColor: 'light.light', color: 'primary.main', width: 'max-content', borderRadius: 1, p: 0.5, display: 'inline-block', ml: 1}} component={'span'}>
          $100
        </Typography>
        </Typography>
        
        <Typography sx={{fontSize: 14, fontStyle: 'italic', mt: {sm: 10, xs: 5}}}>
          Terms and Conditions apply
        </Typography>

      </Box>

      <Box sx={{ width: {xs:'100%', sm: '50%'}, height: {xs:'50%', sm: '100%'}, textAlign: 'center'}}>
        <img src={excited_man.src} style={{objectFit: 'contain', height: '100%', p: 0 }}/>
      </Box>

    </Box>
  )
}

export default Banner