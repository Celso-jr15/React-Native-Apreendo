import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent:{
       width: "95%" ,
       height: "auto",
       backgroundColor: "#000",
       marginLeft: "3%",
       marginBottom: 15,
       borderRadius:10,
       flexDirection: "row",
       alignItems: "center",
       padding:10,
    },
    contextLeft: {
        width: "36%",
        height:"100%",
        alignItems:"flex-start",

    },
    boxLogo: {
        flexDirection: "row",
        alignItems: "center"
    },
    logBitcoin:{
        width: 40,
        height: 40,
        marginLeft:2,
    },
    dayCotation:{
        marginLeft: 20,
        fontSize:16,
        color:"#fff",
        fontWeight: "bold",

    },
    contextRigth: {
        width: "60%",
        alignItems:"flex-end",
    },
    price:{
        color:"#fff",
        fontSize: 18,
        fontWeight: "bold",
    }
})

export default styles