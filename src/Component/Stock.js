import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Stock() {

  const { id } = useParams()
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fdata = new FormData(event.currentTarget);
    fdata.append('_method', 'PATCH');
    await axios.post(`http://localhost:8000/api/medicines/${id}`, fdata).then(({data})=>{
  Swal.fire({
    icon:"success",
    text:data.message
  })
      navigate("/home")
    }).catch(({response})=>{
      if(response.status===422){
       
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
                Add to Stock
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="supplier_name"
              label="supplier_name"
              name="supplier_name"
              autoComplete="supplier_name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="qty"
              label="quantity"
              id="quantity"
              autoComplete="quantity"
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="batch_number"
              label="batch_number"
              name="batch_number"
              autoComplete="batch_number"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="expiry_date"
              label="expiry_date"
              id="expiry_date"
              type="date"
              autoComplete="expiry_date"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              add to stock
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
               
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}