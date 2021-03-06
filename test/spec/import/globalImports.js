describe('Global Module imports', function() {
  var window, globalIndex,
      // Define the globals layout, each array is a global to verify
      //   and each item in the array is a step on the path from the window object.
      // The test below will verify that all items defined below exist on the window object.
      // e.g. ['Torso', 'Mixins', 'collectionLoading'] = window.Torso.Mixins.collectionLoading
      globals = [
        ['Torso'],
        ['Torso', 'Collections'],
        ['Torso', 'Collections', 'Collection'],
        ['Torso', 'events'],
        ['Torso', 'Mixins'],
        ['Torso', 'Mixins', 'collectionLoading'],
        ['Torso', 'Mixins', 'collectionRegistration'],
        ['Torso', 'Mixins', 'polling'],
        ['Torso', 'Mixins', 'validation'],
        ['Torso', 'Mixins', 'viewHierarchy'],
        ['Torso', 'Models'],
        ['Torso', 'Models', 'Model'],
        ['Torso', 'Models', 'Nested'],
        ['Torso', 'Models', 'Form'],
        ['Torso', 'Services'],
        ['Torso', 'Services', 'Service'],
        ['Torso', 'Utils'],
        ['Torso', 'Utils', 'guidManager'],
        ['Torso', 'Utils', 'templateRenderer'],
        ['Torso', 'validation'],
        ['Torso', 'Views'],
        ['Torso', 'Views', 'View'],
        ['Torso', 'Views', 'List'],
        ['Torso', 'Views', 'Form']
      ];

  beforeAll(function(done) {
    require('./importEnv')('testEnv').done(function(pageWindow) {
      window = pageWindow;
      done();
    });
  });


  for (globalIndex = 0; globalIndex < globals.length; globalIndex++) {
    global = globals[globalIndex];
    it('has the expected "' + global.join('.')  + '" global.', function(global) {
      var globalPartIndex, nextGlobalKey, globalPart = window;
      for (globalPartIndex = 0; globalPartIndex < global.length; globalPartIndex++) {
        nextGlobalKey = global[globalPartIndex];
        globalPart = globalPart[nextGlobalKey];
        expect(globalPart).toBeDefined();
      }
    }.bind(this, global));
  }
});