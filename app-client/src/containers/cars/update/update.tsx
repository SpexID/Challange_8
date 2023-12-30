import {Box, TextField, Switch, Stack, Typography, Paper,} from '@mui/material';
import CommonPage from '../../../components/common-page/common-page';
import { CloudUpload } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import useUpdate from './update.hooks'; 
import { VisuallyHiddenInput } from './update.styled';

export default function Update() {
    const {
      formValues,
      handleSubmit,
      handleUploadImg,
      loadingCover,
      loadingSubmit,
      setFormValues,
      fileItem,
    } = useUpdate();
  
    return (
      <CommonPage
        withBack
        component={'form'}
        title="Update Car"
        actionElement={
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loadingSubmit}
          >
            Submit
          </LoadingButton>
        }
        onSubmit={handleSubmit}
      >
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6">Car Details</Typography>
          <Box
            sx={{
              width: '50%',
            }}
          >
            <TextField
              name="nama"
              size="small"
              sx={{ width: '100%', mb: 4 }}
              label="Nama mobil"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  nama: e.target.value,
                })
              }
              variant="filled"
              value={formValues?.nama}
            />
            <TextField
              name="sewa"
              size="small"
              sx={{ width: '100%', mb: 4 }}
              label="Harga sewa"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  sewa: Number(e.target.value),
                })
              }
              variant="filled"
              value={formValues?.sewa}
            />
            <TextField
              name="ukuran"
              size="small"
              sx={{ width: '100%', mb: 4 }}
              label="Ukuran mobil"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  ukuran: e.target.value,
                })
              }
              variant="filled"
              value={formValues?.ukuran}
            />
            <LoadingButton
              component="label"
              variant="contained"
              startIcon={<CloudUpload />}
              sx={{ mb: 3 }}
              loading={loadingCover}
            >
              Update Car Image
              <VisuallyHiddenInput
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleUploadImg}
              />
            </LoadingButton>
            {fileItem && fileItem.url && (
              <Box>
                <img
                  src={fileItem.secure_url}
                  alt="preview"
                  style={{ width: '100%', objectFit: 'cover' }}
                />
              </Box>
            )}
            <Box>
              <Stack direction={'row'} alignItems={'center'}>
                <div>Publish</div>
                <Switch
                  name="available"
                  title="Available"
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      available: e.target.checked,
                    })
                  }
                  checked={formValues?.available || false}
                />
              </Stack>
            </Box>
          </Box>
        </Paper>
      </CommonPage>
    );
  }
  