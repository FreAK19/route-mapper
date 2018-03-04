//  @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Logo from '../../components/Logo';

type Props = {
  caption: string
};

export class Home extends Component<Props> {
  render() {
    const {caption} = this.props;
    return (
      <React.Fragment>
        <Logo/>
        <h1>{caption}</h1>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  caption: state.data.caption
}))(Home);
