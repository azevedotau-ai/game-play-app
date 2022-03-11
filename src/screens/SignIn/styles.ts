import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles =  StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.secondary100
        
    },
    images:{
     width: '100%',
     height: 360
    },
    content:{
        marginTop: -20,
        marginHorizontal: 50
    }, 
    title:{
        color: theme.colors.heading,
        fontSize:40,
        textAlign: 'center',
        marginBottom: 16 
    },
    subTitle:{
        color: theme.colors.heading,
        fontSize:15,
        textAlign: "center",
        marginBottom: 64
    }
});