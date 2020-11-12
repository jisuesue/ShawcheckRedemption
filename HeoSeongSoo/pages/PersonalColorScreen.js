import React from 'react';
import { ScrollView, Image, View, Button } from 'react-native';
import Constants from 'expo-constants';
import PersonalColorBackButton from '../components/mypage/PersonalColorBackButton';
import { personalStyles } from '../components/StyleSheetComponent';

function PersonalColorScreen({ navigation, route }) {
    const [color, setColor] = React.useState(route.params.color);

    function moveBack() {
        navigation.goBack();
    }

    return (
        <ScrollView>
            <View
                style={personalStyles.imageContainer, {backgroundColor:'white', flex: 1, marginTop: Constants.statusBarHeight}}
            >
                <PersonalColorBackButton 
                onPress={() => moveBack()}
                ></PersonalColorBackButton>
                {color === 'spring' ? 
                    <Image
                        style={personalStyles.imageStyles}
                        source={require('../assets/personal/spring.png')}
                    />
                :
                    null
                }
                {color === 'summer' ? 
                    <Image
                        style={personalStyles.imageStyles}
                        source={require('../assets/personal/summer.png')}
                    />
                :
                    null
                }
                {color === 'fall' ? 
                    <Image
                        style={personalStyles.imageStyles}
                        source={require('../assets/personal/fall.png')}
                    />
                :
                    null
                }
                {color === 'winter' ? 
                    <Image
                        style={personalStyles.imageStyles}
                        source={require('../assets/personal/winter.png')}
                    />
                :
                    null
                }

            </View>
            <Button
                title={'확인'}
                onPress={moveBack}
            >확인</Button>
        </ScrollView>
    );
}

export default PersonalColorScreen;