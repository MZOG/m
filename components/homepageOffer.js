import Container from "./container";

export default function HomepageOffer() {
  return (
    <>
      <Container
        classes="flex flex-col md:flex-row md:justify-between md:items-center gap-5 py-10 md:py-20"
        id="strona-www"
      >
        <div className="px-10 order-2 md:order-1 md:w-1/2 md:flex items-center justify-center md:p-20">
          <svg
            viewBox="0 0 346 241"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_96_105)">
              <path
                d="M329.896 46.8805H16.1044C11.8347 46.8756 7.7413 45.1762 4.72219 42.1551C1.70308 39.134 0.00482243 35.0378 0 30.7653V16.1152C0.00482243 11.8426 1.70308 7.74649 4.72219 4.72535C7.7413 1.70422 11.8347 0.00482709 16.1044 0H329.896C334.165 0.00482566 338.259 1.70421 341.278 4.72535C344.297 7.74648 345.995 11.8426 346 16.1152V30.7653C345.995 35.0378 344.297 39.134 341.278 42.1551C338.259 45.1762 334.165 46.8756 329.896 46.8805ZM16.1044 0.976671C12.0935 0.981221 8.24816 2.57763 5.41203 5.41566C2.5759 8.25369 0.980563 12.1016 0.976017 16.1152V30.7653C0.980563 34.7789 2.5759 38.6268 5.41203 41.4648C8.24816 44.3028 12.0935 45.8992 16.1044 45.9038H329.896C333.906 45.8992 337.752 44.3028 340.588 41.4648C343.424 38.6268 345.019 34.7789 345.024 30.7653V16.1152C345.019 12.1016 343.424 8.25369 340.588 5.41566C337.752 2.57763 333.906 0.981221 329.896 0.976671H16.1044Z"
                fill="#3F3D56"
              />
              <path
                d="M248.398 14.1618H40.0169C34.896 14.1618 30.7447 18.3159 30.7447 23.4402V23.4402C30.7447 28.5646 34.896 32.7186 40.0169 32.7186H248.398C253.519 32.7186 257.67 28.5646 257.67 23.4402C257.67 18.3159 253.519 14.1618 248.398 14.1618Z"
                fill="#E6E6E6"
              />
              <path
                d="M275.726 95.5396H67.3456C62.2247 95.5396 58.0734 99.6937 58.0734 104.818V104.818C58.0734 109.942 62.2247 114.096 67.3456 114.096H275.726C280.847 114.096 284.999 109.942 284.999 104.818C284.999 99.6937 280.847 95.5396 275.726 95.5396Z"
                fill="#1858CD"
              />
              <path
                d="M275.726 154.541H67.3456C62.2247 154.541 58.0734 158.695 58.0734 163.82V163.82C58.0734 168.944 62.2247 173.098 67.3456 173.098H275.726C280.847 173.098 284.999 168.944 284.999 163.82C284.999 158.695 280.847 154.541 275.726 154.541Z"
                fill="#E6E6E6"
              />
              <path
                d="M275.726 213.543H67.3456C62.2247 213.543 58.0734 217.697 58.0734 222.821V222.821C58.0734 227.945 62.2247 232.1 67.3456 232.1H275.726C280.847 232.1 284.999 227.945 284.999 222.821C284.999 217.697 280.847 213.543 275.726 213.543Z"
                fill="#E6E6E6"
              />
              <path
                d="M315.496 33.4641C315.274 33.7815 314.935 33.9977 314.554 34.065C314.172 34.1323 313.78 34.0453 313.462 33.823L305.495 28.2753C305.177 28.053 304.961 27.7137 304.894 27.332C304.827 26.9503 304.914 26.5575 305.136 26.24C305.358 25.9225 305.697 25.7063 306.079 25.639C306.46 25.5717 306.853 25.6588 307.17 25.8811L315.138 31.4287C315.455 31.651 315.671 31.9904 315.738 32.3721C315.805 32.7538 315.718 33.1466 315.496 33.4641Z"
                fill="#1858CD"
              />
              <path
                d="M306.451 27.1611C305.275 28.8419 303.627 30.136 301.716 30.8797C299.805 31.6234 297.716 31.7833 295.714 31.3392C293.712 30.8951 291.887 29.867 290.469 28.3848C289.051 26.9026 288.104 25.033 287.748 23.0123C287.392 20.9916 287.643 18.9106 288.469 17.0325C289.294 15.1544 290.658 13.5635 292.388 12.4611C294.117 11.3586 296.134 10.794 298.184 10.8387C300.234 10.8835 302.225 11.5355 303.905 12.7124C306.154 14.2926 307.686 16.7012 308.163 19.4099C308.641 22.1186 308.025 24.9062 306.451 27.1611ZM291.589 16.7479C290.707 18.0085 290.218 19.5025 290.184 21.041C290.151 22.5796 290.574 24.0935 291.4 25.3914C292.227 26.6892 293.419 27.7128 294.827 28.3325C296.234 28.9523 297.794 29.1405 299.308 28.8732C300.823 28.606 302.224 27.8953 303.335 26.8312C304.446 25.767 305.217 24.3971 305.549 22.8947C305.882 21.3922 305.762 19.8248 305.205 18.3905C304.648 16.9563 303.678 15.7196 302.418 14.837C300.728 13.6557 298.639 13.1934 296.609 13.5517C294.578 13.9099 292.773 15.0594 291.589 16.7479Z"
                fill="#1858CD"
              />
              <path
                d="M320.867 122.948H25.1326C25.0032 122.948 24.879 122.897 24.7875 122.805C24.696 122.714 24.6446 122.59 24.6446 122.46C24.6446 122.331 24.696 122.206 24.7875 122.115C24.879 122.023 25.0032 121.972 25.1326 121.972H320.867C320.997 121.972 321.121 122.023 321.213 122.115C321.304 122.206 321.355 122.331 321.355 122.46C321.355 122.59 321.304 122.714 321.213 122.805C321.121 122.897 320.997 122.948 320.867 122.948Z"
                fill="#3F3D56"
              />
              <path
                d="M320.867 181.974H25.1326C25.0032 181.974 24.879 181.923 24.7875 181.831C24.696 181.74 24.6446 181.616 24.6446 181.486C24.6446 181.357 24.696 181.232 24.7875 181.141C24.879 181.049 25.0032 180.998 25.1326 180.998H320.867C320.997 180.998 321.121 181.049 321.213 181.141C321.304 181.232 321.355 181.357 321.355 181.486C321.355 181.616 321.304 181.74 321.213 181.831C321.121 181.923 320.997 181.974 320.867 181.974Z"
                fill="#3F3D56"
              />
              <path
                d="M320.867 241H25.1326C25.0032 241 24.879 240.949 24.7875 240.857C24.696 240.765 24.6446 240.641 24.6446 240.512C24.6446 240.382 24.696 240.258 24.7875 240.166C24.879 240.075 25.0032 240.023 25.1326 240.023H320.867C320.997 240.023 321.121 240.075 321.213 240.166C321.304 240.258 321.355 240.382 321.355 240.512C321.355 240.641 321.304 240.765 321.213 240.857C321.121 240.949 320.997 241 320.867 241Z"
                fill="#3F3D56"
              />
            </g>
            <defs>
              <clipPath id="clip0_96_105">
                <rect width="346" height="241" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="order-1 mb-5 md:w-1/2 md:order-2">
          <h2 className="text-2xl md:text-[32px] font-bold mb-4 md:mb-7">
            B??d?? widoczny dla <span className="text-mz-default">klient??w</span>.
          </h2>
          <p className="mb-4 md:text-[19px]">
            <span className="font-medium">
              Nikt nie s??ysza?? o Twojej firmie?
            </span>{" "}
            <span className="font-medium text-mz-default">
              Masz ma??o klient??w?{" "}
            </span>
            <span className="block">
              Dzieje si?? tak przez brak strony internetowej.
            </span>
          </p>
          <p className="mb-4 md:text-[19px]">
            <span className="text-mz-default">
              Wyjd?? swoim klientom na przeciw
            </span>
            , promuj swoj?? firm??,{" "}
            <span className="block">
              docieraj do klient??w z drugiego ko??ca Polski.
            </span>
          </p>

          <p className="md:text-[19px]">
            <span className="font-medium">Strona internetowa</span> pracuje dla
            Ciebie przez ca???? dob??.
          </p>
        </div>
      </Container>

      <Container classes="md:flex justify-between items-center md:py-20">
        <div className="md:w-7/12 mb-10 md:mb-0">
          <h2 className="text-2xl md:text-[32px] font-bold mb-4 md:mb-7">
            Nie taka prosta{" "}
            <span className="text-mz-default">strona internetowa</span>.
          </h2>
          <p className="mb-4 md:text-[19px]">
            Strona internetowa to nie tylko wygl??d.{" "}
            <span className="text-mz-default">Hosting</span>,{" "}
            <span className="text-mz-default">domena</span>,
            <span className="block">
              <span className="text-mz-default">certyfikat SSL</span> to tematy,
              o kt??re nie musisz si?? martwi??.
            </span>
          </p>
          <p className="mb-4 md:text-[19px]">
            Wszystko to dostaniesz{" "}
            <span className="text-mz-default">za darmo</span>, brzmi dobrze?
          </p>
        </div>
        <div className="md:w-5/12 px-10 mb-10 md:mb-0 flex items-center justify-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 397 219"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M323.479 183.862C316.737 173.397 291.672 164.969 263.282 163.621L261.622 162.881C273.087 171.161 278.546 180.605 277.26 189.929C276.519 195.296 273.602 200.585 272.215 205.934C271.452 208.873 272.411 212.602 279.763 213.634C284.734 214.332 290.219 213.36 294.595 212.231C318.194 206.14 330.221 194.328 323.479 183.862Z"
              fill="#F2F2F2"
            />
            <path
              d="M300.223 218.184H101.537C93.5862 218.184 85.9608 215.023 80.3387 209.396C74.7165 203.769 71.558 196.137 71.558 188.179C71.558 180.221 74.7165 172.589 80.3387 166.962C85.9608 161.335 93.5862 158.174 101.537 158.174H300.223C308.174 158.174 315.799 161.335 321.421 166.962C327.043 172.589 330.202 180.221 330.202 188.179C330.202 196.137 327.043 203.769 321.421 209.396C315.799 215.023 308.174 218.184 300.223 218.184V218.184ZM101.537 159.743C94.0019 159.743 86.7753 162.739 81.4471 168.072C76.1189 173.405 73.1255 180.637 73.1255 188.179C73.1255 195.721 76.1189 202.953 81.4471 208.286C86.7753 213.619 94.0019 216.615 101.537 216.615H300.223C307.758 216.615 314.985 213.619 320.313 208.286C325.641 202.953 328.634 195.721 328.634 188.179C328.634 180.637 325.641 173.405 320.313 168.072C314.985 162.739 307.758 159.743 300.223 159.743H101.537Z"
              fill="#3F3D56"
            />
            <path
              d="M99.7737 197.788C98.3192 197.787 96.9247 197.208 95.8961 196.178C94.8676 195.149 94.2891 193.753 94.2874 192.297V178.177C94.2874 176.721 94.8654 175.324 95.8943 174.295C96.9232 173.265 98.3187 172.686 99.7737 172.686C101.229 172.686 102.624 173.265 103.653 174.295C104.682 175.324 105.26 176.721 105.26 178.177V192.297C105.258 193.753 104.68 195.149 103.651 196.178C102.623 197.208 101.228 197.787 99.7737 197.788V197.788Z"
              fill="#1858CD"
            />
            <path
              d="M115.449 197.788C113.995 197.787 112.6 197.208 111.571 196.178C110.543 195.149 109.964 193.753 109.963 192.297V178.177C109.963 176.721 110.541 175.324 111.57 174.295C112.599 173.265 113.994 172.686 115.449 172.686C116.904 172.686 118.3 173.265 119.329 174.295C120.357 175.324 120.935 176.721 120.935 178.177V192.297C120.934 193.753 120.355 195.149 119.327 196.178C118.298 197.208 116.904 197.787 115.449 197.788V197.788Z"
              fill="#1858CD"
            />
            <path
              d="M131.125 197.788C129.67 197.787 128.275 197.208 127.247 196.178C126.218 195.149 125.64 193.753 125.638 192.297V178.177C125.638 176.721 126.216 175.324 127.245 174.295C128.274 173.265 129.669 172.686 131.125 172.686C132.58 172.686 133.975 173.265 135.004 174.295C136.033 175.324 136.611 176.721 136.611 178.177V192.297C136.609 193.753 136.031 195.149 135.002 196.178C133.974 197.208 132.579 197.787 131.125 197.788V197.788Z"
              fill="#FF6584"
            />
            <path
              d="M146.8 197.788C145.345 197.787 143.951 197.208 142.922 196.178C141.894 195.149 141.315 193.753 141.313 192.297V178.177C141.313 176.721 141.891 175.324 142.92 174.295C143.949 173.265 145.345 172.686 146.8 172.686C148.255 172.686 149.65 173.265 150.679 174.295C151.708 175.324 152.286 176.721 152.286 178.177V192.297C152.285 193.753 151.706 195.149 150.677 196.178C149.649 197.208 148.254 197.787 146.8 197.788V197.788Z"
              fill="#1858CD"
            />
            <path
              d="M153.07 158.959H151.502V100.092H39.692V98.5233H153.07V158.959Z"
              fill="#3F3D56"
            />
            <path
              d="M22.2218 116.536C34.2468 116.536 43.9949 106.78 43.9949 94.7446C43.9949 82.7094 34.2468 72.9529 22.2218 72.9529C10.1969 72.9529 0.44873 82.7094 0.44873 94.7446C0.44873 106.78 10.1969 116.536 22.2218 116.536Z"
              fill="#1858CD"
            />
            <path
              d="M19.2515 106.086C18.8755 106.086 18.5047 105.999 18.1684 105.83C17.8321 105.662 17.5397 105.417 17.3141 105.116L11.3741 97.1894C11.1829 96.9348 11.0436 96.6449 10.9644 96.3364C10.8851 96.0279 10.8674 95.7067 10.9123 95.3914C10.9571 95.076 11.0636 94.7726 11.2257 94.4984C11.3878 94.2243 11.6023 93.9848 11.857 93.7936C12.1116 93.6025 12.4014 93.4635 12.7097 93.3845C13.0181 93.3056 13.3389 93.2882 13.654 93.3335C13.969 93.3787 14.2721 93.4857 14.5458 93.6482C14.8195 93.8108 15.0586 94.0257 15.2492 94.2808L19.1354 99.4664L29.1166 84.482C29.4732 83.9477 30.0271 83.577 30.6567 83.4513C31.2862 83.3256 31.9399 83.4551 32.4741 83.8115C33.0083 84.168 33.3792 84.722 33.5054 85.352C33.6316 85.982 33.5026 86.6364 33.147 87.1713L21.267 105.007C21.0521 105.329 20.763 105.596 20.4241 105.783C20.0851 105.971 19.7061 106.075 19.3189 106.085C19.2964 106.086 19.274 106.086 19.2515 106.086Z"
              fill="white"
            />
            <path
              d="M246.03 158.959H244.463V98.5233H357.841V100.092H246.03V158.959Z"
              fill="#3F3D56"
            />
            <path
              d="M375.227 116.536C387.252 116.536 397 106.78 397 94.7446C397 82.7094 387.252 72.9529 375.227 72.9529C363.202 72.9529 353.454 82.7094 353.454 94.7446C353.454 106.78 363.202 116.536 375.227 116.536Z"
              fill="#1858CD"
            />
            <path
              d="M372.256 106.086C371.881 106.086 371.51 105.999 371.173 105.83C370.837 105.662 370.545 105.417 370.319 105.116L364.379 97.1894C364.188 96.9348 364.049 96.6449 363.969 96.3364C363.89 96.0279 363.872 95.7067 363.917 95.3914C363.962 95.076 364.069 94.7726 364.231 94.4984C364.393 94.2243 364.607 93.9848 364.862 93.7936C365.117 93.6025 365.406 93.4635 365.715 93.3845C366.023 93.3056 366.344 93.2882 366.659 93.3335C366.974 93.3787 367.277 93.4857 367.551 93.6482C367.824 93.8108 368.064 94.0257 368.254 94.2808L372.14 99.4664L382.121 84.482C382.478 83.9477 383.032 83.577 383.662 83.4513C384.291 83.3256 384.945 83.4551 385.479 83.8115C386.013 84.168 386.384 84.722 386.51 85.352C386.636 85.982 386.508 86.6364 386.152 87.1713L374.272 105.007C374.057 105.329 373.768 105.596 373.429 105.783C373.09 105.971 372.711 106.075 372.324 106.085C372.301 106.086 372.279 106.086 372.256 106.086Z"
              fill="white"
            />
            <path
              d="M199.55 33.6471H197.983V158.959H199.55V33.6471Z"
              fill="#3F3D56"
            />
            <path
              d="M200.921 43.5835C212.946 43.5835 222.695 33.827 222.695 21.7917C222.695 9.75649 212.946 0 200.921 0C188.896 0 179.148 9.75649 179.148 21.7917C179.148 33.827 188.896 43.5835 200.921 43.5835Z"
              fill="#1858CD"
            />
            <path
              d="M197.951 33.1333C197.575 33.1333 197.204 33.0457 196.868 32.8773C196.532 32.709 196.239 32.4646 196.014 32.1635L190.074 24.2365C189.882 23.9819 189.743 23.692 189.664 23.3835C189.585 23.075 189.567 22.7539 189.612 22.4385C189.657 22.1231 189.763 21.8197 189.925 21.5455C190.087 21.2714 190.302 21.0319 190.556 20.8408C190.811 20.6497 191.101 20.5106 191.409 20.4317C191.718 20.3527 192.038 20.3354 192.354 20.3806C192.669 20.4258 192.972 20.5328 193.245 20.6953C193.519 20.8579 193.758 21.0728 193.949 21.3279L197.835 26.5135L207.816 11.5292C208.173 10.9949 208.727 10.6241 209.356 10.4984C209.986 10.3727 210.639 10.5023 211.174 10.8587C211.708 11.2151 212.079 11.7692 212.205 12.3992C212.331 13.0291 212.202 13.6835 211.847 14.2184L199.966 32.0538C199.752 32.3764 199.463 32.6427 199.124 32.8303C198.785 33.018 198.406 33.1216 198.018 33.1325C197.996 33.1329 197.974 33.1333 197.951 33.1333Z"
              fill="white"
            />
            <path
              d="M174.363 177.804C191.293 176.911 208.237 176.436 225.196 176.378C242.083 176.324 258.965 176.687 275.842 177.468C285.38 177.909 294.91 178.484 304.433 179.193C305.942 179.305 305.935 176.951 304.433 176.839C287.527 175.585 270.596 174.748 253.642 174.328C236.76 173.913 219.874 173.916 202.985 174.337C193.44 174.575 183.899 174.946 174.363 175.451C172.858 175.53 172.849 177.884 174.363 177.804Z"
              fill="#3F3D56"
            />
            <path
              d="M174.363 188.002C191.293 187.109 208.237 186.633 225.196 186.576C242.083 186.521 258.965 186.885 275.842 187.666C285.38 188.107 294.91 188.682 304.433 189.39C305.942 189.502 305.935 187.149 304.433 187.037C287.527 185.783 270.596 184.946 253.642 184.526C236.76 184.111 219.874 184.114 202.985 184.535C193.44 184.772 183.899 185.144 174.363 185.649C172.858 185.728 172.849 188.082 174.363 188.002Z"
              fill="#3F3D56"
            />
            <path
              d="M174.363 198.2C191.293 197.306 208.237 196.831 225.196 196.773C242.083 196.719 258.965 197.082 275.842 197.863C285.38 198.305 294.91 198.88 304.433 199.588C305.942 199.7 305.935 197.346 304.433 197.235C287.527 195.98 270.596 195.143 253.642 194.724C236.76 194.309 219.874 194.312 202.985 194.732C193.44 194.97 183.899 195.342 174.363 195.846C172.858 195.926 172.849 198.28 174.363 198.2Z"
              fill="#3F3D56"
            />
          </svg>
        </div>
      </Container>

      <Container classes="pb-10 md:pb-20">
        <div className="mb-10">
          <p className="text-center text-sm md:text-base md:text-left text-mz-default bg-blue-50 inline-block py-1 px-4 rounded-full">
            Razem ze stron?? internetow?? dostaniesz:
          </p>
        </div>
        <div className="md:grid grid-cols-3 gap-4">
          <div className="mb-5 md:mb-0 rounded-[10px] p-4 md:p-6 border border-dashed border-mz-default">
            <h3 className="text-[20px] md:text-[25px] mb-2 text-mz-default font-bold text-center">
              Domena
            </h3>
            <p>
              Strona internetowa nie istenieje bez odpowiedniej domeny. Darmowa
              domena w cenie strony!
            </p>
          </div>
          <div className="mb-5 md:mb-0 rounded-[10px] p-4 md:p-6 border border-dashed border-mz-default">
            <h3 className="text-[20px] md:text-[25px] mb-2 text-mz-default font-bold text-center">
              Hosting
            </h3>
            <p>
              Odpowiedni hosting to gwarancja szybkiej strony internetowej. B??d??
              szybszy od konkurencji!
            </p>
          </div>
          <div className="mb-5 md:mb-0 rounded-[10px] p-4 md:p-6 border border-dashed border-mz-default">
            <h3 className="text-[20px] md:text-[25px] mb-2 text-mz-default font-bold text-center">
              Certyfikat SSL
            </h3>
            <p>
              Zapewnij bezpiecze??stwo swoim klientom poprzez certyfikat SSL.
              Dobra firma to bezpieczna firma!
            </p>
          </div>
          <div className="mb-5 md:mb-0 rounded-[10px] p-4 md:p-6 border border-dashed border-mz-secondary">
            <h3 className="text-[20px] md:text-[25px] mb-2 text-mz-secondary font-bold text-center">
              JAMstack
            </h3>
            <p>
              Zapomnij o WordPressie, tworz?? strony 10 razy szybsze i
              bezpieczniejsze dzi??ki wykorzystaniu JAMstack.
            </p>
          </div>
          <div className="mb-5 md:mb-0 rounded-[10px] p-4 md:p-6 border border-dashed border-mz-secondary">
            <h3 className="text-[20px] md:text-[25px] mb-2 text-mz-secondary font-bold text-center">
              CMS
            </h3>
            <p>
              Zarz??dzaj swoj?? stron?? samodzielnie, intuicyjny system zarz??dzania
              tre??ci?? dopasowany do Twoich potrzeb.
            </p>
          </div>
          <div className="mb-5 md:mb-0 rounded-[10px] p-4 md:p-6 border border-dashed border-mz-secondary">
            <h3 className="text-[20px] md:text-[25px] mb-2 text-mz-secondary font-bold text-center">
              Gwarancja
            </h3>
            <p>
              Masz pytanie? Czego?? nie wiesz? Jestem tutaj, aby Ci pom??c i
              rozwi??za?? Twoje problemy.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
