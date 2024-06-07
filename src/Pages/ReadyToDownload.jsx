import React, { useState } from 'react'
import { Button, Drawer } from 'antd';
import HeaderAdjustment from '../Common/HeaderAdjustment';


const ReadyToDownload = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const showLoading = () => {
        setOpen(true);
        setLoading(true);
    
        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      };
  
  return (
    <div className=' w-full min-h-screen flex justify-center items-center'>
        <HeaderAdjustment/>
        <Button type="primary" onClick={showLoading}>
        Open Drawer
      </Button>
      <Drawer
        closable
        destroyOnClose
        title={<p>Loading Drawer</p>}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        <Button type="primary" style={{ marginBottom: 16 }} onClick={showLoading}>
          Reload
        </Button>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

    </div>
  )
}

export default ReadyToDownload