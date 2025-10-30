(function () {
  'use strict';

  // PUBLIC_INTERFACE
  function initOverlay() {
    /**
     * Toggle a developer overlay of the provided preview image for pixel matching.
     * Usage: press the 'o' key to toggle overlay visibility.
     */
    var overlay = document.getElementById('overlay');
    if (!overlay) return;

    // Use provided attachment preview for validation overlay
    overlay.style.backgroundImage = "url('/attachments/screen_59-5.png')";

    var visible = false;
    function toggle() {
      visible = !visible;
      overlay.style.display = visible ? 'block' : 'none';
    }

    document.addEventListener('keydown', function (e) {
      if (e.key && e.key.toLowerCase() === 'o') toggle();
    });
  }

  // PUBLIC_INTERFACE
  function preloadAssets() {
    /** Preload important images to avoid flicker */
    var urls = [
      '/assets/figmaimages/figma_image_59_5_13fc2567.png',
      '/assets/figmaimages/figma_image_59_6_49ba3add.png',
      '/assets/figmaimages/figma_image_59_78_e3a23e83.png'
    ];
    urls.forEach(function (u) { var img = new Image(); img.src = u; });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      preloadAssets();
      initOverlay();
    });
  } else {
    preloadAssets();
    initOverlay();
  }
})();
