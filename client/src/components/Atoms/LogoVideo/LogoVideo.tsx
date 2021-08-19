import styled from 'styled-components';
// @ts-ignore
import bgVideo from '../../../assets/video/LogoVideo.mp4';
import phaseOne from '../../../assets/animation/Animation_phase_one.svg';
import phaseTwo from '../../../assets/animation/Animation_phase_two.svg';
import AppLogo from '../AppLogo/AppLogo';

const Wrapper = styled.div`
  width: 250px;
  height: 145px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  overflow: hidden;
`;

const PhaseOne = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: 50% 50%;
  left: auto;
  top: auto;
  transform: scale(1.6);
  opacity: 0;
  animation-name: firstIntro;
  animation-delay: 2.5s;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  z-index: 2;

  @keyframes firstIntro {
    50% {
      opacity: 0.5;
      transform: scale(1.2);
    }
    100% {
      visibility: hidden;
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const PhaseTwo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: 50% 50%;
  left: auto;
  top: auto;
  background-image: url(${phaseTwo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  opacity: 0;
  animation-name: secondIntro;
  animation-delay: 4.75s;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  z-index: 2;

  @keyframes secondIntro {
    30% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    85% {
      opacity: 0.6;
    }

    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const Video = styled.video`
  width: 260px;
  height: 200px;
  border: 2px solid red;
  background-size: cover;
  animation-name: videoIntro;
  animation-duration: 8s;
  animation-fill-mode: forwards;
  opacity: 0;
  z-index: 1;

  @keyframes videoIntro {
    5% {
      opacity: 0.1;
    }
    30% {
      opacity: 1;
    }
    83% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Logo = styled(AppLogo)`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: 50% 50%;
  left: auto;
  top: auto;
  opacity: 0;
  animation-name: logoIntro;
  animation-delay: 7s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  z-index: 2;

  @keyframes logoIntro {
    85% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 1;
      transform: translateX(-50px);
    }
  }
`;
const LogoVideo = () => {
  return (
    <Wrapper>
      <PhaseOne src={phaseOne} />
      <PhaseTwo />
      <Logo />
      <Video src={bgVideo} autoPlay={true} muted={true} loop={false} />
    </Wrapper>
  );
};

export default LogoVideo;
