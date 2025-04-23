import { Alert } from "react-native";
import { Appbar, Avatar } from "react-native-paper";
import { View } from "react-native";

const DemoAppBar = () =>{
    const goBack =  () => Alert.alert('Go back')
    const search = () => Alert.alert('Search'

    )
    return (
        <View style={{flex: 1}}>
            <Appbar.Header>
                <Appbar.BackAction onPress={goBack}/>
                <Appbar.Content title = 'Home'/>
                <Appbar.Action icon='magnify' onPress={search}/>
            </Appbar.Header>
            <Avatar.Icon icon={('home')}/>
            {/* <Avatar.Image size={24}  source={require('/HocTap/React_Native/test2/DemoReactNative/images/img1.png')}/> */}

        </View>
    )
}

export default DemoAppBar