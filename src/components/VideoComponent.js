import React from 'react';

const VideoComponent = ({ src }) => {
  return (
    <video width="620" height="340" controls>
      <source src={src} type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </video>
  );
};

export default VideoComponent;
