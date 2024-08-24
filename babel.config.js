module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/assets': './src/assets',
          '~/components': './src/components',
          '~/components/core': './src/components/core',
          '~/components/containers': './src/components/container',
          '~/components/shared': './src/components/shared',
          '~/components/Skeleton': './src/components/skeletons',
          '~/configs': './src/configs',
          '~/constant': './src/constant',
          '~/hooks': './src/hooks',
          '~/routes': './src/routes',
          '~/screens': './src/screens',
          '~/styles': './src/styles',
          '~/types': './src/types',
          '~/services': './src/service',
          '~/utils': './src/utils',
        },
      },
    ],
  ],
};
