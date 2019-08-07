// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(bar_75, {
  color: '#000',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 6,
  trailWidth: 6,
  trailColor: '#fff',
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#f4c60b', width: 4 },
  to: { color: '#f4c60b', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }
  }
});
bar.text.style.fontFamily = 'Raleway';
bar.text.style.fontSize = '48px';
bar.text.style.fontWeight = '300';
bar.text.style.letterSpacing = '0.96px';
bar.text.style.textTransform = 'uppercase';
bar.animate(0.75);  // Number from 0.0 to 1.0

var bar2 = new ProgressBar.Circle(bar_90, {
    color: '#000',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 6,
    trailColor: '#fff',
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#f4c60b', width: 4 },
    to: { color: '#f4c60b', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }
  
    }
  });
  bar2.text.style.fontFamily = 'Raleway';
  bar2.text.style.fontSize = '48px';
  bar2.text.style.fontWeight = '300';
  bar2.text.style.letterSpacing = '0.96px';
  bar2.text.style.textTransform = 'uppercase';
  bar2.animate(0.9);  // Number from 0.0 to 1.0

var bar1 = new ProgressBar.Circle(bar_30, {
    color: '#000',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 6,
    trailColor: '#fff',
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#f4c60b', width: 4 },
    to: { color: '#f4c60b', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }  
    }
  });
  bar1.text.style.fontFamily = 'Raleway';
  bar1.text.style.fontSize = '48px';
  bar1.text.style.fontWeight = '300';
  bar1.text.style.letterSpacing = '0.96px';
  bar1.text.style.textTransform = 'uppercase';
  bar1.animate(0.3);  // Number from 0.0 to 1.0