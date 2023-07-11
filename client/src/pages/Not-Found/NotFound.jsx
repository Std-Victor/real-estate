import style from "./NotFound.module.scss";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {togglePageExists} from "../../redux/guest/guest.slice.js";
export default function NotFound(){
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(togglePageExists(false))
  }, [])
  return(
      <>
        <div className={style.container}>
          <svg
              width={640}
              height={640}
              viewBox="0 0 640 640"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M56.717 330.432s3.008 93.44 80.985 155.648c77.978 62.208 186.01 66.714 273.472 72.627C498.637 564.621 565.76 515.11 576 440.32c10.24-74.79-56.704-96.806-92.966-182.016-36.263-85.21-33.037-113.203-109.76-165.606-76.724-52.404-196.813-20.288-259.738 69.491-62.925 89.779-56.82 168.243-56.82 168.243Z"
                fill="#0065C1"
            />
            <path
                opacity={0.7}
                d="M56.717 330.432s3.008 93.44 80.985 155.648c77.978 62.208 186.01 66.714 273.472 72.627C498.637 564.621 565.76 515.11 576 440.32c10.24-74.79-56.704-96.806-92.966-182.016-36.263-85.21-33.037-113.203-109.76-165.606-76.724-52.404-196.813-20.288-259.738 69.491-62.925 89.779-56.82 168.243-56.82 168.243Z"
                fill="#fff"
            />
            <path
                d="M437.107 521.229c51.04 0 92.416-12.275 92.416-27.418 0-15.142-41.376-27.417-92.416-27.417s-92.416 12.275-92.416 27.417c0 15.143 41.376 27.418 92.416 27.418Z"
                fill="#263238"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M437.107 479.002c43.712 0 80.32 8.96 89.933 21.107a10.24 10.24 0 0 0 2.483-6.298c0-15.155-41.382-27.43-92.416-27.43-51.033 0-92.429 12.275-92.429 27.43.09 2.32.966 4.541 2.484 6.298 9.612-12.096 46.22-21.107 89.945-21.107Z"
                fill="#fff"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M424.486 517.786c-30.873-1.396-54.169-7.68-54.169-15.36a4.263 4.263 0 0 1 .755-2.343m125.056-5.133c5.286 2.24 8.307 4.8 8.307 7.527 0 8.614-30.029 15.59-67.059 15.59h-1.6m-56.435-23.411c11.609-4.646 33.28-7.782 58.035-7.782a236.01 236.01 0 0 1 42.035 3.443m-55.808 17.51c-7.821-1.088-13.056-3.072-13.056-5.35 0-3.443 12.019-6.234 26.88-6.234 14.861 0 26.816 2.791 26.816 6.234 0 2.957-8.832 5.427-20.685 6.067"
                stroke="#fff"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M65.946 383.59c40.307-11.456 125.12-34.06 171.929-35.763C300.8 345.6 407.04 391.27 473.37 399.27c66.329 8 110.899 5.722 110.899 5.722M43.52 390.131s3.482-1.062 9.587-2.841m513.255-68.416a292.285 292.285 0 0 0-70.784-6.695c-49.178 1.651-102.4 8.154-168.205 16.64-65.805 8.487-159.514-38.4-223.232-21.005-63.719 17.396-58.88 22.631-58.88 22.631m539.225-6.861s-2.483-.819-6.976-2.01M466.496 202.688a13.248 13.248 0 0 0-25.728 0h25.728Zm129.984 0a16.397 16.397 0 0 0-14.08-12.506 38.39 38.39 0 0 0-8.202-31.691 38.395 38.395 0 0 0-29.66-13.851 38.5 38.5 0 0 0-37.901 31.731 24.605 24.605 0 0 0-36.027 6.356 24.603 24.603 0 0 0-3.73 13.049 24.845 24.845 0 0 0 1.011 6.938l128.589-.026Zm-358.95 30.899a6.727 6.727 0 0 0-2.374-3.709 6.724 6.724 0 0 0-8.321 0 6.717 6.717 0 0 0-2.374 3.709h13.069Zm65.984 0a8.35 8.35 0 0 0-7.156-6.4 19.535 19.535 0 0 0-8.191-20.811 19.547 19.547 0 0 0-30.209 13.797 12.487 12.487 0 0 0-13.168-1.386 12.498 12.498 0 0 0-5.119 4.608 12.502 12.502 0 0 0-1.898 6.621c.006 1.196.178 2.385.512 3.533l65.229.038Zm-6.644 20.659a4.232 4.232 0 0 0-4.121-3.255 4.235 4.235 0 0 0-4.122 3.255h8.243Zm41.652 0a5.25 5.25 0 0 0-4.519-4.006c.139-.747.208-1.506.205-2.266a12.342 12.342 0 0 0-11.225-12.134 12.336 12.336 0 0 0-13.223 9.92 7.882 7.882 0 0 0-8.312-.869 7.88 7.88 0 0 0-3.228 2.911 7.875 7.875 0 0 0-1.196 4.179c.001.754.109 1.503.32 2.227l41.178.038Z"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M208.192 401.702a2.412 2.412 0 0 1-1.28-.345 2.56 2.56 0 0 1-.896-3.418c.627-1.101 158.886-173.683 231.296-236.966a1.279 1.279 0 0 1 1.741.128 1.28 1.28 0 0 1-.128 1.766C366.874 225.882 210.957 399.36 210.33 400.448a2.462 2.462 0 0 1-2.138 1.254Z"
                fill="#263238"
            />
            <path
                d="M216.934 367.36s7.847-8.371 12.557-8.371c4.711 0 13.607 7.846 13.082 12.032-.525 4.185-8.371.525-8.371.525s-7.335 9.945-14.656 8.371c-7.322-1.575-2.612-12.557-2.612-12.557Z"
                fill="#0065C1"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M234.24 371.52s4.8 3.328 5.222 5.67c.423 2.343-5.324 8.96-11.712 10.445-6.387 1.485-9.804-2.137-7.884-5.542s9.536-10.266 14.374-10.573Z"
                fill="#0065C1"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M431.36 341.197V168.026s-3.494 12.531-3.494 13.44"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M370.79 350.323h132.788v106.394H370.79V350.323Z"
                fill="#0065C1"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M433.254 349.875v-6.093a1.522 1.522 0 1 0-3.046 0v6.093h3.046Zm12.186-14.822v.307a1.48 1.48 0 0 0-.533-.566 1.48 1.48 0 0 0-.747-.215 1.537 1.537 0 0 0-1.536 1.536v16.269a4.696 4.696 0 0 1-4.685 4.698 4.592 4.592 0 0 1-1.869-.397 2.564 2.564 0 0 0 .384 3.302c.49.093.987.14 1.485.141a7.745 7.745 0 0 0 7.744-7.744v-7.539h3.507l-3.75-9.792Z"
                fill="#263238"
            />
            <path
                d="M431.488 166.4s2.714-9.638.307-8.742c-2.406.896-.307 8.742-.307 8.742Zm0 0s-10.24-3.622-9.331-.307c.909 3.315 9.331.307 9.331.307Z"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M210.675 250.406s-12.633-7.078-37.414-3.532c-24.781 3.545-29.504 23.974-25.459 45.209 4.044 21.235 27.481 39.219 31.027 37.709 3.545-1.51-1.011-49.05 7.078-58.15 8.09-9.101 34.381-7.578 35.84-14.656 1.459-7.079-11.072-6.58-11.072-6.58Z"
                fill="#263238"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="m166.63 263.014 2.56 16.73s-15.872 43.328-13.299 49.344c2.573 6.016 26.586 8.141 26.586 8.141s39.04 4.723 50.624 0c11.584-4.723 5.581-18.445 4.288-22.298-1.293-3.853-8.576-34.752-8.576-34.752s2.56-7.296 2.56-11.149c0-3.852-.435-14.592-2.151-17.164-1.715-2.573-31.744-5.581-45.043-3.431-13.299 2.151-19.264 5.581-17.549 14.579Z"
                fill="#757575"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M173.504 282.33s-.435 37.312 1.715 44.608c2.151 7.296 10.727 15.872 28.736 13.721 18.01-2.15 19.738-19.302 19.738-19.302l-1.28-39.885-48.909.858Z"
                fill="#fff"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M204.39 309.133a3.22 3.22 0 0 1-1.982 2.989 3.227 3.227 0 0 1-4.406-2.342 3.23 3.23 0 0 1 1.369-3.315 3.228 3.228 0 0 1 1.794-.545 3.232 3.232 0 0 1 2.28.936 3.221 3.221 0 0 1 .945 2.277Z"
                stroke="#263238"
                strokeWidth={1.193}
                strokeMiterlimit={10}
            />
            <path
                d="M203.955 322.65a2.151 2.151 0 1 1-2.137-2.151 2.148 2.148 0 0 1 1.516.631 2.136 2.136 0 0 1 .621 1.52Zm-12.953-27.277c1.369 1.485 1.843 3.264 1.075 3.993-.768.73-2.56.116-3.904-1.356-1.344-1.472-1.856-3.252-1.075-3.981.78-.73 2.534-.128 3.904 1.344Zm17.42 0c-1.369 1.485-1.856 3.264-1.075 3.993.781.73 2.56.116 3.84-1.356 1.28-1.472 1.856-3.252 1.075-3.981-.78-.73-2.47-.128-3.84 1.344Z"
                fill="#263238"
            />
            <path
                d="M181.837 290.317a8.193 8.193 0 0 1 8.96-3.303m16.947.474s6.118-1.882 8.013 3.302"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M228.403 526.874s6.746-4.045 10.483-5.632c.351-.161.71-.302 1.076-.423 3.302-1.101 12.659-.55 21.452-6.054 8.794-5.504 4.404-12.109-2.201-13.76-6.605-1.651-13.747-3.84-13.747-3.84l-1.652-25.869S224 476.8 217.395 479.552c-6.605 2.752-2.752 41.818-2.201 45.12.55 3.302.55 5.504 13.209 2.202Z"
                fill="#263238"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M250.419 514.765c-11.52 2.201-11.52 4.403-24.217 6.605a49.163 49.163 0 0 1-11.303.921c.128 1.178.231 2.01.295 2.381.55 3.302.55 5.504 13.209 2.202 0 0 6.746-4.045 10.483-5.632.351-.161.71-.302 1.076-.423 3.302-1.101 12.659-.55 21.452-6.054 2.829-1.754 4.276-3.635 4.749-5.427a66.026 66.026 0 0 1-15.744 5.427Z"
                fill="#fff"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M255.002 500.672s-.423 30.029-1.28 36.454c-.858 6.426.422 14.592 10.24 14.592 9.817 0 29.171-6.4 36.032-7.68 6.86-1.28 18.022-4.3 22.732-15.014 4.711-10.714-24.012-9.446-24.012-9.446l1.715-21.876s-29.555 5.965-45.427 2.97Z"
                fill="#263238"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M322.778 528.986a4.789 4.789 0 0 0 .358-3.367 26.876 26.876 0 0 1-11.52 8.96c-10.24 4.288-29.606 8.96-44.186 11.162-6.668.973-10.892-.115-13.542-1.575.947 4.16 3.725 7.578 10.112 7.578 9.869 0 29.171-6.4 36.032-7.68 6.861-1.28 18.035-4.365 22.746-15.078Z"
                fill="#fff"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M298.765 519.539s2.137 7.296-3.84 12.019"
                stroke="#fff"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M252.006 484.8s-.665 13.043.064 15.654c2.74 9.908 3.61 7.591 24.205 7.156 20.595-.436 28.915-8.653 31.066-13.799 2.15-5.145 0-16.307-.858-20.173-.857-3.865-7.68-5.12-10.304-4.71-2.624.41-42.893 11.584-44.173 15.872Z"
                fill="#757575"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M110.438 517.402v28.825a6.2 6.2 0 0 0 3.354 5.453l46.336 23.923a6.156 6.156 0 0 0 5.363.154l68.263-26.023a6.192 6.192 0 0 0 3.66-5.644v-34.842l-78.08 23.59-48.896-15.436Z"
                fill="#0065C1"
            />
            <mask
                id="a"
                style={{
                  maskType: "luminance",
                }}
                maskUnits="userSpaceOnUse"
                x={110}
                y={509}
                width={128}
                height={68}
            >
              <path
                  d="M110.438 517.402v28.825a6.2 6.2 0 0 0 3.354 5.453l46.336 23.923a6.156 6.156 0 0 0 5.363.154l68.263-26.023a6.192 6.192 0 0 0 3.66-5.644v-34.842l-78.08 23.59-48.896-15.436Z"
                  fill="#fff"
              />
            </mask>
            <g mask="url(#a)">
              <path
                  opacity={0.18}
                  d="m162.778 531.802-3.431 1.036-48.909-15.436v28.825a6.2 6.2 0 0 0 3.354 5.453l46.336 23.923a6.078 6.078 0 0 0 2.65.691v-44.492Z"
                  fill="#000"
              />
            </g>
            <path
                d="M110.438 517.402v28.825a6.2 6.2 0 0 0 3.354 5.453l46.336 23.923a6.156 6.156 0 0 0 5.363.154l68.263-26.023a6.192 6.192 0 0 0 3.66-5.644v-34.842l-78.08 23.59-48.896-15.436Z"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M181.76 468.736 106.88 492.8a2.895 2.895 0 0 0-2.01 2.765v21.35a2.908 2.908 0 0 0 1.652 2.56l52.198 24.845a2.893 2.893 0 0 0 2.266.102l78.374-29.324a2.905 2.905 0 0 0 1.894-2.714l.141-20.032a2.93 2.93 0 0 0-2.291-2.842l-55.859-20.851a3.026 3.026 0 0 0-1.485.077Z"
                fill="#fff"
            />
            <mask
                id="b"
                style={{
                  maskType: "luminance",
                }}
                maskUnits="userSpaceOnUse"
                x={104}
                y={468}
                width={138}
                height={77}
            >
              <path
                  d="M181.76 468.736 106.88 492.8a2.895 2.895 0 0 0-2.01 2.765v21.35a2.908 2.908 0 0 0 1.652 2.56l52.198 24.845a2.893 2.893 0 0 0 2.266.102l78.374-29.324a2.905 2.905 0 0 0 1.894-2.714l.141-20.032a2.93 2.93 0 0 0-2.291-2.842l-55.859-20.851a3.026 3.026 0 0 0-1.485.077Z"
                  fill="#fff"
              />
            </mask>
            <g mask="url(#b)">
              <path
                  d="M158.63 544.307c.352.168.734.264 1.123.282.389.017.778-.044 1.143-.179l78.464-29.312a2.905 2.905 0 0 0 1.894-2.714l.141-20.032a2.814 2.814 0 0 0-.691-1.856l-80.96 29.901-1.114 23.91Z"
                  fill="#0065C1"
              />
              <path
                  opacity={0.5}
                  d="M158.63 544.307c.352.168.734.264 1.123.282.389.017.778-.044 1.143-.179l78.464-29.312a2.905 2.905 0 0 0 1.894-2.714l.141-20.032a2.814 2.814 0 0 0-.691-1.856l-80.96 29.901-1.114 23.91Z"
                  fill="#fff"
              />
              <path
                  d="M104.87 495.501v21.35a2.908 2.908 0 0 0 1.652 2.56l52.198 24.909a2.87 2.87 0 0 0 1.114.282v-24.205l-54.874-25.395c-.05.162-.08.329-.09.499Z"
                  fill="#0065C1"
              />
            </g>
            <path
                d="M181.76 468.736 106.88 492.8a2.895 2.895 0 0 0-2.01 2.765v21.35a2.908 2.908 0 0 0 1.652 2.56l52.198 24.845a2.893 2.893 0 0 0 2.266.102l78.374-29.324a2.905 2.905 0 0 0 1.894-2.714l.141-20.032a2.93 2.93 0 0 0-2.291-2.842l-55.859-20.851a3.026 3.026 0 0 0-1.485.077Z"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M284.608 429.466s9.856 4.71 15.014 14.156c5.159 9.447 1.28 27.444-1.728 33.024-3.008 5.581-23.155 8.154-30.016 8.154-6.86 0-8.153-.858-8.153-.858s-21.875 4.288-35.61 6.861c-13.734 2.573-10.24-29.593-6.003-44.185 4.237-14.592 28.314-21.876 38.182-21.876 9.869 0 28.314 4.724 28.314 4.724Z"
                fill="#263238"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M259.725 483.942s18.445-6.4 26.163-22.732m-8.576 13.286a48.973 48.973 0 0 0 15.872-10.714"
                stroke="#fff"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M233.984 443.622s5.12 27.021 2.56 38.17c-2.56 11.149-17.587 12.877-21.018 11.584-3.43-1.293-1.715-27.878-1.715-41.178 0-13.299 13.312-12.441 20.173-8.576Z"
                fill="#757575"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M124.595 371.546s-2.995 17.574-.857 26.176a36.633 36.633 0 0 0 6.003 13.299s-10.727 15.872-8.576 29.158c2.15 13.287 7.68 15.015 7.68 15.015s-4.711 24.46 3.84 33.036c8.55 8.576 27.456 18.01 48.473 14.157 21.018-3.853 35.175-4.723 39.463-12.019 4.288-7.296 1.715-39.462 1.715-39.462s-.858-35.597-1.715-57.485c-.858-21.888-3.84-39.463-14.157-48.039s-55.77 4.724-69.491 13.722c-13.722 8.998-12.378 12.442-12.378 12.442Z"
                fill="#0065C1"
            />
            <mask
                id="c"
                style={{
                  maskType: "luminance",
                }}
                maskUnits="userSpaceOnUse"
                x={120}
                y={342}
                width={104}
                height={162}
            >
              <path
                  d="M124.595 371.546s-2.995 17.574-.857 26.176a36.633 36.633 0 0 0 6.003 13.299s-10.727 15.872-8.576 29.158c2.15 13.287 7.68 15.015 7.68 15.015s-4.711 24.46 3.84 33.036c8.55 8.576 27.456 18.01 48.473 14.157 21.018-3.853 35.175-4.723 39.463-12.019 4.288-7.296 1.715-39.462 1.715-39.462s-.858-35.597-1.715-57.485c-.858-21.888-3.84-39.463-14.157-48.039s-55.77 4.724-69.491 13.722c-13.722 8.998-12.378 12.442-12.378 12.442Z"
                  fill="#fff"
              />
            </mask>
            <g mask="url(#c)">
              <path
                  opacity={0.3}
                  d="M127.654 371.546s-3.008 17.587-.857 26.176a36.406 36.406 0 0 0 6.003 13.299s-10.726 15.872-8.576 29.158c2.15 13.287 7.68 15.015 7.68 15.015s-4.723 24.46 3.84 33.036c8.563 8.576 27.507 18.01 48.576 14.157 21.069-3.853 35.187-4.723 39.475-12.019 4.288-7.296 1.715-39.462 1.715-39.462s-.857-35.597-1.715-57.485c-.857-21.888-3.84-39.463-14.157-48.039-10.316-8.576-55.769 4.724-69.491 13.722-13.721 8.998-12.493 12.442-12.493 12.442Z"
                  fill="#000"
              />
            </g>
            <path
                d="M124.595 371.546s-2.995 17.574-.857 26.176a36.633 36.633 0 0 0 6.003 13.299s-10.727 15.872-8.576 29.158c2.15 13.287 7.68 15.015 7.68 15.015s-4.711 24.46 3.84 33.036c8.55 8.576 27.456 18.01 48.473 14.157 21.018-3.853 35.175-4.723 39.463-12.019 4.288-7.296 1.715-39.462 1.715-39.462s-.858-35.597-1.715-57.485c-.858-21.888-3.84-39.463-14.157-48.039s-55.77 4.724-69.491 13.722c-13.722 8.998-12.378 12.442-12.378 12.442Z"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M129.741 411.021a52.185 52.185 0 0 0 45.901 6.4m-46.759 37.773s21.875 21.452 57.92.857"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M214.246 350.528s-8.14-12.442-19.302-19.302c-11.162-6.861-39.885-12.007-51.469-14.157-11.584-2.151-24.025-1.28-27.456 11.52-3.43 12.8-3.008 34.317.423 43.75 3.43 9.434 17.587 15.015 28.748 8.589 11.162-6.426 42.036-31.322 52.762-32.602 10.726-1.28 15.437 6.925 16.294 2.202Z"
                fill="#757575"
            />
            <mask
                id="d"
                style={{
                  maskType: "luminance",
                }}
                maskUnits="userSpaceOnUse"
                x={113}
                y={316}
                width={102}
                height={68}
            >
              <path
                  d="M214.246 350.528s-8.14-12.442-19.302-19.302c-11.162-6.861-39.885-12.007-51.469-14.157-11.584-2.151-24.025-1.28-27.456 11.52-3.43 12.8-3.008 34.317.423 43.75 3.43 9.434 17.587 15.015 28.748 8.589 11.162-6.426 42.036-31.322 52.762-32.602 10.726-1.28 15.437 6.925 16.294 2.202Z"
                  fill="#fff"
              />
            </mask>
            <g mask="url(#d)">
              <path
                  opacity={0.3}
                  d="M190.451 348.16c6.541-2.726-9.817 2.176-10.905.538-1.088-1.639 11.443-9.805 14.169-10.893 2.727-1.088-15.808 2.726-15.257 0 .55-2.727 17.984-3.277 5.99-6.003-11.994-2.727-51.2-9.818-58.88-12.544a6.303 6.303 0 0 1-1.651-.82 15.267 15.267 0 0 0-7.898 10.24c-3.43 12.864-3.008 34.317.423 43.751 2.995 8.217 14.08 13.504 24.32 10.496 4.723-3.84 9.088-8.883 16.473-13.53 14.682-9.293 26.675-18.56 33.216-21.235Z"
                  fill="#000"
              />
            </g>
            <path
                d="M214.246 350.528s-8.14-12.442-19.302-19.302c-11.162-6.861-39.885-12.007-51.469-14.157-11.584-2.151-24.025-1.28-27.456 11.52-3.43 12.8-3.008 34.317.423 43.75 3.43 9.434 17.587 15.015 28.748 8.589 11.162-6.426 42.036-31.322 52.762-32.602 10.726-1.28 15.437 6.925 16.294 2.202Z"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M260.582 408.87s9.869 1.28 16.295 3.84c6.425 2.56 10.726 18.445 8.153 20.583-2.572 2.137-7.68-.423-7.68-.423a62.817 62.817 0 0 1-12.441 2.996c-5.184.46-10.765-23.988-4.327-26.996Z"
                fill="#0065C1"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M227.981 407.578s1.715 0 11.149-4.288c9.433-4.288 17.164-4.288 23.168 5.12 6.003 9.408 8.576 21.03 5.12 27.891-3.456 6.861-16.295 11.584-23.168 11.584-6.874 0-7.68-8.96-7.68-8.96s-.858-14.157-5.12-19.303c-4.263-5.145-5.184-10.752-3.469-12.044Z"
                fill="#757575"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M196.237 350.528c9.433-3.43 21.453-1.28 25.741 10.726 4.288 12.007 8.14 47.181 8.14 47.181s10.727 1.28 15.015 6.016 6.4 16.73 5.581 22.733c-.82 6.003-15.872 17.152-33.024 17.587-17.152.435-29.607-7.68-35.61-29.606-6.003-21.927-3.622-55.245-3.622-55.245s2.176-9.818 5.452-12.006"
                fill="#0065C1"
            />
            <mask
                id="e"
                style={{
                  maskType: "luminance",
                }}
                maskUnits="userSpaceOnUse"
                x={177}
                y={349}
                width={74}
                height={106}
            >
              <path
                  d="M196.237 350.528c9.433-3.43 21.453-1.28 25.741 10.726 4.288 12.007 8.14 47.181 8.14 47.181s10.727 1.28 15.015 6.016 6.4 16.73 5.581 22.733c-.82 6.003-15.872 17.152-33.024 17.587-17.152.435-29.607-7.68-35.61-29.606-6.003-21.927-3.622-55.245-3.622-55.245s2.176-9.818 5.452-12.006"
                  fill="#fff"
              />
            </mask>
            <g mask="url(#e)">
              <path
                  opacity={0.3}
                  d="M250.714 437.184c.857-6.003-1.28-18.022-5.581-22.733-.167-.192-.371-.371-.551-.55.514 3.855.822 7.734.922 11.622.858 25.178-34.33 20.967-41.421 2.727-3.84-9.818-4.915-52.89-16.358-56.154-6.605-1.882-8.858 3.29-9.575 8.013-.23 12.352.18 31.385 3.93 45.056 6.003 21.888 18.445 30.029 35.61 29.606 17.164-.422 32.166-11.584 33.024-17.587Z"
                  fill="#000"
              />
            </g>
            <path
                d="M196.237 350.528c9.433-3.43 21.453-1.28 25.741 10.726 4.288 12.007 8.14 47.181 8.14 47.181s10.727 1.28 15.015 6.016 6.4 16.73 5.581 22.733c-.82 6.003-15.872 17.152-33.024 17.587-17.152.435-29.607-7.68-35.61-29.606-6.003-21.927-3.622-55.245-3.622-55.245s2.176-9.818 5.452-12.006"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M230.118 408.435s3.354 15.629-13.875 24.205"
                stroke="#263238"
                strokeWidth={1.193}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M144.768 136c0-3.558 1.638-6.182 5.338-6.182 3.699 0 5.414 2.56 5.414 6.182v12.48c0 3.558-1.651 6.182-5.414 6.182-3.764 0-5.338-2.56-5.338-6.182V136Zm1.6 12.595c0 2.663 1.05 4.608 3.738 4.608 2.688 0 3.84-1.945 3.84-4.608v-12.697c0-2.65-1.076-4.608-3.84-4.608-2.765 0-3.738 1.958-3.738 4.608v12.697ZM158.067 136c0-3.558 1.639-6.182 5.338-6.182s5.414 2.56 5.414 6.182v12.48c0 3.558-1.638 6.182-5.414 6.182s-5.338-2.56-5.338-6.182V136Zm1.6 12.595c0 2.663 1.05 4.608 3.738 4.608 2.688 0 3.84-1.945 3.84-4.608v-12.697c0-2.65-1.075-4.608-3.84-4.608-2.765 0-3.738 1.958-3.738 4.608v12.697Zm16.871-18.56c3.763 0 5.235 2.368 5.235 5.927v2.662c0 3.84-1.792 5.786-5.658 5.786h-3.033v10.06h-1.562v-24.435h5.018Zm-.423 12.915c2.829 0 4.045-1.28 4.045-4.224v-2.867c0-2.649-.909-4.365-3.622-4.365h-3.456v11.52l3.033-.064Zm18.355-7.014v.512h-1.536v-.627c0-2.56-.972-4.531-3.622-4.531s-3.635 1.92-3.635 4.505c0 5.927 8.832 6.029 8.832 12.8 0 3.52-1.536 6.106-5.274 6.106-3.737 0-5.261-2.56-5.261-6.106v-1.28h1.536v1.357c0 2.56 1.012 4.506 3.7 4.506s3.699-1.895 3.699-4.506c0-5.862-8.832-5.965-8.832-12.8 0-3.661 1.6-6.042 5.197-6.08 3.596-.038 5.196 2.611 5.196 6.144Zm4.02 15.462v3.072h-1.562v-3.072h1.562Zm4.364 0v3.072h-1.561v-3.072h1.561Zm4.365 0v3.072h-1.574v-3.072h1.574Zm-57.293 14.183c3.84 0 5.236 2.368 5.236 5.939v2.65c0 3.84-1.78 5.798-5.645 5.798h-3.047v10.048h-1.6v-24.435h5.056Zm-.409 12.915c2.816 0 4.045-1.28 4.045-4.224v-2.867c0-2.65-.909-4.352-3.636-4.352h-3.456v11.443h3.047Zm9.945 6.106-1.28 5.414h-1.472l5.338-24.474h2.342l5.44 24.474h-1.6l-1.28-5.414h-7.488Zm.244-1.396h7.116l-3.596-15.808-3.52 15.808Zm23.04-11.686v1.818h-1.536v-1.92c0-2.56-1.012-4.608-3.7-4.608s-3.699 1.996-3.699 4.608v12.71c0 2.56 1.011 4.57 3.699 4.57 2.688 0 3.7-1.959 3.7-4.57v-5.274h-3.29v-1.459h4.774v6.631c0 3.52-1.536 6.169-5.273 6.169-3.738 0-5.261-2.649-5.261-6.169V171.52c0-3.52 1.536-6.17 5.261-6.17s5.325 2.676 5.325 6.17Zm10.969 5.376v1.459h-6.669v10.24h8.026v1.472h-9.638v-24.486h9.638v1.472h-8.026v9.843h6.669Zm10.855 13.12h-1.472v-24.435h2.099l7.283 20.633v-20.633h1.459v24.435h-1.779l-7.68-21.76.09 21.76Zm12.083-18.496c0-3.558 1.638-6.17 5.337-6.17 3.7 0 5.415 2.56 5.415 6.17v12.506c0 3.558-1.651 6.169-5.415 6.169-3.763 0-5.337-2.56-5.337-6.169V171.52Zm1.6 12.608c0 2.65 1.049 4.608 3.737 4.608s3.84-1.958 3.84-4.608v-12.71c0-2.65-1.075-4.608-3.84-4.608-2.764 0-3.737 1.958-3.737 4.608v12.71Zm15.987 5.888v-22.963h-4.954v-1.472h11.52v1.472h-4.992v22.963h-1.574Zm21.862-12.531v1.459h-6.323v11.072h-1.6v-24.435h9.28v1.472h-7.68v10.432h6.323Zm3.738-5.965c0-3.558 1.638-6.17 5.338-6.17 3.699 0 5.414 2.56 5.414 6.17v12.506c0 3.558-1.638 6.169-5.414 6.169s-5.338-2.56-5.338-6.169V171.52Zm1.6 12.608c0 2.65 1.05 4.608 3.738 4.608 2.688 0 3.84-1.958 3.84-4.608v-12.71c0-2.65-1.076-4.608-3.84-4.608-2.765 0-3.738 1.958-3.738 4.608v12.71Zm13.299-.013c0 2.56.986 4.647 3.674 4.647 2.688 0 3.661-2.023 3.661-4.647v-18.534h1.497v18.47c0 3.482-1.459 6.17-5.197 6.17-3.737 0-5.235-2.688-5.235-6.17v-18.47h1.6v18.534Zm13.056 5.901h-1.459v-24.435h2.086l7.335 20.633v-20.633h1.472v24.435h-1.792l-7.68-21.76.038 21.76Zm17.562-24.435c3.776 0 5.414 2.483 5.414 6.08v12.275c0 3.597-1.638 6.08-5.414 6.08h-5.376v-24.435h5.376Zm0 22.963c2.726 0 3.84-1.843 3.84-4.531v-12.429c0-2.688-1.152-4.531-3.84-4.531h-3.725v21.491h3.725Zm81.203 227.622 17.421-41.126h10.432v41.126h4.518v8.692h-4.518v11.046h-9.395v-11.046H386.56v-8.692Zm18.432 0v-22.86l-9.651 22.86h9.651Zm17.51-26.521c0-9.728 5.12-15.36 14.516-15.36 9.395 0 14.515 5.568 14.515 15.36v31.641c0 9.741-5.12 15.36-14.515 15.36-9.396 0-14.516-5.568-14.516-15.36v-31.641Zm9.562 32.256c0 4.352 1.907 6.003 4.954 6.003 3.046 0 4.953-1.651 4.953-6.003v-32.858c0-4.352-1.92-6.003-4.953-6.003-3.034 0-4.954 1.651-4.954 6.003v32.858Zm23.386-5.735 17.382-41.126h10.432v41.126h4.518v8.692h-4.518v11.046h-9.395v-11.046H455.45v-8.692Zm18.419 0v-22.86l-9.639 22.86h9.639Z"
                fill="#263238"
            />
          </svg>
        </div>
      </>
  )
}