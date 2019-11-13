import React from 'react';
import { Component } from 'react';
import { Keyboard, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';

import { IUireducer } from '../../store/reducers/ui.reducer';

interface IProps {
  text: string;
  onPress: () => void;
  uiReducer: IUireducer;
}

class BlockButton extends Component<IProps> {
  public render() {
    return (
      <Button
        style={styles.button}
        contentStyle={styles.container}
        mode={"contained"}
        dark={true}
        loading={this.props.uiReducer.isLoading}
        onPress={() => {
          Keyboard.dismiss();
          this.props.onPress();
        }}
      >
        {this.props.text}
      </Button>
    );
  }
}

const mapStateToProps = state => {
  return { uiReducer: state.uiReducer };
};

// tslint:disable-next-line: no-default-export
export default connect(mapStateToProps, {
  // actions here
})(BlockButton);

const styles = StyleSheet.create({
  container: {
    height: 55
  },
  button: {}
});
