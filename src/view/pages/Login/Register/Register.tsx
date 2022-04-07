import { Button, Container, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
     const  {register, handleSubmit}=useForm<iRegisterData>()
   
     const handleRegister=(data:iRegisterData)=>{
          console.log(data)
     }
     
     return (
          <Container>
               <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                         <form onSubmit={handleSubmit(handleRegister)}>
                              <TextField
                              sx={{width:1,p:3}} 
                              id="standard-basic"
                              placeholder='name'
                              type="text"
                              {...register("name")}
                              variant="standard" 
                              />
                              <TextField
                              sx={{width:1,p:3}} 
                              id="standard-basic"
                              placeholder='email'
                              type="email"
                              {...register("email")}
                              variant="standard" 
                              />
                              <TextField
                              sx={{width:1,p:3}} 
                              id="standard"
                              placeholder='password'
                              type="password"
                              {...register("password")}
                              variant="standard" 
                              />
                              <TextField
                              sx={{width:1,p:3}} 
                              id="standard"
                              placeholder='re-password'
                              type="password"
                              {...register("password2")}
                              variant="standard" 
                              />
                              <Button sx={{width:1,p:3}} type='submit'variant="contained">Register</Button>

                         </form>
                         <br />
                         <Link to="/login">have you account ? please login</Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                         
                    </Grid>
               </Grid>
               
          </Container>
     );
};

export default Register;