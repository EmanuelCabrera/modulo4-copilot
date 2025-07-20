
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskTable({ tasks, onEdit, onDelete }) {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', mt: 2 }}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow sx={{ background: '#f8fafc' }}>
            <TableCell sx={{ fontWeight: 700 }}>Título</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Fecha vencimiento</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Prioridad</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Estatus</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.dueDate ? new Date(task.dueDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}</TableCell>
                <TableCell>
                    <Chip label={task.priority} sx={{ bgcolor: task.priority === 'High' ? '#f87171' : task.priority === 'Medium' ? '#fbbf24' : '#34d399', color: '#fff', fontWeight: 700 }} />  
                </TableCell>
              <TableCell>
                <Chip label={task.status} sx={{ bgcolor: task.status === 'Completed' ? '#e0e7ff' : '#f1f5f9', color: '#222', fontWeight: 700 }} />
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    size="small"
                    onClick={() => onEdit(task)}
                    sx={{ color: '#2563eb', '&:focus': { outline: 'none' } }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => onDelete(task.id)}
                    sx={{ color: '#ef4444', '&:focus': { outline: 'none' } }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
