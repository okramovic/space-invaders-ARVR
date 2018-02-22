  AFRAME.registerComponent('set-sky', {
    schema: {default:''},
    init() {
      const sky = document.querySelector('a-sky');
      this.el.addEventListener('mouseenter', () => {
        sky.setAttribute('src', this.data);
      });
    }
  });