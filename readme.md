To run:
clone repo
ensure pwd is this repo
npm run dev

make an empty POST to localhost:8000/randomDeck
-this will generate the first random deck of cards

after generating at least one deck, make a GET call to localhost:8000/deck/0
-the trailing integer is the index of the deck which you are getting

