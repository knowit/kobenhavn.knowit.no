import React from 'react'
import PropTypes from 'prop-types'
import viewmodel from '../../json'
import TalkDescription from './TalkDescription'
import TalkSpeaker from './TalkSpeaker'

class Talk extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showDescription: false }
    this.toggleShowDescription = this.toggleShowDescription.bind(this)
  }

  toggleShowDescription() {
    this.setState(prevState => ({
      showDescription: !prevState.showDescription,
    }))
  }

  render() {
    const { talkId } = this.props
    const talk = viewmodel.talks[talkId]
    return (
      <div className="talk">
        <div className="talk-speakers">
          {talk.speakers && talk.speakers.length !== 0 ? (
            <TalkSpeaker
              speaker={talk.speakers[0]}
              numberOfSpeakers={talk.speakers.length}
              talkId={talkId}
            />
          ) : null}
        </div>

        <div className="talk-info">
          <strong className="talk-title">{talk.title}</strong>
          <TalkDescription
            description={talk.description}
            showDescription={this.state.showDescription}
            toggleShowDescription={this.toggleShowDescription}
          />
        </div>
      </div>
    )
  }
}

Talk.propTypes = {
  talkId: PropTypes.string.isRequired,
}

export default Talk
