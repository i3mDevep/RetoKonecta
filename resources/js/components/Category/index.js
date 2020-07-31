import React from 'react'
import { Anchor, Image, Delete } from "./style"
import { MdCancel } from 'react-icons/md';

const DEFAULT_IMAGE = 'https://cdn2.iconfinder.com/data/icons/unigrid-phantom-multimedia-vol-5/60/020_213_media_image_photo_mountains_nature-256.png'

export const Category = ({ image = DEFAULT_IMAGE, id, deleteCategory, title }) => (
  <div style = {{ position: 'relative' }}>
    <Delete onClick={() => deleteCategory(id)}>
      <MdCancel />
    </Delete>
    <Anchor to={`/blog/?id=${id}`} >
      <Image src={image != null && image?`http://127.0.0.1:8000/storage/${image}`:DEFAULT_IMAGE} />
    </Anchor>
  </div>

)