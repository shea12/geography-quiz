import React from 'react'
import PropTypes from 'prop-types'

import CategoryButton from './buttons/categorybutton'
import BackButton from './buttons/backbutton'

const style = {
  buttonGrouping: {
    position: 'relative',
    zIndex: 2,
    display: 'inline-block',
  },
}

function CreateOptionsButtons(props) {
  // console.log('props: ', props)
  const categories = props.options
  const items = []
  let i = 0
  Object.keys(categories).forEach(function(item) {
    items.push(<CategoryButton key={i} title={categories[item].title} code={item} handler={props.handler} />)
    i += 1
  })
  return (
    <div style={style.buttonGrouping}>
      {items}
    </div>
  )
}

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    // console.log('receiving props in header')
  }

  render() {
    let backbutton = <div />
    if (!this.props.options.CTN) {
      backbutton = <BackButton handleBack={this.props.handleBack} />
    } else {
      backbutton = <div />
    }
    return (
      <div>
        {backbutton}
        <div style={{ textAlign: 'center' }}>
          <CreateOptionsButtons 
            options={this.props.options}
            handler={this.props.handler}
          />
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  options: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
}
