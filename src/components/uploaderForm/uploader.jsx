import axios from 'axios';
import React, { useState } from 'react';
import { Container, FormGroup, Input } from 'reactstrap';
import './uploader.css'

const url = 'https://api.cloudinary.com/v1_1/dqrtsgiru/upload';

const UploadImage = ({ dataObj, setData, name }) => {
  const uploader = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'chapitas_fail');
    const res = await fetch(url,
      {
        method: 'POST',
        body: data,
      }
    );
    const file = await res.json();
    setData({ ...dataObj, [name]: file.secure_url });
  };

  return (
    <div>
      <Container>
        <FormGroup>
          <Input
            className='input-uploader'
            type='file'
            name='file'
            placeholder='Click Aquí'
            onChange={uploader}
          />
        </FormGroup>
      </Container>
    </div>
  );
};

export default UploadImage;
