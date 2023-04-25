import React from 'react';
import { ChatEngine } from 'react-chat-engine'

const SupportAdmin = () => {
  return (
    <div>

      <ChatEngine
        projectID="e234b8a9-6e10-470f-8d45-0e79376d50c6"
        userName='admain'
        userSecret='qwe123'
        height='calc(100vh - 12px)'
      />
    </div>
  );
}

export default SupportAdmin;
