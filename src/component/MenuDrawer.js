import React from 'react';
import {
	View, 
	Text,
	Image,
	ScrollView,
	StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Sky from '../assets/pics/sky.jpg'


export default class MenuDrawer extends React.Component {
	navLink(nav, text) {
		return(
			<TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		)
	}

	render() {
		return(
			<View style={styles.container}>
				<ScrollView style={styles.scroller}>
                   <ImageBackground
                   source={Sky}
                   style={{width:'100%'}}
                   >
                        <View style={styles.topLinks}>
                            <View style={styles.profile}>
                                <View style={styles.imgView}>
                                    <Image style={styles.img} source={{ uri: "https://411mania.com/wp-content/uploads/2018/04/John-Cena-Raw-4218-645x370.jpg" }} />
                                </View>
                                <View style={styles.profileText}>
                                    <Text style={styles.name}>John Cena</Text>
                                </View>
                            </View>
                        </View>
                   </ImageBackground>
					<View style={styles.bottomLinks}>
						{this.navLink('Home', 'Home')}
						{this.navLink('Profile', 'Profile')}
                        {this.navLink('Map', 'Map')}
                        {this.navLink('Favorites', 'Favorites')}
                        {this.navLink('Playlists', 'Playlists')}
					</View>
				</ScrollView>
				<View style={styles.footer}>
					<Text style={styles.description}>Bham Gemz</Text>
					<Text style={styles.version}>v1.0</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgray',
	},
	scroller: {
		flex: 1,
	},
	profile: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 25,
		borderBottomWidth: 1,
		borderBottomColor: '#777777',
	},
	profileText: {
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	name: {
		fontSize: 35,
		paddingBottom: 5,
        color: 'black',
        fontWeight: '300',
		textAlign: 'left',
	},
	imgView: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 60,
	},
	img: {
		height: 100,
		width: 100,
        borderRadius: 50,

	},
	topLinks:{
		height: 160,
	},
	bottomLinks: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 10,
		paddingBottom: 450,
	},
	link: {
		flex: 1,
		fontSize: 20,
		padding: 6,
		paddingLeft: 14,
		margin: 5,
		textAlign: 'left',
	},
	footer: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: 'lightgray'
	},
	version: {
		flex: 1, 
		textAlign: 'right',
		marginRight: 20,
		color: 'gray'
	},
	description: {
		flex: 1, 
		marginLeft: 20,
		fontSize: 16,
	}
})