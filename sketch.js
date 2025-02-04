let images = [];
let cols = 6, rows = 6;
let imgSize;
let colLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
let githubRepo = "https://github.com/JackQuicker1/CSP-Mondrian-2025/tree/main/assets"; // Update with your repo details

function preload() {
  // Load 36 images dynamically from GitHub
  for (let i = 1; i <= cols * rows; i++) {
    let img = loadImage(`${githubRepo}img${i}.jpg`, 
      img => images.push(img), 
      err => images.push(null) // Handle missing images
    );
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
  
  let index = 0;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (index < images.length) {
        let img = images[index];
        if (img) {
          img.resize(imgSize, imgSize); // Ensure all images are the same size
          image(img, x * imgSize, y * imgSize, imgSize, imgSize);
        }
        
        // Draw position indicator
        let label = colLabels[x] + (y + 1);
        text(label, x * imgSize + imgSize / 2, y * imgSize + imgSize / 2);
      }
      index++;
    }
  }
}
