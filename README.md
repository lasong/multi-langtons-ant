# Multiple Langtons Ant

Multiple Langtons Ant simulation. See https://en.wikipedia.org/wiki/Langton%27s_ant

## How to run
- Clone repo
- Go to repo and run `npm run start (fileName) (iterations) (verbose)`, where `fileName` is the starting conditions in a json file, `iterations` is the number of iterations of the simulation and `verbose` (optional) starts the programme in  verbose mode. E.g. `npm run start startingConditions.json 42` or `npm run start startingConditions.json 42 verbose`.

## Note
- The json file with starting conditions must be in the same directory as the repo.
- The default iteration is 10 if none is given.
