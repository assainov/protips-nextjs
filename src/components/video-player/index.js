import ReactPlayer from 'react-player';

const VideoPlayer = ({ className }) => (
    <ReactPlayer
        url='https://youtu.be/s3L0u2wiwZ0'
        className={className}
    />
);

export default VideoPlayer;