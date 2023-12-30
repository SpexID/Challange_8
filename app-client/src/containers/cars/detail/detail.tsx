import { Box, Typography, Paper, Switch } from '@mui/material';
import CommonPage from '../../../components/common-page/common-page';
import useDetail from './detail.hooks'; 

export default function Detail() {
  const { carDetails } = useDetail();

  return (
    <CommonPage withBack title="Car Details">
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6">Car Details</Typography>
        <Box
          sx={{
            width: '50%',
          }}
        >
          <Typography>Nama: {carDetails?.nama}</Typography>
          <Typography>Sewa: {carDetails?.sewa}</Typography>
          <Typography>Ukuran: {carDetails?.ukuran}</Typography>
          <Typography>Created at: {carDetails?.created_at}</Typography>
          <Typography>Updated at: {carDetails?.updated_at}</Typography>

          
          <Typography>Available: </Typography>
          <Switch
            name="available"
            title="available"
            disabled
            checked={carDetails?.available || false}
          />
          
           {carDetails?.gambar && (
            <Box>
              <img
                src={carDetails.gambar.secure_url}
                alt="preview"
                style={{ width: '100%', objectFit: 'cover' }}
              />
            </Box>
          )}
        </Box>
      </Paper>
    </CommonPage>
  );
}
