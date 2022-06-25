anime.timeline({loop: 1})
  .add({
    scale: [0, 1],
    duration: 1000,
    delay: 2100,
    rotateZ: -2,
    offset: '-=1000'
  }).add({
    targets: '.alert-title-message',
    scale: [0, 1],
    duration: 1000,
    delay: 2100,
    rotateZ: -2,
    offset: '-=1000'
  }).add({
    targets: '.text1',
    scale: [0, 1],
    duration: 1000,
    rotateZ: -2,
    offset: '-=1000'
  }).add({
    targets: '.text2',
    scale: [0, 1],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.star1',
    scale: [0, 1, 0],
    rotateZ: [0, 0],
    duration: 1200,
    offset: '0'
  }).add({
    targets: '.star2',
    scale: [0, 1],
    rotateZ: [90, 0],
    duration: 1200,
    offset: '0'
  });

anime({
  targets: '#alet-title-initial',
  opacity: [1, 0],
  scale: [2, 1, 0],
  duration: 300,
  delay: 2000,
  easing: "linear",
  loop: 1
});

anime({
  targets: '#alet-title-end',
  opacity: [0, 1],
  duration: 300,
  delay: 2150,
  easing: "linear",
  loop: 1
});
