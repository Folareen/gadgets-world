import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FilterListOffRoundedIcon from '@mui/icons-material/FilterListOffRounded';
import { Box, Button, IconButton, InputBase } from '@mui/material';
import { useState } from 'react';

const FilterBox = () => (
    <Box sx={{position: 'absolute', top: 50, backgroundColor: 'secondary.main', width: '100%', borderRadius: 1, p: 2 }}>
        filter box
    </Box>
)

const Search = () => {
    const [showFilterBox, setShowFilterBox] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [focus, setFocus] = useState(false)
  return (
    <Box sx={{position: 'relative' , width: '90%', maxWidth: '768px', mx: 'auto', display: 'flex'}}>
        <Box sx={{display: 'flex', borderRadius: 1, px: 1, backgroundColor: 'light.main', width: '100%', borderWidth: 1, borderStyle: 'solid', borderColor : focus ? 'secondary.main' :'light.light' }} >
            <InputBase  required id="outlined-password-input" placeholder="Search for products..." type="search" fullWidth sx={{flex: 1, px:1, color: 'dark.main'}} value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}  onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}}/>
            <IconButton sx={{width: 'max-content', height: 'max-content'}} onClick={()=>{setShowFilterBox(!showFilterBox)}}>
            {!showFilterBox? <FilterListRoundedIcon/> : <FilterListOffRoundedIcon/>}
            </IconButton>  
        </Box>
        <Button variant='contained' sx={{ml: 1}}>
        Search
        </Button>
        {
            showFilterBox && <FilterBox />
        }
    </Box>
  )
}

export default Search