import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    width: '35%',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    // overflowX: 'auto',
  },
  table: {
    maxWidth: 300,
    marginLeft: theme.spacing.unit,
  },
});

let id = 0;
function createData(factor, weight) {
  id += 1;
  return { id, factor, weight };
}

const rows = [
  createData('Salary', 1.0),
];

class DecisionTable extends React.Component {

  state = {
    id: 0,
    name: '',
    weight: 0,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
    this.updateRow();
  }

  updateRow = () => {
    let factor = this.state;
    this.props.handleFactorUpdate(factor);
  }

  render() {

    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Factor</TableCell>
              <TableCell align="right">Weight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.props.factors.map((factor) => (
            <TableRow key={factor.id}>
              <TableCell component="th" scope="row">
                {factor.name}
              </TableCell>
              <TableCell align="right">
                {factor.weight}
              </TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

DecisionTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DecisionTable);
