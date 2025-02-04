let images = [];
let cols = 6, rows = 6;
let imgSize;
let colLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
let githubRepo = "/CSP-Mondrian-2025/assets/"; // Update with your repo details

// function preload() {
//   // Load 36 images dynamically from GitHub
//   for (let i = 1; i <= cols * rows; i++) {
//     let img = loadImage(`${githubRepo}${colLabels[(i - 1) % cols]}${Math.ceil(i / cols)}.png`, 
//       img => images.push(img), 
//       err => images.push(null) // Handle missing images
//     );
//   }
// }
function preload() {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let label = colLabels[col] + (row + 1);
      let imgPath = `${githubRepo}${label}.png`;
      let index = row * cols + col;
      images[index] = null;
      loadImage(imgPath, 
        img => images[index] = img,
        err => images.push(null) // Handle missing images
      );
    }
  }
}

function setup() {
  createCanvas(600, 600); // Adjust canvas size as needed
  imgSize = width / cols;
  textSize(20);
  textAlign(CENTER, CENTER);
  fill(0);
}

function draw() {
  background(255);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let index = row * cols + col;
      let img = images[index];
      if (img) {
        img.resize(imgSize, imgSize);
        image(img, col * imgSize, row * imgSize, imgSize, imgSize);
      } else {
        let label = colLabels[col] + (row + 1);
        text(label, col * imgSize + imgSize / 2, row * imgSize + imgSize / 2);
      }
    }
  }
}
