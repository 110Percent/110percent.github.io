const splashes = ['Please do not swear on my profile!!', 'The one and only!!', 'Ladies, please, one at a time.', 'Who needs CSS frameworks?', 'I\'ll write my own library, damn it!', 'Readable code is overrated.', 'Who needs coffee when you\'ve got pure stubbornness?'];

document.querySelector('.splash-text').textContent = splashes[Math.floor(Math.random() * splashes.length)];

tippy('.splash-icon', {
  placement: 'top',
  delay: 100,
  duration: 400,
  inertia: true,
  animation: 'shift-away'
});
