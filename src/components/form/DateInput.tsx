import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';

import { colors } from '../../constants/UI/Colors.constant';

interface IProps {
  label: string;
  onChange: (date) => any;
}

export const DateInput = (props: IProps) => {
  const dateFormat = "YYYY-MM-DD";
  const minDate = moment("19700101").format(dateFormat);
  const maxDate = moment(new Date()).format(dateFormat);

  const datePickerInputStyle = {
    dateIcon: {
      position: "absolute",
      left: 0,
      top: 4,
      marginLeft: 0
    },
    dateInput: {
      borderWidth: 0,
      borderBottomWidth: 1,
      borderBottomColor: colors.dark
    }
    // ... You can check the source to find the other keys.
  };

  console.log(minDate);
  console.log(maxDate);

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text>{props.label}</Text>
      </View>

      <View style={styles.inputContainer}>
        <DatePicker
          style={styles.datepicker}
          date={new Date().toISOString()}
          mode="date"
          androidMode="calendar"
          placeholder="Select your birthday"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={datePickerInputStyle}
          onDateChange={date => props.onChange(date)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexWrap: "wrap",
    height: 70,
    maxHeight: 70
  },
  label: {
    flex: 3,
    width: "100%",
    fontSize: 6,
    color: colors.dark
  },
  inputContainer: {
    flex: 7,
    width: "100%"
  },
  datepicker: {
    width: "100%"
  }
});
