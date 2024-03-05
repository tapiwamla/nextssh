import React from 'react';
import { useRouter } from 'next/router';
import { FaLinux } from "react-icons/fa";
import { HiTerminal } from "react-icons/hi";
import { MdDelete, MdModeEditOutline } from "react-icons/md";

const ConnectionWidget = ({ alias, host, username, password }) => {
  const router = useRouter();

  const handleClick = async () => {
    try {
      const response = await fetch('/api/ssh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ host, username, password })
      });

      if (response.ok) {
        router.push('/terminal');
      } else {
        console.error('Error connecting:', response);
      }
    } catch (error) {
      console.error('Error connecting:', error);
    }
  };

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, arguments), delay);
    };
  };

  const debouncedClick = debounce(handleClick, 5000);

  return (
    <div className="connection-widget">
      <div className="widget-header">
        <FaLinux className="widget-icon"/>
        <p className="widget-title"><strong></strong> {alias}</p>
      </div>

      <div className="widget-info">        
        <p><strong>IP Address:</strong> {host}</p>
        <p><strong>User Name:</strong> {username}</p>
      </div>

      <div className="widget-buttons"> 
          <button className="edit-button">
            Edit
            <MdModeEditOutline className="control-icon" />
          </button>
          <button className="delete-button">
            Remove
            <MdDelete className="control-icon" />
          </button>
          <button className="terminal-button" onClick={debouncedClick}>
            Terminal
            <HiTerminal className="control-icon" />
          </button>
      </div>
    </div>
  );
};

export default ConnectionWidget;
