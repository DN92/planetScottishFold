import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { useInterval } from './useInterval';

const millisecondsToDaysMod = (milliseconds) => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  return days;
};

const millisecondsToHoursMod = (milliseconds) => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  return hours % 24; 
};

const millisecondsToMinutesMod = (milliseconds) => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  return minutes % 60; 
};

const millisecondsToSecondsMod = (milliseconds) => {
  const seconds = Math.floor(milliseconds / 1000);
  return seconds % 60; 
};

export default function useCountdown(target) {
  const [countdown, setCountdown] = useState('');
  const [countdownText, setCountdownText] = useState('');

  useEffect(() => {

    const serverTime = moment.tz(moment(), 'US/Eastern');

    const targetTime = moment.tz(target, 'US/Eastern');

    const duration = moment.duration(targetTime.diff(serverTime));

    const remainingSeconds = duration._milliseconds
    setCountdown(remainingSeconds)

    const remainingUnits = duration._data

    console.log('duration:: ', duration._data)

    useInterval(()=> {
      let remaining = countdown

      if (remaining <= 0) {
        clearInterval(interval);
        setCountdown("The Sale has Ended")
      } else {
        remaining = remaining - 1000;
        setCountdown(remaining)
        setCountdown(countdownText);
        setCountdownText()
      }
    } , 1000)
  }, []);

  return countdown
};