import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed58ba',
		title: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8aa97f63',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3df-bd96-145571e29d72',
		title: 'Third Item',
	},
	{
		id: 'bd7acbea-c1d5-3ad53abb28ba',
		title: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-ad91aa97f63',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3da1--145571e29d72',
		title: 'Third Item',
	},
	{
		id: 'bd7acbea-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
	},
	{
		id: '3ac68afc8-fbd91aa97f63',
		title: 'Second Item',
	},
	{
		id: '58694a0f-145571e29d72',
		title: 'Third Item',
	},
	{
		id: 'bd7acbea-c1d5-3ad53abb28ba',
		title: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa9763',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e9d72',
		title: 'Third Item',
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5bb28ba',
		title: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-a43',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145572',
		title: 'Third Item',
	},
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

const Other = () => (
	<SafeAreaProvider>
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={({ item }) => <Item title={item.title} />}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	</SafeAreaProvider>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});

export default Other;
