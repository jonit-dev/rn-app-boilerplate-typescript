import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { DefaultTheme } from 'react-native-paper';

import { TS } from '../../helpers/LanguageHelper';

interface IProps {
  label: string;
  onChange: (date) => any;
  minDate?: string;
  maxDate?: string;
  dateFormat?: string;
}

export const DateInput = (props: IProps) => {
  if (!props.dateFormat) {
    props.dateFormat = TS.string("form", "birthdayInputFormat");
  }

  // Set some default dates if its not specified
  if (!props.minDate) {
    props.minDate = moment("19700101").format(props.dateFormat);
  }
  if (!props.maxDate) {
    props.maxDate = moment(new Date()).format(props.dateFormat);
  }

  const datePickerInputStyle = {
    dateIcon: {},
    dateInput: {
      borderWidth: 0
    }
    // ... You can check the source to find the other keys.
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{props.label}</Text>
      </View>

      <View style={styles.inputContainer}>
        <DatePicker
          date={new Date().toISOString()}
          showIcon={false}
          mode="date"
          androidMode="spinner"
          format={TS.string("form", "birthdayInputFormat")}
          minDate={props.minDate}
          maxDate={props.maxDate}
          confirmBtnText={TS.string("global", "genericConfirm")}
          cancelBtnText={TS.string("global", "genericCancel")}
          customStyles={datePickerInputStyle}
          onDateChange={date => props.onChange(date)}
        />
        <View style={styles.iconContainer}>
          <Ionicons
            name={"ios-calendar"}
            size={24}
            color={DefaultTheme.colors.disabled}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    height: 60,
    maxHeight: 60,
    marginBottom: 44,
    borderBottomWidth: 1,
    borderBottomColor: DefaultTheme.colors.disabled
  },
  labelContainer: {
    flex: 3,
    height: "100%",
    marginBottom: 4,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 12
  },
  labelText: {
    fontSize: 16,
    color: DefaultTheme.colors.placeholder
  },
  inputContainer: {
    flex: 7,
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  iconContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
