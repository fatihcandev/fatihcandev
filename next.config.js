const { withPlaiceholder } = require('@plaiceholder/next')

module.exports = withPlaiceholder({
  reactStrictMode: true,
  generateBuildId: () => 'build',
})
