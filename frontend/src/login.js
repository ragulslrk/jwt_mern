import React, { useState } from 'react';
import {Text,Flex,Heading,Input,InputRightElement,Button,InputGroup} from '@chakra-ui/react'


const Login = () => {
    const [show, setShow] = useState(false)
const handleClick = () => setShow(!show)
// const data=()=>{
//     console.log(document.getElementById('username').value,document.getElementById('password').value)

// }
    return ( 
        <>
      <Flex height='100vh'  align='center' justifyContent="center" background='#282c34' >
      <Flex direction='column' boxShadow='dark-lg' color='white ' background='#282c34' p={12} rounded={8}>
        
        <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'
            fontWeight='extrabold' >Login</Heading> 
        
        <Input mt={5} placeholder="Enter Your Username"  id='username' borderColor='#d00e99'focusBorderColor='#d00e99e'/>


        <InputGroup size='md'  mt={4}>
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
          }}    id='password'>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
      </InputGroup>

      
        <Button  as='button'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  _hover={{
    bgGradient: 'linear(to-r, #7928CA, #FF0080)',
  }} mt={5} rounded={6} >  Submit</Button>

      </Flex>
      </Flex>
        </>
     );
}
 
export default Login;