import { Box, TextField, Switch, Stack } from '@mui/material';
import CommonPage from '../../../components/common-page/common-page';
import { CloudUpload } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import useAction from './create.hooks';
import { VisuallyHiddenInput } from './create.styled';

export default function Create() {
  const {
    formValues,
    handleSubmit,
    handleUploadCover,
    loadingCover,
    loadingSubmit,
    setFormValues,
    fileItem,
  } = useAction();
  return (
    <CommonPage
      withBack
      component={'form'}
      title="Create new Car"
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
      <Box
        sx={{
          width: '50%',
        }}
      >
        <TextField
          name="nama"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="Nama Mobil"
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
            sx={{ width: '100%', mb: 3 }}
            label="Harga sewa"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                sewa: Number(e.target.value),
              })
            }
            variant="filled"
          />
          <TextField
            name="ukuran"
            size="small"
            sx={{ width: '100%', mb: 3 }}
            label="Ukuran"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                ukuran: e.target.value,
              })
            }
            variant="filled"
          />
          <LoadingButton
            component="label"
            variant="contained"
            startIcon={<CloudUpload />}
            sx={{ mb: 3 }}
            loading={loadingCover}
          >
            Upload Car Image
            <VisuallyHiddenInput
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={handleUploadCover}
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
              <div>Available</div>
              <Switch
                name="available"
                title="Available"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    available: e.target.checked,
                  })
                }
              />
            </Stack>
          </Box>
        </Box>
      </CommonPage>
    );
  }
  
  
