import React from 'react'
import Layout from '../components/layout'
import EmotionPicker from '../components/EmotionPicker';
// import Login from '../components/Login'

class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <h2>How are you feeling right now?</h2>
        {/*<Login onAuthChange={this.handleLogin}/>*/}
        <EmotionPicker />

      </Layout>
    )
  }
}

export default IndexPage;
