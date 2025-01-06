import React, { useRef } from 'react';
import {
	Animated,
	View,
	Button,
	StyleSheet,
	Dimensions,
	Text,
	Alert,
	TouchableOpacity,
	Pressable,
} from 'react-native';

export default function AnimatedBox() {
	return (
		<View style={compindStyle}>
			<Button
				title='Learn More'
				color='#841584'
				accessibilityLabel='Learn more about this purple button'
			/>
			<TouchableOpacity style={styles.btn}>
				<Text style={styles.text}>hello</Text>
			</TouchableOpacity>
			<Pressable
				style={styles.btn}
				onPress={() => alert('hello')}>
				<Text style={styles.text}>click</Text>
			</Pressable>
			<Button
				title='Press me'
				onPress={() => Alert.alert('Simple Button pressed')}
			/>
		</View>
	);
}
const isActive = true;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	},
	btn: {
		backgroundColor: 'blue',
		paddingHorizontal: 40,
		margin: 10,
		paddingVertical: 10,
		borderRadius: 10,
	},
	text: {
		color: 'white',
	},
});

const active = StyleSheet.create({
	container: {
		backgroundColor: 'green',
	},
});

const notActive = StyleSheet.create({
	container: {
		backgroundColor: 'red',
	},
});

const compindStyle = StyleSheet.compose(
	styles.container,
	isActive ? active.container : notActive.container
);
