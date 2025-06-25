document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuPlaceholder = document.getElementById('mobile-menu-placeholder');

  // Dynamically inject the mobile menu content
  mobileMenuPlaceholder.innerHTML = `
    <button id="menu-toggle">☰ Menu</button>
    <nav id="mobile-sidebar">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="package.html">Packages</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  `;

  // Toggle functionality
  const menuToggle = document.getElementById('menu-toggle');
  const mobileSidebar = document.getElementById('mobile-sidebar');

  // Function to close sidebar
  function closeSidebar() {
    mobileSidebar.style.display = 'none';
  }

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (mobileSidebar.style.display === 'block') {
      closeSidebar();
    } else {
      mobileSidebar.style.display = 'block';
    }
  });

  // Close sidebar when clicking outside of it
  document.addEventListener('click', (e) => {
    if (mobileSidebar.style.display === 'block' && !mobileSidebar.contains(e.target) && e.target !== menuToggle) {
      closeSidebar();
    }
  });
});

// === Custom Animated Cursor ===
(function() {
  // Only show on non-touch devices
  if ('ontouchstart' in window) return;
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let cursorX = mouseX, cursorY = mouseY;
  const speed = 0.18; // Easing factor

  function animate() {
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Interactive elements: links, buttons, .service, .pack, .combo
  const hoverSelectors = ['a', 'button', '.service', '.pack', '.combo'];
  document.addEventListener('mouseover', e => {
    if (hoverSelectors.some(sel => e.target.closest(sel))) {
      cursor.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if (hoverSelectors.some(sel => e.target.closest(sel))) {
      cursor.classList.remove('cursor-hover');
    }
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });
})();