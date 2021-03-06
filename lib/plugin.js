var jasmine = require( "jasmine-node" );

var pluginFactory = function( _, anvil ) {
    return anvil.plugin({
        // ###anvil.jasmine
        name: "anvil.jasmine",
        // Run this plugin in the `test` activity.
        activity: "test",
        // Setup the command to run this plugin.
        //
        //     anvil -j
        //     anvil --jasmine
        //
        commander: [
            [ "-j, --jasmine", "Run this plugin for testing with jasmine." ]
        ],
        // The default options.
        config: {
            specDir: "spec",
            verbose: false,
            showColors: true,
            teamCity: false,
            requireJs: false,
            coffee: false,
            jUnitSupport: false,
            alwaysRun: false
        },
        // Configure the plugin.
        configure: function( config, command, done ) {
            // If there is a config for jasmine or if the jasmine command is present.
            this.shouldTest = ( command.jasmine || !!this.config.alwaysRun ) &&
                anvil.fs.pathExists( this.config.specDir );

            done();
        },
        // Execute the tests
        run: function( done ) {
            if ( this.shouldTest ) {
                try {
                    // Run the tests.
                    jasmine.executeSpecsInFolder(
                        this.config.specDir,        // folder
                        this.runComplete,           // onComplete
                        this.config.verbose,        // verbose
                        this.config.showColors,     // colors
                        this.config.teamCity,       // teamCity
                        this.config.requireJs,      // requireJs
                        this.config.coffee ?        // matcher
                            new RegExp(".(coffee|js)$", "i") :
                            new RegExp(".(js)$", "i"),
                        this.config.jUnitSupport    // jUnit
                    );
                }
                catch ( e ) {
                    if ( this.config.verbose ) {
                        anvil.log.error( e );
                    }
                    anvil.log.error([
                        "An error has occurred running anvil.jasmine. Please ensure the directory: \"",
                        this.config.specDir,
                        "\" contains jasmine tests, and the config for anvil.jasmine is correct"
                    ].join( "" ))
                }
            }
            done();
        },

        runComplete: function( runner, log ) {

        }
    } );
};

module.exports = pluginFactory;