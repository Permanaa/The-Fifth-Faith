import React from 'react'
import { View, Text, Dimensions, PixelRatio, TouchableOpacity, Image } from 'react-native'
import styles from '../TheoryDetail/styles'
import YouTube from 'react-native-youtube'
import MainScreen from '../../components/layouts/MainScreen';

function Component({navigation}) {
    const [ isReady, setIsReady ] = React.useState(false)
    const [ status, setStatus ] = React.useState(null)
    const [ quality, setQuality ] = React.useState(null)
    const [ error, setError ] = React.useState(null)
    const [ isPlaying, setIsPlaying ] = React.useState(true)
    const [ isLooping, setIsLooping ] = React.useState(false)
    const [ duration, setDuration ] = React.useState(0)
    const [ currentTime, setCurrentTime ] = React.useState(0)
    const [ fullscreen, setFullscreen ] = React.useState(false)
    const [ playerWidth, setPlayerWidth ] = React.useState(Dimensions.get('window').width)
    const _youTubeRef = React.createRef();

    return (
        <MainScreen style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../../../assets/images/left-arrow.png')} style={styles.backbtnImage}/>
            </TouchableOpacity>
            <Text style={styles.title}>Video Pembelajaran Iman Kepada Hari Akhir</Text>
            <YouTube
                apiKey="YOUR_API_KEY"
                videoId="9gDhW3O6dZQ"
                play={isPlaying}
                loop={isLooping}
                fullscreen={fullscreen}
                controls={1}
                style={[
                    { height: PixelRatio.roundToNearestPixel(playerWidth / (16 / 9)) },
                    {
                        alignSelf: 'stretch',
                        marginVertical: 10,
                    }
                ]}
                onError={e => {
                    setError(e.error)
                }}
                onReady={e => {
                    setIsReady(true)
                }}
                onChangeState={e => {
                    setStatus(e.status)
                }}
                onChangeQuality={e => {
                    setQuality(e.quality)
                }}
                onChangeFullscreen={e => {
                    setFullscreen(e.isFullscreen)
                }}
                onProgress={e => {
                    setCurrentTime(e.currentTime)
                }}
            />
        </MainScreen>
    )
}

export default Component