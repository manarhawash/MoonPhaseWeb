const slider = document.getElementById('phaseSlider');
const label  = document.getElementById('phaseLabel');
const canvas = document.getElementById('moonCanvas');
const ctx    = canvas.getContext('2d');
const moonImg = new Image();
moonImg.src = 'images/moon.png';

// أطوار القمر بأسماء إنجليزية
const phaseNames = [
  'New Moon','Waxing Crescent','First Quarter','Waxing Gibbous',
  'Full Moon','Waning Gibbous','Last Quarter','Waning Crescent'
];

function drawPhase(phase){
  ctx.clearRect(0,0,200,200);
  // رسم قرص القمر كاملاً
  ctx.drawImage(moonImg,0,0,200,200);
  // إنشاء قناع لتمثيل الظل
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  // x يعتمد على المرحلة
  const x = phase/28 * 400 - 100;
  ctx.arc(x,100,100,0,Math.PI*2);
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';
}

slider.addEventListener('input', () => {
  const val = parseInt(slider.value,10);
  const phaseIndex = Math.floor(val/4); 
  label.textContent = phaseNames[phaseIndex];
  drawPhase(val);
});

// بعد تحميل الصورة
moonImg.onload = () => drawPhase(0);
