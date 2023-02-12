import { createBrowserRouter } from "react-router-dom";
import InputField from "../components/InputField";
import User from "../components/User";
import Main from "../layout/Main";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<InputField/>
            },
            {
                path:"/user",
                element:<User/> 
            }
        ]
    }
])