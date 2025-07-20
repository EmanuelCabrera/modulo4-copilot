import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const priorities = ['Low', 'Medium', 'High'];
const statuses = ['Pending', 'Completed'];


export default function TaskForm({ onSubmit, initialData }) {
  const [task, setTask] = useState(initialData || {
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    status: 'Pending',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim()) {
      onSubmit(task);
      setTask({ title: '', description: '', dueDate: '', priority: 'Low', status: 'Pending' });
    }
  };

  React.useEffect(() => {
    if (initialData) setTask(initialData);
  }, [initialData]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
        p: 3,
        bgcolor: '#fff',
        borderRadius: 2,
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        minWidth: 350,
        maxWidth: 500,
        mx: 'auto',
      }}
    >
      <TextField label="Título" name="title" value={task.title} onChange={handleChange} required fullWidth />
      <TextField label="Descripción" name="description" value={task.description} onChange={handleChange} fullWidth />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Fecha límite"
          value={task.dueDate ? new Date(task.dueDate) : null}
          onChange={(newValue) => {
            setTask((prev) => ({ ...prev, dueDate: newValue ? newValue.toISOString().split('T')[0] : '' }));
          }}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
      <TextField select label="Prioridad" name="priority" value={task.priority} onChange={handleChange} required fullWidth>
        {priorities.map((p) => (
          <MenuItem key={p} value={p}>{p}</MenuItem>
        ))}
      </TextField>
      <TextField select label="Estado" name="status" value={task.status} onChange={handleChange} required fullWidth>
        {statuses.map((s) => (
          <MenuItem key={s} value={s}>{s}</MenuItem>
        ))}
      </TextField>
      <Button
        type="submit"
        variant="contained"
        disableRipple
        sx={{
          alignSelf: 'flex-end',
          mt: 1,
          textTransform: 'uppercase',
          fontWeight: 600,
          fontSize: '1rem',
          letterSpacing: 1,
          bgcolor: '#2563eb',
          color: '#fff',
          boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
          borderRadius: 2,
          px: 3,
          py: 1.5,
          '&:hover': { bgcolor: '#1e40af' },
          '&:focus': { outline: 'none' },
          '&:active': { background: 'transparent' }
        }}
      >
        {initialData ? 'Guardar cambios' : 'Crear tarea'}
      </Button>
    </Box>
  );
}
