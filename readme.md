# Countries Game
Based on Sporcle game

## Getting Started
- `npm install`
- `npm run start`
- `gulp copy`

## Dev
- `npm run watch`

### TODO
- Guesses that match need to be pushed into the array properly (i.e. once an acceptable guess has been made the _actual_ name should from the topojson should be pushed into the array of correct guesses)
- Attach a colour to the polygon itself so countries can be coloured in groups
- Make a geoJsonLayer component so the polygons can be stripped down to bare necessities and have things like colour added in
- Add in acceptable guesses for certain countries (e.g. USA will still count for Unites States). This can be done manually as there should only be a few exceptions
- Update geojson data and check all names
- Add in a highscores system/score entry system (arcade style w/ 3 chars)
- Correct guesses and remaining countries don't seem to be updated properly in the redux state (maybe making copy arrays breaking it? is still updating state before it gets returned in switch)
