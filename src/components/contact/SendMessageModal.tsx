
import { useEffect } from 'react';
import './contact.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function SendMessageModal({ open, setOpen }: Readonly<{ open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }>) {
    const handleClose = () => setOpen(false);
    const TIMEOUT_DURATION = 3000;

    useEffect(() => {
        const timer = setTimeout(() => {
            handleClose();
        }, TIMEOUT_DURATION);

        return () => clearTimeout(timer);
    });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-message-send">
        <Typography className="geist-font-bold text-primary" id="modal-modal-title" variant="h6" component="h2">
        Your message has been sent successfully.
        </Typography>
        <Typography className="geist-font-medium text-popover" id="modal-modal-description" sx={{ mt: 2 }}>
          I will contact you as soon as possible
        </Typography>
      </Box>
    </Modal>
  );
}

export default SendMessageModal;
