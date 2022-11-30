/** CRACO
 *  Config WEB_PACK using craco without 'npm react-scripts eject'
 *
 */
const {CracoAliasPlugin} = require('react-app-alias')

module.exports = {
    plugins: [
        {
            plugin: CracoAliasPlugin,
            options: {
                source: 'jsconfig',
                baseUrl: '.',
                jsConfigPath: './jsconfig.paths.json',
            },
        },
    ],
}