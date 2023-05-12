import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { Component } from 'react'

class TeamScore extends Component {
  state = {
    runs: 0,
    wickets: 0,
  }

  increaseRuns = (runs) => {
    if (runs === 'run1') {
      this.setState({ runs: this.state.runs + 1 })
    } else if (runs === 'run4') {
      this.setState({ runs: this.state.runs + 4 })
    } else {
      this.setState({ runs: this.state.runs + 6 })
    }
  }

  increaseWickets = () => this.setState({ wickets: this.state.wickets + 1 })

  render() {
    return (
      <>
        <Grid item xs={6}>
          <Container sx={{ textAlign: 'center' }}>
            {this.state.wickets === 10 && (
              <Typography variant="h1" color="#f00">
                ALL OUT
              </Typography>
            )}

            <Card sx={{ bgcolor: '#efefef' }}>
              <CardContent>
                <Typography
                  variant="h3"
                  color="#d4af37"
                  fontWeight="700"
                  gutterBottom
                >
                  {this.props.teamName}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Runs:&nbsp;{this.state.runs}
                </Typography>
                <ButtonGroup
                  variant="contained"
                  size="large"
                  disabled={this.state.wickets === 10}
                >
                  <Button onClick={() => this.increaseRuns('run1')}>
                    1 run
                  </Button>
                  <Button onClick={() => this.increaseRuns('run4')}>
                    4 run
                  </Button>
                  <Button onClick={() => this.increaseRuns('run6')}>
                    6 run
                  </Button>
                </ButtonGroup>
              </CardContent>
              <CardContent>
                <Typography variant="h3" gutterBottom>
                  Wickets:&nbsp;{this.state.wickets}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={this.increaseWickets}
                  disabled={this.state.wickets === 10}
                >
                  Wicket
                </Button>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </>
    )
  }
}

export default TeamScore
