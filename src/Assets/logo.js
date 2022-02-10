import React from "react";

const Logo = ({Logo}) => {
    return (
        <svg classname = {Logo} width="145" height="70" viewBox="0 0 163 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.9479 55.3157C50.438 52.6736 49.055 51.3696 46.7991 51.404C45.9674 51.4285 45.2454 51.6418 44.633 52.044C44.0205 52.4461 43.5158 52.9732 43.1188 53.6252C42.7378 54.2766 42.4553 55.0133 42.2714 55.835C42.1035 56.6563 42.0322 57.4988 42.0576 58.3624C42.0981 59.7378 42.326 60.9556 42.7413 62.0159C43.1722 63.0597 43.7724 63.8744 44.542 64.46C45.3115 65.0456 46.2321 65.3227 47.3036 65.2912C48.3112 65.2615 49.3032 64.9762 50.2797 64.4353C51.2558 63.8784 52.066 63.1262 52.7104 62.1788L53.893 63.2005C53.1408 64.2951 52.3412 65.135 51.494 65.7201C50.6464 66.2893 49.8096 66.6821 48.9836 66.8985C48.1736 67.1144 47.4407 67.232 46.785 67.2513C45.5535 67.2875 44.4277 67.1045 43.4074 66.7023C42.3867 66.2842 41.4972 65.7021 40.7389 64.956C39.9962 64.1935 39.4098 63.3064 38.9799 62.2946C38.5655 61.2663 38.3406 60.1525 38.3054 58.953C38.2734 57.8655 38.4175 56.7807 38.7379 55.6989C39.0582 54.617 39.5495 53.6341 40.2118 52.7503C40.8896 51.8499 41.7488 51.1284 42.7893 50.5855C43.8293 50.0267 45.045 49.7268 46.4364 49.6859C47.0601 49.6676 47.7429 49.7515 48.4847 49.9378C49.242 50.1076 49.9542 50.3748 50.6212 50.7393L50.4956 49.7346L52.3428 49.6803L52.5072 55.2698L50.9479 55.3157ZM61.8746 66.4232C61.8361 66.2003 61.8067 66.0171 61.7864 65.8736C61.7817 65.7137 61.7683 65.53 61.7462 65.3225C61.2184 65.8823 60.654 66.2831 60.0528 66.5248C59.4517 66.7666 58.8392 66.8967 58.2155 66.915C57.1919 66.9451 56.3834 66.6648 55.7897 66.074C55.1961 65.4832 54.8859 64.732 54.8591 63.8204C54.8365 63.0527 55.0091 62.3914 55.377 61.8363C55.7608 61.2808 56.2676 60.8257 56.8975 60.471C57.5428 60.0999 58.2548 59.8148 59.0332 59.6158C59.8273 59.4004 60.6236 59.2649 61.4223 59.2094L61.3856 57.962C61.3673 57.3382 61.2238 56.8142 60.9552 56.3899C60.7026 55.9652 60.2489 55.7784 59.5942 55.8297C58.9234 55.8815 58.3862 56.1213 57.9826 56.5494C58.1148 56.6896 58.1995 56.8472 58.2366 57.0221C58.2733 57.1811 58.2936 57.3246 58.2973 57.4525C58.3067 57.7724 58.1887 58.112 57.9431 58.4714C57.6971 58.8148 57.294 58.9867 56.7338 58.9872C56.2535 58.9853 55.8807 58.8282 55.6154 58.5158C55.3501 58.2035 55.2111 57.8314 55.1984 57.3996C55.1796 56.7599 55.3873 56.2016 55.8215 55.7246C56.2711 55.2312 56.8761 54.8452 57.6362 54.5667C58.3959 54.2723 59.2395 54.1114 60.1671 54.0841C61.5745 54.0427 62.6728 54.3786 63.4621 55.0917C64.267 55.7883 64.6929 56.9363 64.74 58.5356C64.7559 59.0793 64.7696 59.5431 64.7809 59.927C64.7922 60.3108 64.7955 60.6949 64.7908 61.0792C64.8021 61.463 64.8157 61.9268 64.8317 62.4706C64.8383 62.6945 64.8397 63.0146 64.8359 63.4309C64.8317 63.8312 64.819 64.2157 64.7978 64.5845C65.0688 64.5445 65.3562 64.5201 65.66 64.5111C65.9634 64.4862 66.1951 64.4714 66.355 64.4667L66.4087 66.2899L61.8746 66.4232ZM61.4484 60.9134C60.5552 61.0197 59.7863 61.2744 59.1419 61.6775C58.5135 62.0802 58.2174 62.6251 58.2536 63.3124C58.2828 63.7597 58.4361 64.0753 58.7136 64.2592C58.9912 64.4432 59.3059 64.5299 59.6577 64.5196C60.0255 64.5088 60.367 64.4187 60.6822 64.2494C60.9974 64.08 61.2791 63.8636 61.5275 63.6002L61.4484 60.9134ZM67.7401 64.69C68.3959 64.6707 68.79 64.4671 68.9227 64.079C69.0549 63.6749 69.1115 63.153 69.0927 62.5133L68.9742 58.4831C68.9657 58.1952 68.9643 57.8751 68.9699 57.5228C68.9751 57.1545 68.9885 56.7939 69.0102 56.4411C68.7547 56.4646 68.4513 56.4896 68.1 56.5159C67.7641 56.5258 67.5085 56.5413 67.333 56.5625L67.2794 54.7393L68.239 54.7111C68.8627 54.6927 69.4281 54.596 69.9352 54.4211C70.4582 54.2456 70.7974 54.0756 70.9526 53.9109L72.1281 53.8763C72.1648 54.0353 72.1977 54.3385 72.2269 54.7858C72.2556 55.2172 72.2749 55.6008 72.2847 55.9366C72.9009 55.1182 73.484 54.5328 74.0339 54.1804C74.5837 53.8281 75.1466 53.6435 75.7223 53.6266C76.2821 53.6101 76.7746 53.7557 77.1998 54.0633C77.6245 54.3549 77.8473 54.8526 77.868 55.5563C77.875 55.7962 77.8266 56.0537 77.7226 56.3289C77.6182 56.5881 77.4486 56.8092 77.2139 56.9922C76.9792 57.1751 76.6539 57.2727 76.2381 57.285C75.9182 57.2944 75.5876 57.2081 75.2461 57.026C74.9046 56.844 74.7018 56.4818 74.6378 55.9394C74.318 55.9489 74.0021 56.0942 73.6903 56.3755C73.3779 56.6408 73.0992 56.9611 72.8541 57.3365C72.6246 57.6954 72.4663 58.0282 72.3793 58.3349L72.4943 62.2452C72.5009 62.4691 72.5023 62.7892 72.4986 63.2055C72.4943 63.6058 72.4816 63.9903 72.4605 64.3591C72.7154 64.3196 72.9948 64.2954 73.2987 64.2864C73.6181 64.261 73.8577 64.246 74.0177 64.2413L74.0713 66.0645L67.786 66.2494L67.7401 64.69ZM84.8217 66.1324C83.6542 66.1668 82.6151 65.9412 81.7044 65.4558C80.7933 64.9544 80.076 64.2391 79.5524 63.3101C79.0284 62.3651 78.7474 61.2449 78.7093 59.9495C78.6763 58.83 78.8934 57.7751 79.3605 56.785C79.8276 55.7948 80.5002 54.9907 81.3784 54.3726C82.2722 53.738 83.3188 53.4031 84.5183 53.3678C85.19 53.3481 85.8485 53.4247 86.4939 53.5978C87.1388 53.7549 87.7237 54.0499 88.2486 54.4826C88.7896 54.9149 89.2233 55.5104 89.5497 56.2691C89.8922 57.0274 90.0723 57.9825 90.0902 59.1345L82.2258 59.5099C82.2513 60.3735 82.378 61.1461 82.6062 61.8277C82.8503 62.5088 83.2261 63.042 83.7337 63.4272C84.2412 63.8125 84.9108 63.9929 85.7425 63.9684C86.2223 63.9543 86.7862 63.8097 87.4344 63.5345C88.0981 63.2428 88.692 62.7532 89.216 62.0655L90.3252 63.0413C89.7734 63.8739 89.176 64.5157 88.533 64.9668C87.8895 65.4019 87.242 65.7011 86.5906 65.8643C85.9551 66.0271 85.3655 66.1164 84.8217 66.1324ZM82.3204 57.8264L86.7345 57.6965C86.6893 56.7054 86.4769 56.0154 86.0973 55.6264C85.7173 55.2214 85.2474 55.0271 84.6876 55.0436C83.9839 55.0643 83.4397 55.3364 83.0549 55.8599C82.6696 56.3675 82.4248 57.023 82.3204 57.8264ZM97.7302 65.7527C96.5627 65.7871 95.5236 65.5615 94.6129 65.0761C93.7018 64.5747 92.9844 63.8594 92.4609 62.9304C91.9369 61.9854 91.6558 60.8652 91.6177 59.5698C91.5848 58.4503 91.8019 57.3954 92.269 56.4053C92.7361 55.4151 93.4087 54.611 94.2869 53.9929C95.1806 53.3583 96.2273 53.0234 97.4267 52.9881C98.0984 52.9684 98.757 53.045 99.4023 53.2181C100.047 53.3753 100.632 53.6702 101.157 54.1029C101.698 54.5352 102.132 55.1307 102.458 55.8895C102.801 56.6477 102.981 57.6028 102.999 58.7548L95.1343 59.1302C95.1597 59.9938 95.2865 60.7664 95.5146 61.448C95.7588 62.1291 96.1346 62.6623 96.6422 63.0476C97.1497 63.4328 97.8193 63.6132 98.6509 63.5887C99.1307 63.5746 99.6947 63.43 100.343 63.1548C101.007 62.8631 101.6 62.3735 102.124 61.6858L103.234 62.6616C102.682 63.4942 102.085 64.136 101.441 64.5871C100.798 65.0222 100.151 65.3214 99.499 65.4846C98.8636 65.6474 98.2739 65.7367 97.7302 65.7527ZM95.2289 57.4467L99.643 57.3168C99.5978 56.3257 99.3854 55.6357 99.0058 55.2467C98.6257 54.8417 98.1558 54.6474 97.5961 54.6639C96.8924 54.6846 96.3481 54.9567 95.9634 55.4802C95.5781 55.9878 95.3333 56.6433 95.2289 57.4467ZM104.896 63.5971C105.552 63.5778 105.946 63.3741 106.078 62.9861C106.211 62.582 106.267 62.0601 106.249 61.4204L106.13 57.3901C106.122 57.1023 106.12 56.7822 106.126 56.4299C106.131 56.0615 106.144 55.701 106.166 55.3482C105.911 55.3717 105.607 55.3967 105.256 55.423C104.92 55.4329 104.664 55.4484 104.489 55.4696L104.435 53.6464L105.395 53.6181C106.018 53.5998 106.584 53.5031 107.091 53.3281C107.614 53.1527 107.953 52.9826 108.108 52.818L109.284 52.7834C109.321 52.9424 109.354 53.2456 109.383 53.6929C109.411 54.1243 109.431 54.5079 109.441 54.8437C110.057 54.0252 110.64 53.4398 111.19 53.0875C111.74 52.7352 112.302 52.5506 112.878 52.5336C113.438 52.5172 113.93 52.6628 114.356 52.9704C114.78 53.262 115.003 53.7597 115.024 54.4634C115.031 54.7033 114.982 54.9608 114.878 55.236C114.774 55.4952 114.604 55.7163 114.37 55.8992C114.135 56.0822 113.81 56.1798 113.394 56.1921C113.074 56.2015 112.743 56.1151 112.402 55.9331C112.06 55.7511 111.858 55.3889 111.794 54.8465C111.474 54.8559 111.158 55.0013 110.846 55.2826C110.534 55.5479 110.255 55.8682 110.01 56.2436C109.78 56.6025 109.622 56.9353 109.535 57.242L109.65 61.1523C109.657 61.3762 109.658 61.6963 109.654 62.1126C109.65 62.5129 109.637 62.8974 109.616 63.2662C109.871 63.2267 110.151 63.2024 110.454 63.1935C110.774 63.1681 111.014 63.1531 111.173 63.1483L111.227 64.9716L104.942 65.1564L104.896 63.5971Z" fill="#8EBE94"/>
        <path d="M122.038 64.7976L117.387 51.9928C117.214 51.5337 117.073 51.1137 116.966 50.7327C116.875 50.3512 116.826 50.0325 116.818 49.7766C116.515 49.8015 116.243 49.8255 116.004 49.8486C115.78 49.8552 115.564 49.8695 115.357 49.8916L115.302 48.0444L122.379 47.8363L122.426 49.4196C121.834 49.421 121.397 49.5459 121.116 49.7942C120.852 50.0421 120.834 50.5309 121.063 51.2604C121.33 52.165 121.597 53.0695 121.864 53.9741C122.13 54.8786 122.397 55.7832 122.664 56.6877C122.824 57.2273 122.967 57.7353 123.093 58.2118C123.235 58.6878 123.389 59.3075 123.556 60.071L123.58 60.0703C123.637 59.8445 123.723 59.4978 123.837 59.0302C123.951 58.5627 124.073 58.0629 124.201 57.5309C124.345 56.9824 124.467 56.4906 124.566 56.0555C124.681 55.6039 124.76 55.2895 124.802 55.1122C125.134 53.8699 125.466 52.6356 125.798 51.4093C126.146 50.1665 126.485 48.932 126.817 47.7057L128.977 47.6422C129.484 49.0999 129.983 50.5579 130.474 52.0161C130.981 53.4738 131.48 54.9317 131.971 56.3899C132.163 56.9285 132.332 57.4918 132.477 58.0798C132.638 58.6513 132.791 59.2311 132.936 59.819L132.96 59.8183C133.089 59.3023 133.218 58.7703 133.345 58.2223C133.489 57.6579 133.632 57.0774 133.774 56.481C133.973 55.6267 134.173 54.7805 134.372 53.9423C134.572 53.1041 134.771 52.2658 134.97 51.4276C135.055 51.041 135.171 50.6454 135.32 50.2408C135.467 49.8203 135.657 49.4786 135.89 49.2156C135.634 49.2391 135.307 49.2648 134.908 49.2925C134.508 49.3043 134.22 49.3208 134.045 49.3419L133.99 47.4947L139.388 47.336L139.435 48.9193C138.891 48.9513 138.417 49.1653 138.013 49.5613C137.608 49.9414 137.259 50.608 136.967 51.561C136.39 53.7069 135.805 55.853 135.212 57.9994C134.619 60.1457 134.026 62.3001 133.433 64.4624L131.298 64.5252L128.215 56.0202C127.988 55.4026 127.794 54.8001 127.633 54.2125C127.487 53.6086 127.342 53.0366 127.198 52.4966C127.134 53.0427 127.054 53.5733 126.957 54.0884C126.86 54.5874 126.739 55.1112 126.595 55.6597L124.125 64.7362L122.038 64.7976ZM147.486 48.6824C147.135 48.7088 146.832 48.7657 146.579 48.8532C146.325 48.9407 146.131 49.1305 145.995 49.4226C145.875 49.6982 145.825 50.1639 145.844 50.8196L146.114 60.0077C146.127 60.4395 146.131 60.8555 146.127 61.2558C146.123 61.6561 146.108 61.9607 146.082 62.1696C146.337 62.13 146.656 62.1046 147.04 62.0933C147.44 62.0656 147.719 62.0494 147.879 62.0447L147.933 63.8919L141.048 64.0944L141.002 62.5111C141.369 62.4843 141.672 62.4273 141.909 62.3403C142.163 62.2528 142.349 62.0633 142.469 61.7716C142.604 61.4795 142.663 61.0136 142.644 60.3739L142.373 51.1858C142.361 50.754 142.357 50.338 142.361 49.9377C142.381 49.5369 142.396 49.2323 142.406 49.024C142.151 49.0475 141.831 49.0729 141.448 49.1002C141.064 49.1114 140.784 49.1277 140.609 49.1488L140.554 47.3016L147.44 47.0991L147.486 48.6824ZM150.086 63.8286L150.033 62.0293C151.179 60.1708 152.317 58.3126 153.446 56.4546C154.592 54.5961 155.738 52.7376 156.884 50.8791C157.174 50.4063 157.442 49.9823 157.687 49.6069C157.932 49.2156 158.201 48.8395 158.494 48.4787L154.388 48.4554C153.507 48.4493 152.787 48.7346 152.228 49.3113C151.668 49.872 151.407 50.8001 151.445 52.0955L149.862 52.1421L149.856 47.0281L162.066 46.6689L162.119 48.4681L155.518 59.1308C155.197 59.6365 154.875 60.1421 154.554 60.6478C154.232 61.1375 153.894 61.6036 153.539 62.0463L157.932 62.0131C158.828 62.0027 159.548 61.7254 160.092 61.1812C160.636 60.621 160.889 59.6851 160.85 58.3737L162.433 58.3271L162.44 63.4651L150.086 63.8286Z" fill="#5C1D8A"/>
        <path d="M21.4844 58.3424L32.6536 46.7971L46.2027 33.9167L59.7484 41.3257L28.4442 73.0946L21.4844 58.3424Z" fill="black"/>
        <path d="M11.7972 58.4759L45.9321 25.9753L56.5908 23.8579L11.7972 68.0711L11.7972 58.4759Z" fill="black"/>
        <path d="M27.4997 42.8681L29.8966 40.7392L32.2056 42.8683L29.7847 45.4937L27.4997 42.8681Z" fill="#FFD700"/>
        <path d="M30.5 41.9982C17.1515 44.4001 16.205 44.4578 12.705 47.0953C9.20505 49.7327 11.2051 62.5953 3.00004 60.9993" stroke="#FFD700"/>
        <rect x="2" y="59.998" width="2" height="3" fill="#FFCD00"/>
        <line x1="3.23717" y1="61.919" x2="4.23717" y2="64.919" stroke="#FFCD00" stroke-width="0.5"/>
        <line x1="2.98448" y1="61.973" x2="2.51043" y2="65.0996" stroke="#FFCD00" stroke-width="0.5"/>
        <line x1="3.0561" y1="62.1445" x2="1.20306" y2="64.707" stroke="#FFCD00" stroke-width="0.5"/>
        </svg>
        
    )
  }
  
  export default Logo;