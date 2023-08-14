import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CircularLoading = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress color="success" />
        </Box>
    )
}

export default CircularLoading;