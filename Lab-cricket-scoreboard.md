## Cricket Scoreboard

### Part 1 - Runs and Wickets

We're going to use Cricket scoring - but if you really want to you can adapt it to the sport or game of your choice!

In Cricket each team starts with 0 runs (points) and 0 wickets (the number of players who are "out").
Players can score runs by running between the two wickets (1 Run) or by hitting the ball all the way
to the edge of the field (4 Runs or 6 Runs if it doesn't hit the ground).
When 10 players are out (10 wickets), the team is considered "All out" and the other team takes their turn.

Create a `TeamScore` component which tracks the current score for one team in runs and wickets.

The starting state for your component should be this:

```js
this.state = { runs: 0, wickets: 0 }
```

Make your `TeamScore` component keep track of the runs and wickets:

- Display the current number of Runs and Wickets
- Add a button "1 Run" which increases the number of runs by 1.
- Add two more buttons to add "4 Runs" and "6 Runs"
- Add a button "Wicket" which increases the number of wickets by 1.

**Hint:** You can use `setState` to change part of the state without affecting other state values. For example: `this.setState({wickets: 5})` will only change the number of wickets, it will leave the number runs unchanged.

### Part 2 - All out!

When a team reaches 10 wickets (10 players out), they are "All out".

When the number of wickets reaches 10, show a label that says "All out" and remove or hide the buttons.

### Part 3 - Two teams

Create another component `Scoreboard` which uses your `TeamScore` component to show both teams' scores for a Cricket game.
Use CSS to show both teams score's side-by-side.

Hint: You might want to use a prop on the `TeamScore` component to show the name of each team.

### Extensions

1. Make it possible to change the names of the teams (you can use `prompt()` to ask the user to enter the new team name)

2. Show multiple different cricket games in the same page - use a button to add a new (blank) scoreboard.
