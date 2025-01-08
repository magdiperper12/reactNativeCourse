import React, { useState, useEffect, useRef } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import FaIcon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';

const AImessage = () => {
	const [inputValue, setInputValue] = useState('');
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const [messages, setMessages] = useState([]);
	const [isTyping, setIsTyping] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const chatEndRef = useRef(null);

	const handleSendMessage = () => {
		if (inputValue.trim()) {
			const time = new Date().toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
			});
			const newUserMessage = { text: inputValue, type: 'user', time };
			setMessages((prevMessages) => [...prevMessages, newUserMessage]);
			setInputValue('');

			setIsTyping(true);

			setTimeout(() => {
				const botReply =
					'This is an automatic response. How can I assist you further?';
				setMessages((prevMessages) => [
					...prevMessages,
					{
						text: botReply,
						type: 'bot',
						time: new Date().toLocaleTimeString(),
					},
				]);
				setIsTyping(false);
			}, 1500);
		}
	};

	const handleFileClick = async () => {
		const result = await launchImageLibrary({ mediaType: 'photo' });
		if (result.assets?.length) {
			setInputValue((prev) => `${prev} ${result.assets[0].fileName}`);
		}
	};

	useEffect(() => {
		if (chatEndRef.current) {
			chatEndRef.current.scrollToEnd({ animated: true });
		}
	}, [messages, isTyping]);

	return (
		<View style={styles.container}>
			{/* Chat Toggle Button */}
			<TouchableOpacity
				style={[styles.chatToggle, { opacity: isVisible ? 0 : 1 }]}
				onPress={() => setIsVisible((prev) => !prev)}>
				<Icon
					name='chatbubble-ellipses'
					size={30}
					color='#FFF'
				/>
			</TouchableOpacity>

			{/* Chat Window */}
			{isVisible && (
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : undefined}
					style={styles.chatWindow}>
					<View style={styles.header}>
						<Image
							source={{
								uri: 'https://images.pexels.com/photos/344738/pexels-photo-344738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
							}} // Replace with actual logo URL
							style={styles.logo}
						/>
						<Text style={styles.headerText}>Historic</Text>
						<TouchableOpacity onPress={() => setIsVisible(false)}>
							<Icon
								name='chevron-down'
								size={25}
								color='#fff'
							/>
						</TouchableOpacity>
					</View>

					<FlatList
						data={messages}
						keyExtractor={(item, index) => index.toString()}
						ref={chatEndRef}
						contentContainerStyle={styles.chatContainer}
						renderItem={({ item }) => (
							<View
								style={[
									styles.message,
									item.type === 'user' ? styles.userMessage : styles.botMessage,
								]}>
								<Text style={styles.messageText}>
									{item.text} {'hello'}
								</Text>
								<Text style={styles.timestamp}>
									{item.time} {'hello'}
								</Text>
							</View>
						)}
					/>

					{isTyping && <Text style={styles.typingIndicator}>Typing...</Text>}

					<View style={styles.inputContainer}>
						<TouchableOpacity onPress={handleFileClick}>
							<Icon
								name='attach'
								size={25}
								color='#555'
							/>
						</TouchableOpacity>
						<TextInput
							style={styles.input}
							value={inputValue}
							onChangeText={setInputValue}
							placeholder='Type a message'
							onSubmitEditing={handleSendMessage}
						/>
						<TouchableOpacity onPress={handleSendMessage}>
							<Icon
								name='send'
								size={25}
								color='#007AFF'
							/>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1 },
	chatToggle: {
		position: 'absolute',
		bottom: 20,
		right: 20,
		backgroundColor: '#62b5e2',
		width: 56,
		height: 56,
		borderRadius: 28,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	chatWindow: {
		position: 'absolute',
		bottom: 80,
		right: 20,
		width: '80%',
		backgroundColor: '#FFF',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		backgroundColor: '#62b5e2',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	logo: { width: 40, height: 40, borderRadius: 20 },
	headerText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
	chatContainer: { padding: 10 },
	message: { padding: 10, borderRadius: 10, marginVertical: 5 },
	userMessage: {
		alignSelf: 'flex-end',
		backgroundColor: '#007AFF',
		color: '#FFF',
	},
	botMessage: {
		alignSelf: 'flex-start',
		backgroundColor: '#E5E5EA',
		color: '#000',
	},
	messageText: { fontSize: 16 },
	timestamp: { fontSize: 12, color: '#888' },
	typingIndicator: { margin: 10, fontSize: 14, color: '#888' },
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderTopWidth: 1,
		borderTopColor: '#E5E5EA',
		padding: 10,
	},
	input: { flex: 1, paddingHorizontal: 10, fontSize: 16 },
});

export default AImessage;
