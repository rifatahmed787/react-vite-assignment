import React, { useEffect, useState } from 'react';
import { IUsers } from '../models/IUser';
import { UserService } from '../services/UserService';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Container } from '@mui/material';

interface IState{
    loading:boolean,
    users:IUsers[],
    error:string,
}




const User = () => {
    const [state, setState]=useState<IState>({
        loading:false,
        users:[] as IUsers[],
        error:"",
    })

    //api request
    useEffect(()=>{
        setState({...state, loading:true})
        UserService.getAllUsers().then(res=>setState({
            ...state, loading:false, users:res.data
        })).catch(error=>setState({
            ...state, loading:false, error:error.message
        }));
        //eslint-disable-next-line
    },[])


   //distructuring state
     const {loading, users, error}=state


    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'userId',
          headerName: 'User Id',
          width: 150,
          editable: true,
        },
        {
          field: 'id',
          headerName: 'Id',
          width: 150,
          editable: true,
        },
        {
          field: 'title',
          headerName: 'Title',
          type: 'string',
          width: 300,
          editable: true,
        },
        {
          field: 'body',
          headerName: 'Body',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 400,
          editable: true,
        },
      ];
    
      const rows = users.map((user)=>({
         userId: user.userId,
         id:user.id,
         title:user.title,
         body:user.body
      }))


    return (
        <div>
          {error && <p>{error}</p>}
          {loading && <p>Loading...</p>}
          <Container sx={{marginTop:10}}>
            <Box sx={{ height: 400, width: '100%'}}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[100]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
              />
            </Box>
        </Container>
        </div>
    );
};

export default User;