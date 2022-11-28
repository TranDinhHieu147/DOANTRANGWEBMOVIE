import React from 'react';
import styled from 'styled-components';
// import { useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// import LoadingSpinner from '../../components/UI/LoadingSpinner';



const underMaintenance = () => {
  // const [thongtins, setThongtin] = useState('');
 

  // if (!thongtins) return <LoadingSpinner />;
  return (
    <Wrapper>
     <h3>Nơi ngày chưa update</h3>
      
{/* 
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Mã Phim</TableCell>
              <TableCell>Mã vé</TableCell>
              <TableCell>rạp</TableCell>
              <TableCell>Ngày khởi chiếu</TableCell>
              <TableCell>Thành tiền</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {thongtins.items.map((item) => (
              <TableRow
                key={item.maPhim}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ width: 120 }}>{item.maPhim}</TableCell>
                <TableCell sx={{ width: 300 }}>{item.tenPhim}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
          
        </Table>
      </TableContainer> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 5rem);
  color: var(--primary-yellow);
  align-content: space-between;
`;

export default underMaintenance;
