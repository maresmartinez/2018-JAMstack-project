import React, { Component } from 'react'
import emotionList from '../data/emotions/emotion-list'
import emotionListStyle from './EmotionsList.module.css'
import EmotionItem from './EmotionsItem'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { submitEmotion } from '../actions'
import { withStyles } from '@material-ui/core/styles'
// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

// To include the default styles

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 70,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  button: {
    margin: theme.spacing.unit,
    marginRight: 0,
  },
})

class EmotionsList extends Component {
  state = {
    showSlider: false,
    open: false,
    value: 2.5,
    horizontal: 10,
    currentEmoClicked: null
  }

  handleChange = value => {
    this.setState({
      value: value,
    })
  }

  handleEmoClick = emo => {
    this.setState({
      open: true,
      currentEmoClicked: emo
    })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  onSubmitButtonClick = () => {
    const { name, id } = this.state.currentEmoClicked;
    this.props.submitEmotion({ scaleValue: this.state.value, name, id });
    this.setState({
      open: false,
    })
  }

  render() {
    const { classes } = this.props
    const labels = {
      0: 'Not much',
      2.5: 'So so',
      5: 'Intense',
    }
    return (
      <div className={emotionListStyle.emotionsList}>
        {emotionList.map(emo => (
          <EmotionItem
            key={emo.name}
            id={emo.id}
            name={emo.name}
            image={emo.image}
            onEmoClick={() => this.handleEmoClick(emo)}
          />
        ))}

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <div className={emotionListStyle.modalContentContainer}>
              <div className="slider custom-labels">
                <h4>How would you scale your feeling?</h4>
                <Slider
                  step={0.5}
                  labels={labels}
                  tooltip={false}
                  format={value => value}
                  min={0}
                  max={5}
                  handleLabel={this.state.value.toString()}
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
              <div className={emotionListStyle.buttonWrapper}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={this.onSubmitButtonClick}
                >
                  Ok
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default connect(
  null,
  { submitEmotion }
)(withStyles(styles, { name: 'EmotionsList' })(EmotionsList))
