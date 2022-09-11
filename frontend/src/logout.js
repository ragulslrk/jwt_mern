
const  Logout=()=>{
   const  access_tok=localStorage.getItem('access_token')
    const  refresh_tok=localStorage.getItem('refresh_token')

    if(access_tok && refresh_tok)
    {
        fetch("http://localhost:3232/logout", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        // Adding body or contents to send
        body: JSON.stringify({
          refresh_token: refresh_tok,
          
        }),
        mode: 'cors'
      })
      .then(res=>{
        console.log(res);
        if(res.ok===false)
        {
            window.location.replace('/login_front') 
        }
        else{
            console.log('in true');
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            window.location.replace('/login_front') 
        }
      })
   

    }
    else{
        console.log('un authorized');
            window.location.replace('/login_front') 
       }
    

}

export default Logout