import { Text,StyleSheet,View, SafeAreaView } from "react-native"; 
import Title from "../Components/ui/Title";
import { useState } from "react";
import NumberContainer from "../Components/game/NumberContainer";

function GenerateRandomBetween(min,max,exclude){
    const rndNum = Math.floor(Math.random() * (max - min))  + min;
    if(rndNum===exclude){
        return GenerateRandomBetween(min,max,exclude);
    }
    else{
        return rndNum;
    }
}



export default function GameScreen({userNumber}){
    const initialGuess = GenerateRandomBetween(1,100)
    const [currentGuess, setCurrentGuess ] = useState(initialGuess); 
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={styles.screen}>
            <Title>Opponent's Guest</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Text></Text>
            <View>
                <Text>Higher or lower?</Text>
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
         flex: 1,
         padding:24
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth:2,
        borderColor: '#ddb52f',
        padding:12,
    }

}
)