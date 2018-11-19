const {FuseBox} = require('fuse-box');

const fuse = FuseBox.init({
    homeDir:'.',
    output:'dist/$name.js',
    sourceMaps: {inline: true}   
})
fuse.bundle("polyfills").instructions(`> node_modules/webextension-common/src/Polyfills.ts`).globals({'webextension-polyfill': 'browser'})
fuse.bundle('page-proxy').instructions(">![src/webextension/PageProxy.ts]").watch('src/**')
fuse.bundle('popup').instructions(">![src/webextension/PopUp.ts]").watch('src/**')
fuse.bundle('options').instructions(">![src/webextension/Options.ts]").watch('src/**')
fuse.bundle('devtools').instructions(">![src/webextension/Devtools.ts]").watch('src/**')
fuse.bundle('devtools-panel').instructions(">![src/webextension/devtools-panel.ts]").watch('src/**')
fuse.bundle('background').instructions(">!src/webextension/Background.ts").watch('src/**')

fuse.run()