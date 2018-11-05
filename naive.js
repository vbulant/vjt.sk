var SNOWFLAKES_COUNT = 100;

  function randomPercentage() {
    return Math.floor(Math.random() * 100) + 1 + '%';
  }

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function renderSnowflake(el) {
    var flake = document.createElement('span');
    var size = randomBetween(2, 5);
    var animationDuration = randomBetween(250, 5000) + 'ms'
    var blur = randomBetween(0, 2);
    flake.className = 'snowflake';
    flake.style.left = randomPercentage();
    flake.style.animationDuration = animationDuration;
    flake.style.width = size + 'px';
    flake.style.height = size + 'px';
    flake.style.filter = 'blur(' + blur + 'px)';
    el.appendChild(flake);
  }

  function renderSnowflakes() {
    var el = document.body;
    for (var i = 0; i < SNOWFLAKES_COUNT; i++) renderSnowflake(el);
  }

  window.onload = function() {
    renderSnowflakes();
    document.body.style.opacity = 1;
    document.getElementById('scene').style.opacity = 0.35;
    document.getElementById('title').style.filter = 'blur(0)';
  };
