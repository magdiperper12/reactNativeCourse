import {
	Image,
	StyleSheet,
	Platform,
	Text,
	TouchableOpacity,
} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {
	const [show, setShow] = useState(false);
	const [cont, setCount] = useState(0);

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/assets/images/partial-react-logo.png')}
					style={styles.reactLogo}
					onLoad={() => {
						setShow(true);
					}}
				/>
			}>
			{show ? (
				<>
					<ThemedView style={styles.titleContainer}>
						<ThemedText
							type='title'
							style={{ color: 'blue', fontSize: 25 }}>
							Welcome!
						</ThemedText>
						<HelloWave />
					</ThemedView>
					<Text
						style={styles.title}
						numberOfLines={2}>
						This is an example of a Text component with multiple properties
						applied to it. This is an example of a Text component with multiple
						properties applied to it. This is an example of a Text component
						with multiple properties applied to it. This is an example of a Text
						component with multiple properties applied to it. This is an example
						of a Text component with multiple properties applied to it. This is
						an example of a Text component with multiple properties applied to
						it. This is an example of a Text component with multiple properties
						applied to it. This is an example of a Text component with multiple
						properties applied to it.
					</Text>
					<ThemedView style={styles.stepContainer}>
						<ThemedText type='subtitle'>Step 1: Try it</ThemedText>
						<ThemedText>
							Edit
							<ThemedText type='defaultSemiBold'>
								app/(tabs)/index.tsx
							</ThemedText>
							to see changes. Press
							<ThemedText type='defaultSemiBold'>
								{Platform.select({
									ios: 'cmd + d',
									android: 'cmd + m',
									web: 'F12',
								})}
							</ThemedText>
							to open developer tools.
						</ThemedText>
					</ThemedView>
					<ThemedView style={styles.stepContainer}>
						<ThemedText type='subtitle'>Step 2: Explore</ThemedText>
						<ThemedText>
							Tap the Explore tab to learn more about what's included in this
							starter app.
						</ThemedText>
					</ThemedView>
					<ThemedView style={styles.stepContainer}>
						<ThemedText type='subtitle'>Step 3: Get a fresh start</ThemedText>
						<ThemedText>
							When you're ready, run
							<ThemedText type='defaultSemiBold'>
								npm run reset-project
							</ThemedText>
							to get a fresh <ThemedText type='defaultSemiBold'>app</ThemedText>
							directory. This will move the current
							<ThemedText type='defaultSemiBold'>app</ThemedText> to
							<ThemedText type='defaultSemiBold'>app-example</ThemedText>.
						</ThemedText>
					</ThemedView>
					<Text
						style={styles.link}
						onPress={() => alert('Text clicked!')}>
						Clickable Text
					</Text>
					<Text
						style={(styles.title, { color: 'blue', fontSize: 20 })}
						ellipsizeMode='tail'
						numberOfLines={3}>
						This is an example of a Text component with multiple properties
						applied to it. This is an example of a Text component with multiple
						properties applied to it. This is an example of a Text component
						with multiple properties applied to it. This is an example of a Text
						component with This is an example of a Text component with multiple
						properties applied to it. This is an example of a Text component
						with multiple properties applied to it. This is an example of a Text
						component with multiple properties applied to it. This is an example
						of a Text component with This is an example of a Text component with
						multiple properties applied to it. This is an example of a Text
						component with multiple properties applied to it. This is an example
						of a Text component with multiple properties applied to it. This is
						an example of a Text component with This is an example of a Text
						component with multiple properties applied to it. This is an example
						of a Text component with multiple properties applied to it. This is
						an example of a Text component with multiple properties applied to
						it. This is an example of a Text component with This is an example
						of a Text component with multiple properties applied to it. This is
						an example of a Text component with This is an example of a Text
						component with multiple properties applied to it. This is an example
						of a Text component with multiple properties applied to it. This is
						an example of a Text component with multiple properties applied to
						it. This is an example of a Text component with This is an example
						of a Text component with multiple properties applied to it. This is
						an example of a Text component with This is an example of a Text
						component with multiple properties applied to it. This is an example
						of a Text component with multiple properties applied to it. This is
						an example of a Text component with multiple properties applied to
						it. This is an example of a Text component with This is an example
						of a Text component with multiple properties applied to it. This is
						an example of a Text component with multiple properties applied to
						it.
					</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={() => setCount(cont + 1)}>
						<Text style={styles.text}>{cont}</Text>
					</TouchableOpacity>

					<TouchableOpacity style={content.touch}>
						<Text style={content.text}>magdi perper </Text>
					</TouchableOpacity>
				</>
			) : (
				<ThemedView style={styles.loadinContainer}>
					<ThemedText
						type='title'
						style={{ color: 'white', fontSize: 25 }}>
						Loading ...!
					</ThemedText>
				</ThemedView>
			)}
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	loadinContainer: {
		backgroundColor: 'blue',
		width: 400,
		height: 400,
		margin: 'auto',
		textAlign: 'center',
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	link: {
		color: 'blue',
		borderRadius: 4,
		borderColor: 'blue',
		borderStyle: 'solid',
		borderWidth: 1,
		width: 200,
		textAlign: 'center',
		padding: 3,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},

	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'red',
		textAlign: 'left',
		marginBottom: 10,
	},
	button: {
		backgroundColor: '#007BFF',
		padding: 15,
		borderRadius: 5,
		alignItems: 'center',
	},
	text: { color: '#FFF', fontSize: 16 },
});

const content = StyleSheet.create({
	touch: {
		backgroundColor: 'red',
		textAlign: 'center',
		padding: 10,
	},
	text: {
		color: 'white',
		margin: 'auto',
	},
});
