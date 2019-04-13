import React from "react"
import { Link } from "gatsby"
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import DecisionTable from "../components/decisionTable"
import OptionTable from "../components/optionTable"

// const initialFactors = [{id: 0, name: "Salary", weight: 1.0}];
const initialFactors = [];
const initialOptions = [{id: 0, name: "Job Offer #1"}];

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class IndexPage extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      weight: '',
      factors:  initialFactors,
      options:  initialOptions,
      // TODO: take length of factors to set id instead of i
      i: 1,
    };
    this.handleFactorUpdate = this.handleFactorUpdate.bind(this);
  }

  // handle live input text for FACTORS
  handleFactorChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  // DELETE ALL -- call in clear all factors button
  handleClearFactors = () => {
    this.setState({
      factors: initialFactors,
      i: 1,
    });
  };

  // DELETE ALL -- call in clear all options button
  handleClearOptions = () => {
    this.setState({
      options: initialOptions,
    });
  };

  // PUT updated factor row data
  handleFactorUpdate = factor => {
    this.updateFactorRow(factor);
  }
  updateFactorRow = factor => {
    let newFactors = this.state.factors.filter((f) => f.id !== factor.id);
    newFactors.push(factor);
    this.setState({
      factors: newFactors,
    })
  }

  // DELETE factor row on id
  handleFactorDelete = id => {
    this.deleteFactorRow(id);
  }
  deleteFactorRow = id => {
    let newFactors = this.state.factors.filter((f) => f.id !== id);
    this.setState({
      factors: newFactors,
      i: this.state.i - 1
    });
  }

  enterPressed(event) {
    var code = event.keyCode || event.which;
    if(code === 13) { //13 is the enter keycode
        this.handleFactorRowSubmit();
        document.getElementById("outlined-name").focus();
    }
  }

  // POST new factor row
  handleFactorRowSubmit = () => {
    let factor = { id: this.state.i, name: this.state.name, weight: this.state.weight };
    this.addNewFactorRow(factor);
  }
  addNewFactorRow = factor => {
    this.setState({
      factors: this.state.factors.concat(factor),
      name: '',
      weight: '',
      i: this.state.i + 1
    });
  }

  render() {
    const { classes } = this.props;

    return(
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>How it works</h1>
        <p>You have to make an important decision. You have several <b>options</b>.
            To decide, you'll need to narrow down your decision criteria. Let's call those <b>decision factors</b>.</p>
        <ul>
          <li><em>Step 1</em>: Add all your <b>decision factors</b> (e.g., "Salary").</li>
          <li><em>Step 2</em>: Provide a weight for all your <b>decision factors</b> (e.g., 1.0). They must add up to 1.</li>
          <li><em>Step 3</em>: Add all your <b>options</b> (e.g., "Job Offer #1").</li>
          <li><em>Step 4</em>: Score all your <b>options</b> on a scale of 1 - 4.</li>
          <li><em>Step 5</em>: Your highest ranked <b>option</b> is at the top of the list! :)</li>
        </ul>

        <h2>Add your decision factors</h2>
        <DecisionTable
          factors={this.state.factors}
          handleFactorUpdate={this.handleFactorUpdate}
        />

        <form className={classes.container} id="factor-form" noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Factor Name"
            placeholder={`"Salary"`}
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleFactorChange('name')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Weight"
            placeholder={`"0.5"`}
            className={classes.textField}
            value={this.state.weight}
            onChange={this.handleFactorChange('weight')}
            onKeyPress={this.enterPressed.bind(this)}
            margin="normal"
            variant="outlined"
          />
        </form>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleFactorRowSubmit}>
          Add new factor
        </Button>
        <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleClearFactors}>
          Clear all factors
        </Button>



        <h2>Add your option</h2>
        <OptionTable/>

      </Layout>
    );
  }
}

export default withStyles(styles)(IndexPage)
