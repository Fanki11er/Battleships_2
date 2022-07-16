import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-top: 50px;

  #Object1,
  #Object2,
  #Object3 {
    opacity: 0;
    transform: scale(1.5);
    animation-name: blink;
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;
    transform-box: fill-box;
  }

  #Object1 {
    animation-delay: 3s;
  }
  #Object2 {
    animation-delay: 0.5s;
  }
  #Object3 {
    animation-delay: 1.8s;
  }

  #Ray {
    transform-origin: 50% 50%;
    transform: rotate(180deg);
    animation-name: rotate;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(-180deg);
    }
    to {
      transform: rotate(180deg);
    }
  }

  @keyframes blink {
    0% {
      transform: scale(1.5);

      opacity: 1;
    }
    15% {
      transform: scale(1);
    }
    50% {
      opacity: 0;
      transform: scale(1);
    }
  }
`;

const Text = styled.span`
  font-size: ${(props: StyledProps) => props.theme.fontSizes.XXL};
  color: ${(props: StyledProps) => props.theme.colors.green};
  font-weight: bold;
  user-select: none;
  text-align: center;
  letter-spacing: 5px;

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.XL};
  }
`;

const LoadingInfo = () => {
  return (
    <Wrapper>
      <svg width="299" height="301" viewBox="0 0 299 301" fill="none">
        <g id="Radar">
          <circle id="Ellipse 56" cx="149.5" cy="149.5" r="148" fill="#2D4C23" stroke="#00ED00" strokeWidth="3" />
          <circle id="Ellipse 57" cx="150" cy="149" r="110.5" stroke="#00ED00" strokeWidth="3" />
          <path
            id="Ellipse 58"
            d="M223.5 149C223.5 189.593 190.593 222.5 150 222.5C109.407 222.5 76.5 189.593 76.5 149C76.5 108.407 109.407 75.5 150 75.5C190.593 75.5 223.5 108.407 223.5 149Z"
            stroke="#00ED00"
            strokeWidth="3"
          />
          <path
            id="Ellipse 59"
            d="M189.5 149.5C189.5 171.591 171.591 189.5 149.5 189.5C127.409 189.5 109.5 171.591 109.5 149.5C109.5 127.409 127.409 109.5 149.5 109.5C171.591 109.5 189.5 127.409 189.5 149.5Z"
            stroke="#00ED00"
            strokeWidth="3"
          />
          <g id="Ray" filter="url(#filter0_f_134_21)">
            <path d="M149.5 149L231.5 272C231.5 272 192 296.5 152.5 296.5C108 296.5 78 277 78 277L149.5 149Z" fill="url(#paint0_linear_134_21)" />
          </g>
          <g id="Object3" filter="url(#filter1_f_134_21)">
            <circle cx="124.5" cy="265.5" r="4.5" fill="#E1FFCA" />
            <circle cx="124.5" cy="265.5" r="5.5" stroke="#00ED00" strokeWidth="2" />
          </g>
          <g id="Object1" filter="url(#filter2_f_134_21)">
            <circle cx="70.5" cy="103.5" r="4.5" fill="#E1FFCA" />
            <circle cx="70.5" cy="103.5" r="5.5" stroke="#00ED00" strokeWidth="2" />
          </g>
          <g id="Object2" filter="url(#filter3_f_134_21)">
            <circle cx="236.5" cy="121.5" r="4.5" fill="#E1FFCA" />
            <circle cx="236.5" cy="121.5" r="5.5" stroke="#00ED00" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <filter id="filter0_f_134_21" x="74" y="145" width="161.5" height="155.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_134_21" />
          </filter>
          <filter id="filter1_f_134_21" x="114" y="255" width="21" height="21" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_134_21" />
          </filter>
          <filter id="filter2_f_134_21" x="60" y="93" width="21" height="21" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_134_21" />
          </filter>
          <filter id="filter3_f_134_21" x="226" y="111" width="21" height="21" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_134_21" />
          </filter>
          <linearGradient id="paint0_linear_134_21" x1="110.5" y1="237.5" x2="187.637" y2="264.054" gradientUnits="userSpaceOnUse">
            <stop stopColor="#43C500" />
            <stop offset="0.92397" stopColor="#206C01" stopOpacity="0.14" />
          </linearGradient>
        </defs>
      </svg>

      <Text>Loading...</Text>
    </Wrapper>
  );
};

export default LoadingInfo;
