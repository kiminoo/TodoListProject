import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { images } from '../images';

const IconButton = ({ type, onPressOut, id }) => {
    // 버튼을 누르면 이벤트가 발생하도록 선언하는 함수
    const _onPressOut = () => {
        onPressOut(id);
    };

    // onPressOut을 받아오지 못하는 오류를 해결하기 위한 함수
    IconButton.defaultProps = {
        onPressOut: () => {},
    };

    return (
        <TouchableOpacity style={styles.iconbutton} onPressOut={_onPressOut}>
            <Image source={type}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconbutton: {
        margin: 10,
    },
});

export default IconButton;