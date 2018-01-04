// Creates notification
function show() {
  var time = /(..)(:..)/.exec(new Date());
  var hour = time[1] % 12 || 12;
  var period = time[1] < 12 ? 'a.m.' : 'p.m.';
  var randNum = Math.floor(Math.random() * 20) + 1;

  if (randNum == 1){
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Complete 30 Jumping Jacks.'
    });
  }
  else if (randNum == 2) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Complete 30 Front Lunges (15 per side).'
    });
  }
  else if (randNum == 3) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Complete 30 Side Lunges (15 per side).'
    });
  }
  else if (randNum == 4) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Complete 30 Back Lunges (15 per side).'
    });
  }
  else if (randNum == 5) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Complete 20 Squats.'
    });
  }
  else if (randNum == 6) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Hold Wall Sit for 60 seconds.'
    });
  }
  else if (randNum == 7) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Complete 15 Push-Ups.'
    });
  }
  else if (randNum == 8) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Complete 20 Crunches.'
    });
  }
  else if (randNum == 9) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Complete 10 Burpees.'
    });
  }
  else if (randNum == 10) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Complete 30 Calf Raises.'
    });
  }
  else if (randNum == 11) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Hold Extended Side Angle Pose for 15 seconds per side.'
    });
  }
  else if (randNum == 12) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Hold Warrior I for 15 seconds per side.'
    });
  }
  else if (randNum == 13) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Complete 30 High Knees.'
    });
  }
  else if (randNum == 14) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Hold Plank for 30 seconds.'
    });
  }
  else if (randNum == 15) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Complete 20 Squat Jumps.'
    });
  }
  else if (randNum == 16) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Jog in place for 60 seconds.'
    });
  }
  else if (randNum == 17) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Complete 20 Russian Twists.'
    });
  }
  else if (randNum == 18) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Complete 20 Bicycle Crunches.'
    });
  }
  else if (randNum == 19) {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Complete 20 Scissor Jumps.'
    });
  }
  else {
    new Notification(hour + time[2] + ' ' + period, {
      body: 'Hold Side Plank for 15 seconds per side.'
    });
  }
}

if (!localStorage.isInitialized) {
  localStorage.isActivated = false;   // Display activation
  localStorage.frequency = 45;        // Display frequency, minutes.
  localStorage.isInitialized = true; // Option initialization.
}
// Checks for notification support
if (window.Notification) {
  // Shows notifications at the display frequency.
  if (JSON.parse(localStorage.isActivated)) { show(); }
  var interval = 0; // Display interval, minutes.
  setInterval(function() {
    interval++;
    if (JSON.parse(localStorage.isActivated) && localStorage.frequency <= interval) {
      show();
      interval = 0;
    }
  }, 90000);
}
