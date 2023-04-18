import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/themeContext";
import { styles } from "../style/globalStyle";
interface  ButtonProps {
    onPress: ()=> void,
    title: string,
    isBlue?: boolean,
    isGray?: boolean,
}

export default function Button({title, isBlue, isGray, onPress}: ButtonProps) {
    const theme = useContext(ThemeContext)
    console.log('btn', theme)
    return (
        <TouchableOpacity
            style = {
                isBlue ? styles.btnBlue : isGray ? styles.btnGray : theme === 'light' ? styles.btnLight : styles.btnDark
            }
            onPress = {onPress}
        >
            <Text
                style={
                    isBlue || isGray ? styles.smallTextLight : theme==='dark' ? styles.smallTextLight : styles.smallTextDark 
                }
            >
                {title}
            </Text>

        </TouchableOpacity>
    )
}