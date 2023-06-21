module.exports = {
    branches: ['main'], // Specify the branch to trigger releases
    plugins: [
      '@semantic-release/commit-analyzer', // Analyzes commit messages to determine the next version
      '@semantic-release/release-notes-generator', // Generates release notes based on commits
      '@semantic-release/github', // Publishes releases on GitHub
      [
        "semantic-release-helm",
        {
          chartPath: './chart',
          registry: 'localhost:5000/repo/chart'
        },
     ],
    ],
  };
  