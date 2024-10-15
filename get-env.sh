# Read file and store each variable name in a space-separated string
ENV_VAR_NAMES=$(cat environment-variables.txt | tr '\n' ' ')
echo "env_var_names=$ENV_VAR_NAMES" >> $GITHUB_ENV
# Loop through the variable names from the file
for var_name in $env_var_names; do
# Use eval to dynamically inject secret
echo $var_name
done