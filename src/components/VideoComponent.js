import React from 'react';

const VideoComponent = ({ src }) => {
  return (
    <div style={{  width: '100%', height: '340px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '-60px', marginTop: '-80px' }}>
    <video width="100%" height="auto" controls>
      <source src={src} type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </video>
    </div>
  );
};

export default VideoComponent;
