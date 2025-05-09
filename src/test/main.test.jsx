
test('main.jsx se monte sans erreur dans #root', () => {
  document.body.innerHTML = '<div id="root"></div>';

  expect(() => {
    require('../main'); 
  }).not.toThrow();
});



