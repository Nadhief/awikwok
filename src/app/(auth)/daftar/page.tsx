'use client'
import React, { useState, ChangeEvent } from 'react';
import { Box, IconButton, Typography, FormControlLabel, Grid, TextField, Button, Checkbox, Container, CardActions } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from 'next/link';
import Image from 'next/image';

const Register = () => {
  const [cbx, setCbx] = useState(false);
  console.log(cbx);

  const handleCbx = (event: ChangeEvent<HTMLInputElement>) => {
    setCbx(event.target.checked);
  };
  return (
    <div>
      {/* =====================> START BACK BUTTON <=====================*/}
      <Box maxWidth="md">
        <Box display="flex" alignItems="center" sx={{ paddingTop: 5 }}>
          <Box
              sx={{
                  backgroundColor: '#ffffff',
                  padding: '1px',
                  textAlign: 'center',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
              }}>
              <Link href="/" passHref>
                <Box>
                  <IconButton>
                    <KeyboardArrowLeftIcon />
                  </IconButton>
                </Box>
              </Link>
          </Box>
          <Box ml={1}>
            <Typography sx={{ color: 'grey' }}>Sebelumnya</Typography>
            <Typography>Homepage</Typography>
          </Box>
        </Box>
      </Box>
      {/* =====================> START FORM <=====================*/}
      <Box 
          sx={{ 
            margin: '0 auto',
            maxWidth: '900px', 
            // border: '1px solid #ccc', 
            // borderRadius: '8px',
            justifyContent:'space-between' 
            }}>
          <Typography variant="h4" component="h4" 
            sx={{ 
              fontSize: '3rem', 
              textAlign: 'start',
              paddingLeft: 2, 
              paddingBottom: 2.5,
              fontWeight: 500,
              paddingTop:3
              }}>
                Daftar
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Container maxWidth="sm">
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ padding:1}}> Nama Institusi / Perusahaan</Typography>
                  <TextField
                    id="outlined-basic"
                    label="Masukan Nama Institusi / Perusahaan"
                    variant="outlined"
                    size="small"
                    type="text"
                  />
                  <Typography sx={{ padding:1}}> Email</Typography>
                  <TextField
                    id="outlined-basic"
                    label="Masukan Email"
                    variant="outlined"
                    size="small"
                    type="email"
                  />
                  <Typography sx={{ padding:1}}> Password</Typography>
                  <TextField
                    id="outlined-basic"
                    label="Masukan Password"
                    variant="outlined"
                    size="small"
                    type="password"
                  />
                </Box>
              </Container>
            </Grid>
            <Grid item xs={12} md={6}>
              <Container maxWidth="sm">
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ padding:1}}> Nomor SK</Typography>
                  <TextField id="outlined-basic" label="Masukan Nomor SK Institusi / Perusahaan" variant="outlined" size="small" type="text"/>
                  <Typography sx={{ padding:1}}> Konfirmasi Email</Typography>
                  <TextField id="outlined-basic" label="Konfirmasi Email" variant="outlined" size="small" type="email"/>
                  <Typography sx={{ padding:1}}> Konfirmasi Password</Typography>
                  <TextField id="outlined-basic" label="Konfirmasi Passoword" variant="outlined" size="small" type="password"/>
                </Box>
              </Container>
            </Grid>
          </Grid>
          <Container sx={{ paddingTop:2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Checkbox 
                color="success"
                onChange={handleCbx}
              />
              <p>Dengan melakukan registrasi saya menyatakan telah membaca dan menerima{' '}
                <Link href="/"  style={{ textDecoration: 'underline' }}>ketentuan & persyaratan</Link> yang berlaku
              </p>
              {/* <FormControlLabel control={<Checkbox />} label=""/> */}
            </Box>
            <Box sx={{ textAlign:'center' }}>
              <Link href="/masuk" passHref>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button variant="contained" color="success" disabled={!cbx}>
                    Daftar
                  </Button>
                </CardActions>
              </Link>
            </Box>
            
          </Container>
        </Box>
    </div>
  )
}

export default Register
