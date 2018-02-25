import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, Button, TextInput, Alert, Keyboard } from 'react-native';

// const dimensions = Dimensions.get('window');
// const imageHeight = Math.round(dimensions.width * 9 / 16);
// const imageWidth = dimensions.width;

const BACKGROUND_COLORS = ["#6BE387", "#387142", "#032E52", "#549091", "#EDD298", "#D6293D", "#FF9751", "#5CD6E8", "#AFFF6B", "#E8638E", "#FFE765"];


const COMMUNITY_MEMBERS = [
  {
    name: 'Monte Thakkar',
    image: 'https://avatars2.githubusercontent.com/u/7840686?s=400&v=4',
    github_username: 'monte9'
  },
  {
    name: 'Ryan Liszewski',
    image: 'https://avatars3.githubusercontent.com/u/5275250?s=460&v=4',
    github_username: 'ryanliszewski'
  },
  {
    name: 'Thomas Zhu',
    image: 'http://thomaszhu.com/resources/thomas_avatar.jpeg',
    github_username: 'thomashzhu'
  },
  {
    name: 'Bhavesh Chowdhury',
    image: 'https://avatars3.githubusercontent.com/u/13439148?s=460&v=4',
    github_username: 'bhaveshc789'
  },
  {
    name: 'Sukhjit Singh',
    image: 'https://avatars1.githubusercontent.com/u/18251293?s=400&u=1ee2922f2dd90d94bb4efbec7cc815ef510a0ad7&v=4',
    github_username: 'sukhjitsingh'
  },
  {
    name: 'Prakash Gurung',
    image: 'https://avatars.githubusercontent.com/makkhay',
    github_username: 'makkhay'
  },
  {
    name: 'Nicholas Szeto',
    image: 'https://avatars1.githubusercontent.com/u/23561635?s=460&v=4',
    github_username: 'niszeto'
  },
  {
    name: 'Emanuel Saunders',
    image: 'https://scontent-lax3-2.cdninstagram.com/vp/1ee634d2bdf29d5a327858a15ccfdf42/5B26F2E8/t51.2885-19/s150x150/18160691_1198139890329419_5383374010954285056_a.jpg',
    github_username: 'saundemanu'
  },
  {
    name: 'William Hua',
    image: 'https://avatars3.githubusercontent.com/u/36139326?s=460&v=4',
    github_username: 'william-hua'
  },
  {
    name: 'Mitul Savani',
    image: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/18556546_1553987881278489_849408995015005895_o.jpg?oh=bb65219475a9cbac85ca7090e7ee877b&oe=5ADE398B',
    github_username: 'mitulsavani'
  },
  {
    name: 'Jakhongir Khusanov',
    image: 'https://avatars0.githubusercontent.com/u/25942541?s=460&v=4',
    github_username: 'jkhusanov'
  },
  {
    name: 'Teodora Caneva',
    image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c44.0.320.320/p320x320/20914645_1579156895438534_1027285013181250707_n.jpg?oh=0ff1b3c4c8bc8e00edb84cecd660d0fe&oe=5B1C897A',
    github_username: 'kodekat'
  },
  {
    name: 'Affaan Ghazzali',
    image: 'https://avatars0.githubusercontent.com/u/32111151?s=460&v=4',
    github_username: 'affaanghazzali'
  },
  {
    name: 'Girish Rawat',
    image: 'https://avatars2.githubusercontent.com/u/6697235?s=460&v=4',
    github_username: 'GirishRawat'
  },
  {
    name: 'Karan Gupta',
    image: 'https://avatars1.githubusercontent.com/u/19352928?s=460&v=4',
    github_username: 'karanguptak9'
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentColor: '#604860',
      phrase: ''
    }
  }

  renderMemberRow(member) {
    return (
      <View style={styles.rowContainer} key={member}>
        <Image source={{ url: member.image }} style={styles.avatar} />
        <Text style={styles.nameLabel}>{member.name}</Text>
        <Text style={styles.githubUsernameLabel}>@{member.github_username}</Text>
      </View>
    )
  }

  validateInput() {
    if (this.state.phrase === 'GIRISH') {
      Keyboard.dismiss
      Alert.alert(
        'Success',
        'You entered the right phrase!',
        [
          { text: 'OK', onPress: () => console.log('OK pressed') }
        ],
        { cancelable: false }
      )
    } else {
      Keyboard.dismiss
      Alert.alert(
        'Invalid',
        'You entered the wrong phrase!',
        [
          { text: 'Try again', onPress: () => console.log('Try again pressed') }
        ],
        { cancelable: false }
      )
    }
  }

  changeBackgroundColor() {
    var color = BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)];
    console.log(color);
    this.setState({ currentColor: color })
    console.log("Button pressed!");
  }

  render() {
    const { currentColor } = this.state
    return (

      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.imageRow}
          source={require('./Assets/sanFrancisco.png')}
        />
        <Image
          style={styles.imageRow}
          source={require('./Assets/newYork.png')}
        />
        <Image
          style={styles.imageRow}
          source={require('./Assets/tokyo.png')}
        />
        <Image
          style={styles.imageRow}
          source={require('./Assets/newDelhi.png')}
        />

        <View style={styles.smallRow}>
          <Image
            style={styles.thumbnailImage}
            source={require('./Assets/facebook.png')}
          />
          <Image
            style={styles.thumbnailImage}
            source={require('./Assets/twitter.png')}
          />
          <Image
            style={styles.lastThumnail}
            source={require('./Assets/instagram.png')}
          />
        </View>

        <View style={[styles.imageRow, { backgroundColor: currentColor }]}>
          <Button
            title="Shakalaka!"
            onPress={() => this.changeBackgroundColor()}
          />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(phrase) => this.setState({ phrase })}
            placeholder="Enter secret phrase"
            placeholderTextColor="white"
            selectionColor="white"
            underlineColorAndroid="transparent"
            value={this.state.phrase}
            onSubmitEditing={() => this.validateInput()}
          />
        </View>

        <View style={styles.listViewContainer}>
          <FlatList
            data={COMMUNITY_MEMBERS}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => this.renderMemberRow(item)}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollView: {
    backgroundColor: '#604860',
    flex: 1
  },

  imageRow: {
    flex: 1,
    width: '100%',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  imageCol: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  smallRow: {
    flex: 1,
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  imageColContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  listViewContainer: {
    backgroundColor: '#DA727E',
    justifyContent: 'center',
    marginBottom: 50
  },

  rowContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: 'gray'
  },

  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 10
  },

  nameLabel: {
    fontSize: 18,
    color: '#455C7B',
    marginLeft: 10,
    fontWeight: 'bold'
  },

  githubUsernameLabel: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15,
    color: '#44484B',
    marginRight: 20
  },

  thumbnailImage: {
    height: 50,
    width: 50,
    borderRadius: 75,
    marginRight: 30
  },

  lastThumnail: {
    height: 50,
    width: 50,
    borderRadius: 75
  },

  textInputContainer: {
    backgroundColor: '#4F80E1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginVertical: 50
  },

  textContainer: {
    height: 50,
    width: '80%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: 'white'
  }
});
