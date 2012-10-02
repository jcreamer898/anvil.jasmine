anvil.jasmine
=============
This plugin for anvil will run [jasmine.js](http://pivotal.github.com/jasmine/) tests.  

The test directory by convention will be the `spec` directory.  

To install this plugin via anvil, simply run...  

```bash
anvil install anvil.jasmine
```

Then add any tests to `spec` such as `sometest.spec.js`.  

Now you can run...

```bash
anvil -j
```

And the tests will be run alongside your anvil build.

To have the tests run with every `anvil` run, add the following to your `build.json`.

```json
{
    "anvil.jasmine": {
        "alwaysRun": true
    }
}
```

Here are the default config values for `anvil.jasmine`...

```js
config: {
    specDir: "spec",
    verbose: false,
    showColors: true,
    teamCity: false,
    requireJs: false,
    coffee: false,
    jUnitSupport: false,
    alwaysRun: false
}
```

