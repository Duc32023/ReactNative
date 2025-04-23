import { View } from "react-native";
import { Button } from "react-native-paper";
const DemoIcon = () =>{
    return(
        <View style = {{flex: 1, justifyContent: "center"}}>
            <Button icon='home'>
                Click me

            </Button>
        </View>
    )
}
export default DemoIcon