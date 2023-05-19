import React from 'react';

// components
const Home = React.lazy(()=>import("./components/userList/userList"));
const LogIn = React.lazy(()=>import("./components/Login/login"))
const Dashbord = React.lazy(()=>import("./screens/dashbord/dashbord"))



const routes = [
    {name:'dashbord', path:'/', element:<Home />},
    {name:'login', path:'/login', element:<LogIn />},
    {name:'dashbord', path:'/dashbord-tasktwo', element:<Dashbord />}

    
]
export default routes;