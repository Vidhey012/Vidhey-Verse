'use client';

import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const SwalPopup = () => {
  useEffect(() => {

    Swal.fire({
      title: 'Welcome!',
      text: 'This is a message from SweetAlert',
      icon: 'info',
      confirmButtonText: 'OK'
    }).then((result) => {
        const audio = new Audio("audio\\Music1.mp3");
        audio.play();
      });

  }, []); 

  return null;
};

export default SwalPopup;