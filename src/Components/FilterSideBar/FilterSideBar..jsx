import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TuneIcon from '@mui/icons-material/Tune';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { colors } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../features/citySlice';
import { fetchEvents, filterByCity } from '../../features/eventSlice';

const {yellow} = colors;
const FormGroup = styled.div`
  margin-bottom:20px;
`
const FormLabel = styled.label`
display: block;
margin-bottom: 5px;
`
const FormInput = styled.input`
width: 100%;
padding: 10px;
font-size: 16px;
border:1px solid #ddd;
transition:0.3s ease;
&::placeholder{
  font-size:14px;
  font-weight:300;
  color:#999;
}
&:focus{
  border:1px solid #FFB703;
  outline:3px solid #ffb80347;
}
`;

const FormSelect = styled.select`
width: 100%;
padding: 10px;
font-size: 16px;
border:1px solid #ddd;
&:focus{
  border:1px solid ${yellow};
  outline:3px solid #ffb80347;
}
`
const Btn = styled.button`
margin-top:20px;
display:inline-block;
padding:8px 20px;
background:${yellow};
font-weight:500;
color:#fff;
text-transform:capitalize;
`

export default function Filter({handleSetCity}) {
  const [open, setOpen] = useState(false);
  const [date,setDate] = useState({});
  const [cityData , setCityData] = useState("");
  const dispatch = useDispatch();
  const cities = useSelector(state=>state.city.cities);
  useEffect(()=>{
    dispatch(fetchCities());
  },[dispatch])
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleChange = (e)=>{
    setCityData(e.target.value);
  }

  const handleChangeDate = (e)=>{
    const input = new Date(e.target.value);
    const year = input.getFullYear();
    const month = input.getMonth() + 1;
    const day = input.getDay();
    setDate({year,month,day});
  }
  // console.log(cityData);

  const DrawerList = (
    <Box sx={{ width: 320,padding:"15px" }} role="presentation">
      <h1 className='text-3xl mb-5 font-[500]'>Filters</h1>
      <FormGroup class="form-group">
      <FormLabel htmlFor="date">Date</FormLabel>
       <FormInput type="date" onChange={handleChangeDate}/>
      </FormGroup>
      <FormGroup class="form-group">
                        <FormLabel htmlFor="City">City</FormLabel>
                        <FormSelect value={cityData} onChange={handleChange}>
                          <option value="chose city">chose city</option>
                          {cities.map((city)=>(
                            <option value={city.id} key={city.id}>{city.name}</option>
                          ))}
                        </FormSelect>
      </FormGroup>
      <Btn onClick={()=>{dispatch(filterByCity(cityData));handleSetCity(cityData);setOpen(false);}}>
        Apply Filters
      </Btn>
    </Box>
  );

  return (
    <div>
      <Button style={{color:"#fff",padding:"8px 15px",borderRadius:"0",background:"#FFB703",display:"flex",alignItems:"center",gap:"10px"}} onClick={toggleDrawer(true)}><TuneIcon/> FILTER</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}