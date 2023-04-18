import { StyleSheet } from "react-native";
import { MyColors } from "./colors";

export const styles = StyleSheet.create({
    btn: {

    },
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: MyColors.blue,
        justifyContent: 'center',
        alignItems:'center',
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: MyColors.btnDrak,
        justifyContent: 'center',
        alignItems:'center',
        margin: 8,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: MyColors.white,
        justifyContent: 'center',
        alignItems:'center',
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: MyColors.btnGray,
        justifyContent: 'center',
        alignItems:'center',
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: MyColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: MyColors.black
    },
    // key board 
    row: {
        maxWidth:'100%',
        flexDirection: 'row'
    },
    viewBottom: {
        position: 'absolute',
        bottom: 40,
    },
    screenFirstNumber: {
        // position: 'absolute',
        fontSize: 96,
        color: MyColors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',
    },
    screenSecondNumber: {
        // position: 'absolute',
        fontSize: 40,
        color: MyColors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end'
    }
});



