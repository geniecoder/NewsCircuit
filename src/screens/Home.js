import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, FlatList, TouchableOpacity, onPress, SafeAreaView } from 'react-native';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import Card from '../components/Card';
import CHeader from '../components/CHeader';
import { GetApiRequest } from '../utilities/apicall';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: null
    };
    console.log(`screen name: ${this.props.route.name}`)
  }


  componentDidMount() {
    this.loadData();
  }
  showLoader = () => {
    this.setState({ isLoading: true })
  }
  loadingView = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={'black'} />
      </View>
    )
  }

  renderItem = ({ item, index }) => (
   
      <Card title={item.title} imageUrl={item.urlToImage} newsDetail={item.description} checkLoad={this.showLoader} navigation={this.props.navigation} url={item.url} />
  

  );

  contentView = () => {
    if (this.state.isLoading) {
      return (
        this.loadingView()
      );
    } else {
      return (
        <View >
          <View>
          <CHeader Tname={this.props.route.name}/>
          </View>
 
          <View style={styles.container}>
            <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
            />
          </View>

        </View>




      );
    }
  }




  loadData = () => {

    let URL;
    if (this.props.route.name === 'All News') {
      URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=df82c4f6e3664b258f610070a8a01f2b";

    }
    else if (this.props.route.name === 'Top News') {
      URL = "https://newsapi.org/v2/everything?q=apple&from=2021-01-09&to=2021-01-09&sortBy=popularity&apiKey=df82c4f6e3664b258f610070a8a01f2b";
    }
    else if (this.props.route.name === 'Life Style') {
      URL = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=df82c4f6e3664b258f610070a8a01f2b";
    }

    GetApiRequest(URL)
      .then(res => {
        //console.log(`res: ${JSON.stringify(res.articles)}`);
        if (res.status == 'ok') {
          this.setState({ data: res.articles });

        }
      })
  }

  render() {
    return (
      this.contentView()

    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5

  }
})

export default Home;
