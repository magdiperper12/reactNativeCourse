import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	RefreshControl,
	Platform,
} from 'react-native';

function APIs() {
	const x = { title: '', body: '', id: 0 };
	const [data, setData] = useState([x]);
	const [refreshing, setRefreshing] = useState(false);

	const fetchData = async () => {
		const repo = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await repo.json();
		setData(data);
	};

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 7000);
	}, []);
	{
		refreshing && Platform.OS === 'android' && <Text>Refreshing data...</Text>;
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						titleColor='blue' // Optional spinner title color for Android
						progressBackgroundColor={'red'}
					/>
				}
				style={styles.scrolling}
				showsHorizontalScrollIndicator={false}>
				{data.map((item) => (
					<View
						style={styles.contentBox}
						key={item.id}>
						<Text style={styles.title}>title : {item.title}</Text>
						<Text style={styles.subtitle}>{item.body}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
}

export default APIs;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
	},
	contentBox: {
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
		alignItems: 'center',
		margin: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'black',
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 18,
		color: 'black',
		textAlign: 'center',
	},
	scrolling: {
		gap: 10,
	},
});
