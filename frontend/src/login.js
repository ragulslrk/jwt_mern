import React, { useState } from 'react';
import { Text, Flex, Heading, Input, InputRightElement, Button, InputGroup, Alert, AlertIcon, AlertTitle, AlertDescription, } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const  history=useNavigate()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [is_error, set_error] = useState(false)
  const [err_msg, set_err_msg] = useState(null)
  const login_user = () => {
    console.log('in error');
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    if (!username || !password) {
      set_err_msg('Username and Password Are Required')
      set_error(true)
    }
    else {
      set_err_msg(null)
      set_error(false)

      fetch("http://localhost:3232/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        // Adding body or contents to send
        body: JSON.stringify({
          username: username,
          password: password
        }),
        mode: 'cors'
      })

        .then(res => {
          console.log(res.ok);
          if (res.ok === false) {
            set_err_msg('Username Or Password is Incorrect')
            set_error(true)

          }
          else {
            return res.json()
          }


        })
        .then(data => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('refresh_token', data.refresh_token)
          history('/dashboard_front')

        })
        .catch(err => {
          set_err_msg('Username Or Password is Incorrect')
            set_error(true)
          console.log(err)
          
        })
        .catch(err => {
          set_err_msg('Server Down')
          set_error(true)
         
        })


    }
  }
  return (
    <>
      <Flex height='100vh' align='center' justifyContent="center" background='#282c34' >
        <Flex direction='column' boxShadow='dark-lg' color='white ' background='#282c34' p={12} rounded={8}>
          {is_error &&
            <Alert status='error' rounded={8} color='black' >
              <AlertIcon />
              <AlertTitle>{err_msg}</AlertTitle>
            </Alert>
          }
          <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'
            fontWeight='extrabold' >Login</Heading>


          <Input mt={5} placeholder="Enter Your Username" id='username' borderColor='#d00e99' focusBorderColor='#d00e99e' />


          <InputGroup size='md' mt={4}>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='EnterYour password'
              borderColor='#d00e99'
              focusBorderColor='#d00e99e'
              id='password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' bgGradient='linear(to-l, #7928CA, #FF0080)'
                onClick={handleClick} _hover={{
                  bgGradient: 'linear(to-l, #7928CA, #FF0080)',
                }} id='password'>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>


          <Button as='button'
            p={4}
            color='white'
            fontWeight='bold'
            borderRadius='md'
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            _hover={{
              bgGradient: 'linear(to-r, #7928CA, #FF0080)',
            }} mt={5}
            rounded={6}
            onClick={login_user}>
            Submit
          </Button>

        </Flex>
      </Flex>
    </>
  );
}

export default Login;