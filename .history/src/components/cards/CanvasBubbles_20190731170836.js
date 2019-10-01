import React, { Component } from 'react';

export default class CanvasBubbles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    var canvas = document.querySelector('canvas');
    console.log(canvas);

    canvas.width = 315;
    canvas.height = 135;

    var ctx = canvas.getContext('2d');

    var mouse = {
      x: undefined,
      y: undefined
    };

    let maxRadius = 30;

    window.addEventListener('mousemove', function(event) {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    class Circle {
      constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = color;
        this.draw = function() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.strokeStyle = this.color;
          ctx.stroke();
          ctx.fillStyle = this.color;
          ctx.fill();
        };
        this.update = function() {
          if (this.x + radius >= window.innerWidth || this.x - radius <= 0) {
            this.dx = -this.dx;
          }
          if (this.y + radius >= window.innerHeight || this.y - radius <= 0) {
            this.dy = -this.dy;
          }
          this.x += this.dx;
          this.y += this.dy;

          // interactivity

          if (
            mouse.x - this.x < 60 &&
            mouse.x - this.x > -60 &&
            mouse.y - this.y < 60 &&
            mouse.y - this.y > -60
          ) {
            if (this.radius < maxRadius) {
              this.radius++;
            }
          } else if (this.radius > this.minRadius) {
            this.radius--;
          }

          this.draw();
        };
      }
    }

    var circleArray = [];

    function init() {
      circleArray = [];
      for (let i = 0; i < 200; i++) {
        let r = Math.random() * 15 + 1;
        let x = Math.random() * (window.innerWidth - r * 2) + r;
        let y = Math.random() * (window.innerHeight - r * 2) + r;
        let dx = (Math.random() - 0.5) * 5;
        let dy = (Math.random() - 0.5) * 5;
        let color = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
          Math.random() * 255
        )},${Math.floor(Math.random() * 255)}, ${Math.random()}`;
        circleArray.push(new Circle(x, y, dx, dy, r, color));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      console.log(mouse);
      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }

    init();
    animate();
  }

  render() {
    return (
      <div>
        <canvas />
      </div>
    );
  }
}
