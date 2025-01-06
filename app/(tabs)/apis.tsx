import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';

function APIs() {
	const x = { title: '', body: '', id: 0 };
	const [data, setData] = useState([x]);
	const fetchData = async () => {
		const repo = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await repo.json();
		setData(data);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.scrolling}
				showsHorizontalScrollIndicator={false}>
				{data.map((item) => (
					<View
						style={styles.contentBox}
						key={item.id}>
						<Text style={styles.title}>{item.title}</Text>
						<Text style={styles.subtitle}>{item.body}</Text>
						<Text style={styles.subtitle}>main</Text>
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

// const x = { title: '', body: '' };
// const [data, setData] = useState([x]);

// const fetchData = async () => {
// 	try {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// 		const result = await response.json();
// 		setData(result);
// 	} catch (error) {
// 		console.error('Error fetching data:', error);
// 	}
// };

// useEffect(() => {
// 	fetchData();
// }, []);
