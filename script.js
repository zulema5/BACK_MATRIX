const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("id");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const num = "0123456789";
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const simbolos = "$%/*-!&?";

const coleccion = num + letras + simbolos;

const fontSize = 20;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor (columns)).fill(1);

function drawTechlines(){
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "rgba(0, 255, 0, 0.05)";
        ctx.beginPath();
      
        for (let x = 0; x < canvas.width; x += 100) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
        }
      
        for (let y = 0; y < canvas.height; y += 100) {
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
        }
      
        ctx.stroke();
        }
      
      function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawTechLines();
        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px 'Orbitron', monospace";
        for (let i = 0; i < drops.length; i++) {
          const text = coleccion.charAt(Math.floor(Math.random() * coleccion.length));
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
      
      setInterval(drawMatrix, 50);
      
      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

