Package.describe({
  name: 'simonv3:meteor-running-models',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'The models package for Meteor Running',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/simonv3/meteor-running-models',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('mongo@1.1.0', ['client', 'server']);

  api.addFiles([
    'model/users.js',
    'model/groups.js',
    'model/sites.js'
  ], ['client', 'server']);

  api.addFiles([
    'server/users.js',
    'server/groups.js',
    'server/sites.js',
    'server/startup/setupSite.js'
    ], 'server');
  api.addFiles('meteor-running-models.js');

  api.export('Sites',['server','client']);
  api.export('Groups',['server','client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.addFiles('meteor-running-models-tests.js');
});
