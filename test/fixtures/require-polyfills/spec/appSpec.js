define(function (require) {
  describe('jasmine polyfills tests', function () {
    var app = require('app');

    it('should return object name from binded function', function () {
      expect(app).toBeDefined();
      expect(Object.keys(app).length).toBe(1);
      //expect(app.getName()).toBe('John');
    });
  })
});