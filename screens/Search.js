import React, { Component } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Text,
  FlatList
} from "react-native";
import {Avatar, ListItem, Icon} from "react-native-elements";
import db from "../config";

export default class SearchScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      allTransactions: []
    }
  }
  render() {
    const {SearchText, allTransactions} = this.state;
    return (
      <View style={styles.lowerConstraint}>
        <View style={styles.container}>
          <Text style={styles.text}>Tela de Pesquisa</Text>
        </View>
      </View>
    );
  }
}

getTransactions = () => {
  db.collection("transactions")
  .get()
  .then(snapshot => {
    snapshot.docs.map(doc => {
      this.setState({
        allTransactions: [... this.state.allTransactions, doc.data()]
      });
    });
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
