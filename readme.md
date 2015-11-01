# Countries Game
Based on Sporcle game

## Getting Started
- `npm install`
- `npm run start`
- `gulp copy`

## Dev
- `npm run watch`

### TODO
- Timer component so there's a time limit on game
- Add in acceptable guesses for certain countries (e.g. USA will still count for Unites States)
- Add in a world map with d3 that updates on correct guesses (w/ names too)
- Add in a highscores system/score entry system (arcade style w/ 3 chars)
- Use geojson from https://github.com/johan/world.geo.json
- Only load up relevant country when it has been guessed to keep it efficient (so we aren't loading up stuff we don't need)
- Maybe just use SVG instead so we can use d3? Smaller files