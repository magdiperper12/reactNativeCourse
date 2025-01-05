import React, { useRef } from 'react';
import {
	Animated,
	View,
	Button,
	StyleSheet,
	Dimensions,
	Text,
} from 'react-native';

export default function AnimatedBox() {
	// Retrieve screen dimensions
	const { width, height } = Dimensions.get('window');

	// Initialize animation value
	const fadeAnim = useRef(new Animated.Value(0)).current;

	// Function to trigger fade-in animation
	const fadeIn = () => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true, // Optimize performance with native driver
		}).start();
	};

	return (
		<View style={styles.container}>
			{/* Animated box */}
			<Animated.View style={[styles.box, { opacity: fadeAnim }]} />
			{/* Button to trigger animation */}
			<Button
				title='Fade In'
				onPress={fadeIn}
			/>
			{/* Display screen dimensions */}
			<Text style={styles.text}>
				Width: {width}, Height: {height}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	box: {
		width: 100,
		height: 100,
		backgroundColor: 'blue',
		marginBottom: 10,
	},
	text: {
		fontSize: 18,
		marginTop: 10,
	},
});
