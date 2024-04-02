'use client'
import React, { useCallback } from 'react';

export default function Home() {
  // Function to request notification permission
  const requestNotificationPermission = useCallback(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          console.log('Notification Permission Granted!!');
          try {
            // Attempt to create a notification
            new Notification('Hello Developers!!', {
              body: 'This is your notification message!!',
              icon: '/images/icon16.png',
            });
          } catch (error) {
            console.error('Error creating notification:', error);
          }
        }
      });
    } else {
      console.log('Notifications not supported in this browser.');
    }
  }, []);

  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-[48px] pb-[49px] pr-[15px] pl-4 gap-[100px] tracking-[normal] text-center text-[29px] text-white font-inter">
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-2.5 pl-[9px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[60px] pl-[60.5px]">
          <h3 className="text-center m-0 w-[100%] relative font-bold leading-[32px] font-medium font-inherit inline-block">
            Push Notification
          </h3>
        </div>
        <div className="self-stretch relative text-[19px] text-slate-400">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
 {/* Notification Bell */}
      <div className="self-stretch h-[400px] relative flex flex-row justify-center mx-4 p-0">
        <div className="relative">
          <svg className="w-[500px] h-[500px]">
            <g>
              <defs>
                <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#CE722C" />
                  <stop offset="100%" stopColor="rgba(71, 21, 20, 0)" />
                </linearGradient>
              </defs>
              <circle cx="50%" cy="50%" r="250" fill="transparent" strokeWidth="2" stroke="url(#borderGradient)" transform="rotate(90, 250, 250)" />
              <circle cx="50%" cy="50%" r="175" fill="transparent" strokeWidth="2" stroke="url(#borderGradient)" transform="rotate(90, 250, 250)" />
              <circle cx="50%" cy="50%" r="100" fill="transparent" strokeWidth="2" stroke="url(#borderGradient)" transform="rotate(90, 250, 250)" />
              <circle cx="50%" cy="50%" r="50" fill="transparent" strokeWidth="2" stroke="url(#borderGradient)" transform="rotate(90, 250, 250)" />
            </g>
          </svg>
        {/* Notification bell icon */}
          <div className="cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12 w-[60px] h-[60px] flex items-center justify-center" style={{ background: 'linear-gradient(360deg, rgba(157, 13, 61, 0) -23%, rgba(223, 81, 43, 0.76) 45.16%, #BF8C2C 103%)', borderRadius: '50%' }} onClick={requestNotificationPermission} title='Click for Notifications'>
            <img className='animate-bounce w-[70%]' src="/images/bell.png" alt="Notification" />
          </div>
        </div>
      </div>
{/* Button to send notification */}
      <div className="self-stretch h-[42px] flex flex-row items-start justify-center py-0 pr-1.5 pl-2 box-border max-w-full mx-4">
        <div className="cursor-pointer py-[13px] px-5 bg-[transparent] h-[44.8px] flex-1 rounded-lg [background:linear-gradient(90deg,_rgba(157,_13,_61,_0)_2.62%,_#df522b_50.55%,_rgba(199,_125,_44,_0))] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] box-border flex flex-row items-start justify-center whitespace-nowrap max-w-full border-[1.4px] border-solid border-brown" onClick={requestNotificationPermission}>
          <b className="w-36 relative text-[16px] tracking-[0.03em] leading-[100%] inline-block font-inter text-white text-center">
            Send Notification
          </b>
        </div>
      </div>
    </div>
  );
}
