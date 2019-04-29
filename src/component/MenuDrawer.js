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
import HaleyMK from '../assets/pics/HaleyMK.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';
import { whileStatement } from '@babel/types';


export default class MenuDrawer extends React.Component {
	navLink(nav, text, icon) {
		return(
			<TouchableOpacity
			style={{ height: 50, flexDirection: 'row'}}
			onPress={() => this.props.navigation.navigate(nav)} 
			onPressOut={() => this.props.navigation.closeDrawer()}
			>
				<Text style={styles.link}>{text} </Text>
				<Icon name={icon} style={{fontSize: 30, paddingRight: 20, justifyContent: 'flex-end'}}/>
			</TouchableOpacity>
		)
	}
	render() {
		return(
			<View style={styles.container}>
				{/* <ScrollView style={styles.scroller}> */}
                   <ImageBackground
                   source={Sky}
                   style={{width:'100%'}}
                   >
                        <View style={styles.topLinks}>
                            <View style={styles.profile}>
                                <View style={styles.imgView}>
									<Image 
                            			source={HaleyMK} 
										style={styles.img} 
										/>
                                </View>
                                <View style={styles.profileText}>
                                    <Text style={styles.name}>Haley Medved Kendrick</Text>
                                </View>
                            </View>
                        </View>
                   </ImageBackground>
					<View style={styles.bottomLinks}>
						{this.navLink('Home', 'Home', 'home')}
						{this.navLink('Profile', 'Profile', 'user')}
                        {this.navLink('Map', 'Map', 'map-signs')}
                        {this.navLink('Favorites', 'Favorites', 'heart')}
						{this.navLink('Playlists', 'Playlists', 'folder-open')}
					</View>
					<View style={styles.contact}>
						<Text style={{fontSize: 15, fontWeight: 'bold'}}>Contact</Text>
						<Text style={{fontSize: 15, fontWeight: 'bold'}}>Bham@gems.com</Text>
					</View>
				{/* </ScrollView> */}
				<View style={styles.footer}>
					<Text style={styles.description}>Bham Gems</Text>
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
	btn:{
		height: 50,
		flexDirection: 'row'
	},
	btnActive:{
		height: 50,
		flexDirection: 'row',
		color: 'orange'
	},
	scroller: {
		flex: 1,
	},
	contact:{
		bottom: 0,
		backgroundColor: 'white',
		alignItems: 'flex-start',
		paddingBottom: 20,
		paddingLeft: 20,
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
		fontSize: 25,
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