import { Box, Paper, Typography } from "@mui/material";
import excited_man from "../assets/excited-man.png";

const TopBanner = () => {
  return (
    <Paper
      sx={{
        marginTop: 2,
        borderRadius: 2,
        width: '90%',
        mx: 'auto',
        maxWidth: '1000px',
        height: '65vh',
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'light.main', boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)',
        position: 'relative'
      }}
      elevation={5}
    >

      <Box sx={{width: {xs:'100%', md: '50%'}, height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'space-between',px: {md: 4, xs: 1}, textAlign: {xs: 'center', md: 'left'}, zIndex: 2}}>

        <Typography sx={{fontSize: {md: 44, xs: 36}, textTransform: 'uppercase', fontWeight: 'bold', fontWeight: 'bold', backgroundColor: 'secondary.main', color: 'dark.main', px: 1, width: 'max-content', borderRadius: 1, mx: {xs: 'auto', md: 0}, mt: 2.5}}>
          PROMO DAY
        </Typography>

        <Typography sx={{fontSize: {md: 32, xs: 30}, textTransform: 'uppercase', display: 'inline-block', color: 'dark.main', mx: {xs: 'auto', md: 0}}}>
          Enjoy 30% discount on purchases above
          <Typography sx={{fontSize: {lg: 32, xs: 28}, backgroundColor: 'light.light', color: 'primary.main', width: 'max-content', borderRadius: 1, p: 0.5, display: 'inline-block', ml: 1}} component={'span'}>
          $100
        </Typography>
        </Typography>

        <Box sx={{position: 'relative', width: 'max-content', bgcolor: 'light.light',borderRadius: 2, boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.2)', mx: {xs: 'auto', md: 0}}}>
          <Typography sx={{position: 'absolute', top: 0, right: 0, fontSize: 13, lineHeight: 1, bgcolor: 'secondary.main', color: 'light.light', borderTopRightRadius: 'inherit', p: 0.4}}>
            Promo code
          </Typography>
          <Typography sx={{fontSize: 40, py: 2.4, px: 3, lineHeight: 1, fontWeight: 'bold', color: 'dark.main', letterSpacing: 3 }}>
            LOL404
          </Typography>
        </Box>
        
        <Typography sx={{fontSize: 15, fontStyle: 'italic', color: 'dark.main'}}>
          Terms and Conditions apply
        </Typography>

      </Box>

      <Box sx={{ width: {md: '50%', xs: '100%'}, height: '100%', textAlign: 'center', position: {md: 'relative', xs: 'absolute'}, zIndex: 1, opacity: {xs: 0.2, md: 1}}}>
        <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute'}}>
          <Box sx={{ width: { md: '340px', xs: '330px'}, height: { md: '340px', xs: '330px'}, top: 0, bottom: 0, left: 0, right: 0, background: 'dark.main', borderRadius: '50%', borderWidth: 5, borderStyle: 'solid', borderColor: 'light.light', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent:'center', outline: '2px solid red'}}>
            <Box sx={{borderWidth: 4, borderStyle: 'solid', borderColor: 'dark.main', width: { md: '335px', xs: '315px'}, height: { md: '335px', xs: '315px'}, borderRadius: '50%'}}>
            </Box>
          </Box>
        </Box>

        <img src={excited_man.src} style={{objectFit: 'cover', height: '100%', maxWidth: '400px', p: 0, zIndex: 2, position: 'relative', width: '100%'}}/>
      </Box>

    </Paper>
  )
}

export default TopBanner