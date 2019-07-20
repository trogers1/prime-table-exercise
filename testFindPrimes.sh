
echo "Generating $1 prime numbers...";
node -e "require('./src/helpers/findPrimes')($1, true)";
