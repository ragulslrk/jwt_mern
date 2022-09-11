import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex,
    Button
  } from '@chakra-ui/react'
import Logout from './logout'
import { useEffect ,useState} from 'react';
import { useNavigate, } from 'react-router-dom';



const Dashboard = () => {
const  history=useNavigate()

const  [user_data,set_user_data]=useState({user:{}})

    useEffect(()=>{
        const  access_tok=localStorage.getItem('access_token')
    if(access_tok)
       {    console.log('in  useffect');
        fetch("http://localhost:3232/dashboard", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        // Adding body or contents to send
        body: JSON.stringify({
          access_token: access_tok,
          
        }),
        mode: 'cors'
      })
        .then((res)=>{
            if (res.ok === false) {
                
                history('/login_front')
              }
              else {
                return res.json()
              }
        })

        .then(data=>{
            console.log(data.username);
            set_user_data(prevState=>({
              ...prevState,
              user:data
            }))
        })
        .catch(err=>{
            console.log(err)
        })
        .catch(err=>{
            console.log(err)
        })
       } 
       else{
        history('/login_front')
       }
        
    },[])
    return ( 
        <>
      <Flex height='100vh'  align='center' justifyContent="center" background='#282c34' >

        <Flex direction="column" justifyContent='center' fontWeight='extrabold' >
        <TableContainer background='white' rounded={5}>
            <Table variant='striped' >
            <TableCaption fontWeight='extrabold'>
                User Details
            </TableCaption>
            <Tbody>
                <Tr>
                    <Td>Username</Td>
                  <Td>{user_data.user.username}</Td>
                </Tr>
                <Tr>
                    <Td>Password</Td>
                    <Td>{user_data.user.password}</Td>
                </Tr>
                <Tr>
                    <Td>Email</Td>
                    <Td>{user_data.user.email}</Td>
                </Tr>

            </Tbody>
             </Table>
        </TableContainer>
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
            onClick={Logout}
            >
            Logout
          </Button>
        
        </Flex>
        </Flex>


        
        </>
     );
}
 
export default Dashboard;