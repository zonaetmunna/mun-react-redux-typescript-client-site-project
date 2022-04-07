import { TextField,Grid,Container, Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../../../redux/actions/authAction';
import authService from '../../../../services/auth.service';

const Login = () => {

     const {register,handleSubmit}=useForm<iLoginData>();

     const dispatch=useDispatch();

     const handleLogin=(data:iLoginData)=>{
          console.log(data);
          dispatch(login(data))
     }

     return (
          <Container>
               <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                         <form onSubmit={handleSubmit(handleLogin)}>
                              <TextField
                              sx={{width:1,p:3}} 
                              id="standard-basic"
                              placeholder='email'
                              {...register("email")}
                              type="email"
                              variant="standard" 
                              />
                              <TextField
                              sx={{width:1,p:3}} 
                              id="standard"
                              placeholder='password'
                              {...register("password")}
                              type="password"
                              variant="standard" 
                              />
                              <Button sx={{width:1,p:3}} type='submit'variant="contained">Login</Button>

                         </form>
                         <br />
                         <Link to="/register">Are you new user? please register</Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                         
                    </Grid>
               </Grid>
               
          </Container>
     );
};

export default Login;