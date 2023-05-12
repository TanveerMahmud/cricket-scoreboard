import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Component } from 'react'
import TeamScore from '../TeamScore'

export class Scoreboard extends Component {
  state = {
    team1: 'Flying Eagles',
    team2: 'Roaring Tigers',
  }

  changeTeams = () => {
    const yourTeam = prompt('What is the name of your team?')
    const yourOpponent = prompt('What is the name of your opponent?')
    this.setState({ team1: yourTeam, team2: yourOpponent })
  }

  render() {
    return (
      <>
        <Container sx={{ m: '15px auto' }}>
          <Typography
            variant="h2"
            color="primary"
            textAlign="center"
            gutterBottom
          >
            Cricket Scoreboard
          </Typography>
          <Grid container sizing={2}>
            <TeamScore teamName={this.state.team1} />
            <TeamScore teamName={this.state.team2} />
          </Grid>
          <Box textAlign="center" mt="20px">
            <Button variant="outlined" onClick={this.changeTeams}>
              Enter your teams
            </Button>
          </Box>
        </Container>
      </>
    )
  }
}

export default Scoreboard
