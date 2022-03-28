import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: string) => {
    try {
        await AsyncStorage.setItem('token', value);
    } catch (e) {
        console.log({e});
    }
}

export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('token');
        if(value !== null) {
        alert('You need to be logged in!')
        }
    } catch(e) {
        console.log({e});
    }
}
