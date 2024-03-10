'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FormProps } from '@/app/interfaces';
import useForm from '@/app/hooks/form';

const FormDialog = (props: FormProps) => {
  const {handleSubmit, VisuallyHiddenInput} = useForm(props);

  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent style={{display: 'flex', flexDirection: 'column',}}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="model"
              name="model"
              label="Model"
              type="text"
              variant="standard"
              style={{marginLeft: 10, width: '80%'}}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="location"
              name="location"
              label="Location"
              type="text"
              variant="standard"
              style={{marginLeft: 10, width: '80%'}}
            />
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="color"
              name="color"
              label="Color"
              type="text"
              variant="standard"
              style={{marginLeft: 10, width: '80%'}}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="numberOfOwners"
              name="numberOfOwners"
              label="No. of Owners"
              type="text"
              variant="standard"
              style={{marginLeft: 10, width: '80%'}}
            />
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="yom"
              name="yom"
              label="Year of Manufacture"
              type="text"
              variant="standard"
              style={{marginLeft: 10, width: '80%'}}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="transmission"
              name="transmission"
              label="Transmission"
              type="text"
              variant="standard"
              style={{marginLeft: 10, width: '80%'}}
            />
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="insurance"
              name="insurance"
              label="Insurance valid upto"
              type="text"
              variant="standard"
              style={{marginLeft: 10, width: '80%'}}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="extFit"
              name="extFit"
              label="External Fitment"
              type="text"
              variant="standard"
              style={{marginLeft: 10, width: '80%'}}
            />
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="kms"
              name="kms"
              label="Kms"
              type="text"
              variant="standard"
              style={{marginLeft: 10, width: '80%'}}
            />
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              style={{marginLeft: 10, width: '80%', height: 40, marginTop: 15}}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>

        </DialogContent>
        <DialogActions>
          <Button variant={'text'} onClick={props.handleClose}>Cancel</Button>
          <Button variant={'outlined'} type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default FormDialog;