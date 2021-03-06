
declare module 'react-native-hh-button-view'{
    import { ViewStyle } from 'react-native'
    import {Component} from 'react'

    export interface ButtonViewProps{
        activeOpacity?: number,
        title: string,
        disabled?: boolean,
        btnTitleStyle?: ViewStyle
        btnViewStyle?: ViewStyle
        onPressCallback?: () => void,
    }
    export default class ButtonView extends Component<ButtonViewProps, any> {
    }
}