import react from 'react';
import { SafeAreaView, View,Text,StyleSheet,useColorScheme } from 'react-native'

function AppPro():JSX.Element{
    const isDarkMode=useColorScheme()==='dark'
    return (
        <SafeAreaView>
        
            <View style={styles.container}>
                <Text style={isDarkMode?styles.whiteText:styles.darkText}>suya</Text>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        //flex:1,
        alignItems:'center',
        justifyContent:"center"
    },
    whiteText:{
        color:"#ffffff"
    },
    darkText:{
        color:"#000000"
    }
})
export default AppPro