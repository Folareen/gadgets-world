import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FilterListOffRoundedIcon from '@mui/icons-material/FilterListOffRounded';
import { Box, Button, FormControl, IconButton, InputBase, InputLabel, MenuItem, Select, TextField, Paper } from '@mui/material';
import { useState } from 'react';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import FilterAltOffRoundedIcon from '@mui/icons-material/FilterAltOffRounded';
import { useDispatch, useSelector } from 'react-redux';
import {displayResult, startSearch} from '../../features/searchSlice'

const Search = () => {
    const [showFilterBox, setShowFilterBox] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [focus, setFocus] = useState(false)
    const [filters, setFilters] = useState({
        category : '',
        priceRange: {
            min: 0, max: 0
        }
    })

    const dispatch = useDispatch()

    const selectCategory = (e) => {
        setFilters({...filters, category: e.target.value})
    }

    const search = async (url) => {
        setShowFilterBox(false)
        dispatch(startSearch())
        try{
            const response = await fetch(url)
            const data = await response.json()
            dispatch(displayResult(data.data))
        }
        catch(error){
            toast.error('Error occured..please search again')
            console.log(error)
        }
    }

    const handleSearch = () => {
        setShowFilterBox(false)
        if(filters.category || filters.priceRange.min || filters.priceRange.max){
            let url = `https://gadgets-world.up.railway.app/api/products?populate=*&filters[title][$contains]=${searchTerm}`
                if(filters.category){
                    url = url.concat(`&filters[category][name][$contains]=${filters.category}`)
                }
                if(filters.priceRange.min){
                    url = url.concat(`&filters[price][$lt]=${filters.priceRange.min}`)
                }
                if(filters.priceRange.max){
                    url = url.concat(`&filters[price][$gt]=${filters.priceRange.max}`)
                }
                search(url)
        }else{
            search(`https://gadgets-world.up.railway.app/api/products?populate=*&filters[title][$contains]=${searchTerm}`)
        }
    }

    const removeFilters = () => {
        setFilters({category : '',
        priceRange: {
            min: 0, max: 0
        }})
        search(`https://gadgets-world.up.railway.app/api/products?populate=*&filters[title][$contains]=${searchTerm}`)
    }

  return (
    <Box sx={{position: 'relative' , width: '90%', maxWidth: '768px', mx: 'auto', display: 'flex'}}>

        <Box sx={{display: 'flex', borderRadius: 1, px: 1, backgroundColor: 'light.main', width: '100%', borderWidth: 1, borderStyle: 'solid', borderColor : focus ? 'secondary.main' :'light.light' }} >
            <InputBase  required id="outlined-password-input" placeholder="Search for products..." type="search" fullWidth sx={{flex: 1, px:1, color: 'dark.main'}} value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}  onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}}/>
            <IconButton sx={{width: 'max-content', height: 'max-content'}} onClick={()=>{setShowFilterBox(!showFilterBox)}}>
            {!showFilterBox? <FilterListRoundedIcon/> : <FilterListOffRoundedIcon/>}
            </IconButton>  
        </Box>
        <Button variant='contained' onClick={handleSearch} disabled={!searchTerm} sx={{ml: 1, '&:disabled' : {color: 'dark.main', backgroundColor: '#305d7a', border: '1px solid darkblue'}}}>
        Search
        </Button>

        {
            showFilterBox
            &&
            <Paper sx={{position: 'absolute', top: 50, backgroundColor: 'light.main', width: '100%', borderRadius: 1, p: 2 }} elevation={5}>

                <FormControl sx={{width: '50%', mx: 'auto', my: 2}}>
                    <InputLabel id="select-category">Category</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filters.category}
                    label={'category'}
                    onChange={selectCategory}
                    sx={{textTransform: 'capitalize'}}
                    >
                        {
                            ['laptops', 'phones', 'accessories'].map((item) => (
                                <MenuItem value={item} sx={{textTransform: 'capitalize'}} key={item}>
                                    {item}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

                <Box sx={{display: 'flex', my: 3}}>

                    <TextField
                    id="outlined-number"
                    label="Min"
                    type="number"
                    />
                    <TextField
                    id="outlined-number"
                    label="Max"
                    type="number"
                    sx={{ml: 2}}
                    />

                </Box>

                <Button variant="contained" sx={{display: 'flex', alignItems: 'center', mx: 'auto'}} onClick={handleSearch}>
                    Apply Filters <FilterAltRoundedIcon fontSize="small" sx={{ml: 1}} />
                </Button>

                {
                    (filters.category || filters.priceRange.min || filters.priceRange.max) ?
                    <Button variant="contained" color="danger" sx={{display: 'flex', alignItems: 'center', mx: 'auto', color: 'light.main', mt: 1}} onClick={removeFilters}>
                        Remove Filters <FilterAltOffRoundedIcon fontSize="small" sx={{ml: 1}} />
                    </Button>
                    :
                    ""
                }

            </Paper>
        }
    </Box>
  )
}

export default Search