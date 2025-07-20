
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';
import TaskTable from '../components/TaskTable';
import { Box, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);


  // Recuperar todas las tareas al cargar el componente
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error al recuperar las tareas:', error);
      }
    };
    fetchTasks();
  }, []);

  // Crear o editar tarea
  const handleAddTask = async (task) => {
    if (editTask) {
      try {
        const response = await axios.put(`/tasks/${editTask.id}`, task);
        const updatedTask = response.data;
        setTasks((prev) => prev.map(t => t.id === updatedTask.id ? updatedTask : t));
      } catch (error) {
        console.error('Error al editar la tarea:', error);
      }
      setEditTask(null);
      setOpen(false);
      return;
    }
    try {
      const response = await axios.post('/tasks', task);
      const newTask = response.data;
      setTasks((prev) => [newTask, ...prev]);
    } catch (error) {
      console.error('Error al crear la tarea:', error);
    }
    setOpen(false);
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/tasks/${id}`);
      setTasks((prev) => prev.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  return (
    <>
      <Navbar />
      <Box sx={{ width: '100vw', minHeight: '90vh', bgcolor: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', p: 4, boxSizing: 'border-box' }}>
        <Box sx={{ width: '100%', maxWidth: 800, display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button
            variant="contained"
            disableRipple
            sx={{
              textTransform: 'uppercase',
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: 1,
              bgcolor: '#2563eb',
              color: '#fff',
              boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
              borderRadius: 2,
              px: 2,
              py: 0.7,
              minWidth: 120,
              transition: 'all 0.2s',
              '&:hover': { bgcolor: '#1e40af', transform: 'scale(1.05)' },
              '&:focus': { outline: 'none' },
              '&:active': { background: 'transparent' }
            }}
            onClick={() => { setEditTask(null); setOpen(true); }}
          >
            Crear tarea
          </Button>
        </Box>
        <Box sx={{ width: '100%', maxWidth: 800 }}>
          <TaskTable tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
        </Box>
        <Dialog open={open} onClose={() => { setOpen(false); setEditTask(null); }} maxWidth="sm" fullWidth>
          <DialogTitle>{editTask ? 'Editar tarea' : 'Crear tarea'}</DialogTitle>
          <DialogContent>
            <TaskForm onSubmit={handleAddTask} initialData={editTask} />
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
}
