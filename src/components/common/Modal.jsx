import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 1200,
//     height:800,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
// };

export default function CustomModal({ isOpen, onClose,text,img }) {
  return (
    <Modal
  open={isOpen}
  onClose={onClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: { xs: "90%", sm: "70%", md: "60%" },   
      bgcolor: "background.paper",
      borderRadius: "15px",
      boxShadow: 24,
      p: 3,
      overflow: "hidden",
      maxHeight: "90vh", 
    }}
  >
    <img
      src={img}
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "15px",
        marginBottom: "20px",
      }}
      alt="Hotel Room"
    />
    <p
      id="modal-modal-description"
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "18px",
        color: "#333",
        lineHeight: "1.8",
        textAlign: "justify",
      }}
    >
      {text}
    </p>
  </Box>
</Modal>

  );
}
