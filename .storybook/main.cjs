const tsconfigPaths = require('vite-tsconfig-paths')

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-vite',
    },
    features: {
        storyStoreV7: true,
    },
    babelDefault: async () => {
        return {
            compact: true,
            presets: ['@babel/preset-env', '@babel/preset-react'],
        }
    },
    viteFinal: async (config) => {
        return {
            ...config,
            plugins: [...config.plugins, tsconfigPaths.default()],
        }
    },
}
