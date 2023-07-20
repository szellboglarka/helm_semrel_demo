echo -n github-token:
read -s GH_TOKEN
echo $GH_TOKEN

GH_TOKEN=$GH_TOKEN npx semantic-release --debug --no-ci
