import React from 'react'

import { Link } from 'react-router-dom'

class WordlistByBook extends React.Component {
  componentWillReceiveProps() {
    // this.props.dispatch(getVocabsReq(props.books.id))
  }
  render() {
    return (
      <div className='container'>
       
      </div>
    )
  }
}


// const mapStateToProps = (state) => {
//   return {
//     books: state.books,
//   }
// }

export default connect()(WordlistByBook)