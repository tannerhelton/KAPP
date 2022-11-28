import React from 'react';
import {TextInput, Button, View, StyleSheet, Text} from 'react-native';

export default class GPA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      courseName: '',
      courseGrade: '',
      courseHours: '',
      gpa: 0,
    };
  }

  nameChange = text => {
    this.setState({courseName: text});
  };

  hoursChange = text => {
    this.setState({courseHours: text});
  };

  gradeChange = text => {
    this.setState({courseGrade: text.toUpperCase()});
  };

  addCourse = () => {
    const {courseName, courseGrade, courseHours} = this.state;
    this.setState({
      courses: [...this.state.courses, {courseName, courseHours, courseGrade}],
      courseGrade: '',
      courseHours: '',
      courseName: '',
    });
  };

  getGradePoints = grade => {
    let points = 0;
    switch (grade.substring(0, 1)) {
      case 'A':
        points += 4;
        break;
      case 'B':
        points += 3;
        break;
      case 'C':
        points += 2;
        break;
      case 'D':
        points += 1;
        break;
      case 'F':
        points += 0;
        break;
    }
    if (grade.length > 1) {
      switch (grade.substring(1, 2)) {
        case '+':
          if (points < 4) {
            points += 0.3;
          }
          break;
        case '-':
          points -= 0.3;
          break;
        default:
          points += 0;
          break;
      }
    }
    return points;
  };

  getGPA = () => {
    const {courses} = this.state;
    let totalHours = 0;
    let totalGradePoints = 0;
    const regAF = new RegExp('^[A-F]$');
    courses.forEach(course => {
      if (
        course.courseGrade.length > 2 ||
        course.courseGrade.length < 1 ||
        regAF.test(course.courseGrade.substring(0, 1)) === false ||
        (course.courseGrade.substring(1) !== '+' &&
          course.courseGrade.substring(1) !== '-')
      ) {
        alert('Invalid grade on course: ' + course.courseName);
        return;
      }
      totalHours += Number(course.courseHours);
      totalGradePoints +=
        this.getGradePoints(course.courseGrade) * Number(course.courseHours);
    });
    this.setState({gpa: totalGradePoints / totalHours});
  };

  render() {
    return (
      <View>
        {this.state.courses.map((course, index) => (
          <View style={styles.container} key={index}>
            <Text>Name: {course.courseName}</Text>
            <Text>Hours: {course.courseHours}</Text>
            <Text>Grade: {course.courseGrade}</Text>
          </View>
        ))}
        <Text>Course Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.nameChange}
          value={this.courseName}
        />
        <Text>Course Hours (Number only: 4, 3, 2):</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.hoursChange}
          value={this.courseHours}
          keyboardType="numeric"
        />
        <Text>
          Course Grade (Only enter letter and symbol: A+, B, C-, etc.):
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={this.gradeChange}
          value={this.courseGrade}
        />
        <Button title="Add Course" onPress={this.addCourse} />
        <Button title="Get GPA" onPress={this.getGPA} />

        <Text style={styles.text}>GPA: {this.state.gpa}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
