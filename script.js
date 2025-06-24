// Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark');
  }
  
  // Theme toggle functionality

  const themeToggle = document.getElementById('theme-toggle');
  const logo = document.getElementById("logo-img");

  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Logo flip
    if (logo.src.includes("assests/logo.png")) {
      logo.src = "assests/logo-flipped.png"; // Unlocked icon
    } else {
      logo.src = "assests/logo.png"; // Locked icon
    };

    // Menu flip
    if (menuIcon.src.includes("assests/svg/Menu.svg")) {
      menuIcon.src = "assests/svg/Menu-flipped.svg"; // Unlocked icon
    } else {
      menuIcon.src = "assests/svg/Menu.svg"; // Locked icon
    };
      
    
    
  });
  
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById("menu-icon");
  
  mobileMenuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');

    if (menuIcon.src.includes("assests/svg/Menu.svg")) {
      menuIcon.src = "assests/svg/Close.svg"; // Unlocked icon
    } else {
      menuIcon.src = "assests/svg/Menu.svg"; // Locked icon
    };
  });




  // Render blockchain animation on homepage
  const blockchainAnimation = document.getElementById('blockchain-animation');
  if (blockchainAnimation) {
    renderBlockchainAnimation();
  }
});

// Blockchain Animation
function renderBlockchainAnimation() {
  // const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 500 500');
  svg.classList.add('blockchain-svg');
  
  // Create blocks group
  const blocksGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  blocksGroup.classList.add('blocks');
  
  // Block 1
  const block1 = createBlock(100, 100, 'Block 1', 0);
  blocksGroup.appendChild(block1);
  
  // Block 2
  const block2 = createBlock(210, 100, 'Block 2', 0.5);
  blocksGroup.appendChild(block2);
  
  // Block 3
  const block3 = createBlock(320, 100, 'Block 3', 1);
  blocksGroup.appendChild(block3);
  
  // Connections between blocks
  const line1 = createLine(180, 140, 210, 140);
  const line2 = createLine(290, 140, 320, 140);
  blocksGroup.appendChild(line1);
  blocksGroup.appendChild(line2);
  
  // Voting Block
  const votingBlock = createBlock(210, 220, 'Voting\nBlock', 1.5, true);
  blocksGroup.appendChild(votingBlock);
  
  // Connection to voting block
  const lineToVoting = createLine(250, 180, 250, 220);
  blocksGroup.appendChild(lineToVoting);
  
  // Nodes
  const nodes = [
    createNode(140, 350),
    createNode(210, 350),
    createNode(280, 350),
    createNode(350, 350)
  ];
  
  nodes.forEach(node => blocksGroup.appendChild(node));
  
  // Connections to nodes
  const nodeConnections = [
    createLine(210, 300, 140, 330),
    createLine(230, 300, 210, 330),
    createLine(250, 300, 280, 330),
    createLine(270, 300, 350, 330)
  ];
  
  nodeConnections.forEach(conn => blocksGroup.appendChild(conn));
  
  svg.appendChild(blocksGroup);
  document.getElementById('blockchain-animation').appendChild(svg);
}

function createBlock(x, y, text, delay, isVoting = false) {
  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  
  // Create rectangle
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', x);
  rect.setAttribute('y', y);
  rect.setAttribute('width', '80');
  rect.setAttribute('height', '80');
  rect.setAttribute('rx', '4');
  rect.setAttribute('fill', isVoting ? '#2563EB' : '#3B82F6');
  rect.classList.add('animate-pulse');
  rect.style.animationDelay = `${delay}s`;
  
  group.appendChild(rect);
  
  // Add text
  const textLines = text.split('\n');
  textLines.forEach((line, index) => {
    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    textElement.setAttribute('x', x + 40);
    textElement.setAttribute('y', y + 45 + (index * 20 - (textLines.length - 1) * 10));
    textElement.setAttribute('text-anchor', 'middle');
    textElement.setAttribute('fill', 'white');
    textElement.setAttribute('font-size', '14');
    textElement.textContent = line;
    
    group.appendChild(textElement);
  });
  
  return group;
}

function createLine(x1, y1, x2, y2) {
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.setAttribute('stroke', '#60A5FA');
  line.setAttribute('stroke-width', '3');
  
  return line;
}

function createNode(x, y) {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);
  circle.setAttribute('r', '20');
  circle.setAttribute('fill', '#3B82F6');
  
  return circle;
}

let logoFunction = function yinka() {
  let logoImg = document.getElementById("logo-img");
  logoImg.src = "assests/logo-flipped.png";
}


