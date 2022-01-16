import Container from "./container";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="bg-mz-default py-9 md:py-20 mb-10 md:mb-20">
      <Container classes="md:flex justify-between items-center">
        <div>
          <h2 className="text-white text-2xl mb-4 md:mb-7 md:text-[32px] font-bold">
            Zadzwoń lub napisz.
          </h2>

          <p className="text-white md:text-[19px] mb-4 md:mb-7">
            Stwórzmy razem fajną stronę internetową.
          </p>

          <p className="text-white mb-4 md:mb-7">
            Napisz:
            <span className="block mt-2 text-center md:inline-block md:mt-0 md:text-left md:ml-5 bg-white text-mz-default py-2 font-medium px-4 rounded-full">
              <a href="mailto:kontakt@marcinzogrodnik.pl">
                kontakt@marcinzogrodnik.pl
              </a>
            </span>
          </p>

          <p className="text-white">
            Zadzwoń:
            <span className="block mt-2 text-center md:inline-block md:mt-0 md:text-left md:ml-5 bg-white text-mz-default py-2 font-medium px-4 rounded-full">
              <a href="tel:+48739907919">+48 739 907 919</a>
            </span>
          </p>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/4 p-10 md:p-0">
          <svg
            viewBox="0 0 236 183"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M122.106 88.432C157.832 88.432 186.794 82.4069 186.794 74.9745C186.794 67.5422 157.832 61.5171 122.106 61.5171C86.3798 61.5171 57.418 67.5422 57.418 74.9745C57.418 82.4069 86.3798 88.432 122.106 88.432Z"
              fill="#CACACA"
            />
            <path
              d="M125.911 81.5762H118.301V182.214H125.911V81.5762Z"
              fill="#CACACA"
            />
            <path
              d="M166.589 68.6074C167.001 67.799 167.578 67.0866 168.284 66.5169C168.99 65.9472 169.809 65.533 170.686 65.3015C171.563 65.0699 172.48 65.0263 173.375 65.1734C174.271 65.3205 175.125 65.655 175.882 66.155C176.121 66.3145 176.348 66.4904 176.563 66.6814L204.501 60.0688L206.561 53.2349L217.706 55.0635L215.428 66.5429C215.15 67.9181 214.435 69.1669 213.39 70.1041C212.346 71.0412 211.027 71.6167 209.629 71.7451L178.022 74.5277C177.925 74.715 177.818 74.8972 177.703 75.0736C177.202 75.8302 176.547 76.4725 175.781 76.9585C175.015 77.4445 174.155 77.7632 173.257 77.8937C172.359 78.0242 171.443 77.9636 170.57 77.7158C169.697 77.4681 168.886 77.0387 168.191 76.4559C167.988 76.2874 167.797 76.1063 167.617 75.9136C166.72 74.9465 166.14 73.7279 165.956 72.4217C165.772 71.1155 165.993 69.7843 166.589 68.6074Z"
              fill="#FFB8B8"
            />
            <path
              d="M227.169 117.218H199.063C199.063 118.026 170.097 118.681 170.097 118.681C169.642 119.023 169.228 119.416 168.862 119.851C167.762 121.163 167.16 122.821 167.164 124.532V125.702C167.165 127.642 167.936 129.502 169.308 130.873C170.68 132.245 172.541 133.015 174.482 133.016H227.169C229.109 133.014 230.969 132.243 232.341 130.872C233.713 129.501 234.485 127.642 234.486 125.702V124.532C234.484 122.593 233.712 120.734 232.34 119.363C230.968 117.992 229.109 117.221 227.169 117.218Z"
              fill="#E4E4E4"
            />
            <path
              d="M204.207 132.726H196.596V181.875H204.207V132.726Z"
              fill="#E4E4E4"
            />
            <path
              d="M174.936 181.607C174.936 182.429 186.468 181.925 200.694 181.925C214.92 181.925 226.452 182.429 226.452 181.607C226.452 180.785 214.92 174.268 200.694 174.268C186.468 174.268 174.936 180.785 174.936 181.607Z"
              fill="#E4E4E4"
            />
            <path
              d="M182.392 175.261L175.215 175.261L171.8 156.656L182.393 156.657L182.392 175.261Z"
              fill="#FFB8B8"
            />
            <path
              d="M184.222 182.214L161.081 182.214V181.921C161.081 180.739 161.313 179.568 161.766 178.476C162.219 177.384 162.882 176.391 163.719 175.555C164.555 174.719 165.548 174.056 166.641 173.604C167.734 173.151 168.905 172.918 170.088 172.918H170.089L184.223 172.919L184.222 182.214Z"
              fill="#2F2E41"
            />
            <path
              d="M171.657 163.724L157.349 131.656C156.155 128.953 156.023 125.9 156.979 123.104C157.936 120.308 159.911 117.975 162.512 116.569L193.547 99.9361L207.708 98.7322L220.772 97.5454L220.866 97.7048C220.986 97.9082 223.795 102.757 221.896 108.074C220.456 112.107 216.71 115.257 210.763 117.437C196.88 122.524 180.843 126.873 174.592 128.506C174.316 128.576 174.058 128.705 173.835 128.882C173.612 129.06 173.429 129.282 173.298 129.535C173.167 129.786 173.089 130.06 173.069 130.342C173.049 130.624 173.088 130.907 173.183 131.173L186.475 161.022C186.614 161.401 186.664 161.806 186.622 162.207C186.579 162.608 186.445 162.994 186.229 163.335C186.014 163.675 185.723 163.962 185.379 164.173C185.035 164.384 184.647 164.513 184.245 164.55L174.313 165.273C174.229 165.281 174.145 165.285 174.061 165.285C173.553 165.285 173.055 165.137 172.628 164.86C172.202 164.583 171.864 164.189 171.657 163.724Z"
              fill="#2F2E41"
            />
            <path
              d="M187.075 175.261L179.898 175.261L176.484 156.656L187.076 156.657L187.075 175.261Z"
              fill="#FFB8B8"
            />
            <path
              d="M188.905 182.214L165.764 182.214V181.921C165.764 180.739 165.997 179.568 166.449 178.476C166.902 177.384 167.565 176.391 168.402 175.555C169.238 174.719 170.231 174.056 171.324 173.604C172.417 173.151 173.588 172.918 174.771 172.918H174.772L188.906 172.919L188.905 182.214Z"
              fill="#2F2E41"
            />
            <path
              d="M176.926 165.48L162.618 133.411C161.423 130.709 161.291 127.655 162.248 124.859C163.205 122.064 165.18 119.731 167.781 118.325L198.815 101.692L212.977 100.488L223.209 99.6007L223.208 99.4604C223.328 99.6639 226.137 104.513 224.238 109.83C222.798 113.862 221.979 117.013 216.031 119.192C202.149 124.28 186.111 128.628 179.861 130.261C179.585 130.332 179.326 130.46 179.103 130.638C178.88 130.815 178.697 131.038 178.566 131.291C178.435 131.541 178.357 131.816 178.338 132.098C178.318 132.38 178.357 132.663 178.451 132.929L191.744 162.778C191.883 163.156 191.933 163.562 191.89 163.963C191.848 164.364 191.713 164.749 191.498 165.09C191.282 165.431 190.991 165.718 190.648 165.929C190.304 166.139 189.916 166.268 189.514 166.306L179.582 167.028C179.497 167.036 179.413 167.04 179.33 167.04C178.821 167.04 178.323 166.893 177.897 166.616C177.47 166.339 177.133 165.944 176.926 165.48Z"
              fill="#2F2E41"
            />
            <path
              d="M203.89 100.185C203.204 99.7004 193.353 104.866 191.597 100.771C199.792 80.2918 194.145 71.4487 199.165 59.7052C200.049 57.6797 201.381 55.8809 203.061 54.4439C204.741 53.0069 206.725 51.9691 208.863 51.4086L221.889 50.7515L221.956 50.784C224.895 52.2229 227.292 54.5702 228.792 57.4778C230.291 60.3855 230.813 63.6987 230.28 66.9262C230.234 79.7068 222.583 89.4544 225.258 98.7244C225.37 99.112 225.403 99.5182 225.354 99.9187C225.306 100.319 225.177 100.706 224.975 101.055C224.779 101.393 224.516 101.687 224.203 101.919C223.889 102.152 223.531 102.317 223.151 102.406L205.952 100.113C205.551 100.209 205.133 100.218 204.728 100.139C204.322 100.061 203.938 99.8968 203.601 99.6584L203.89 100.185Z"
              fill="#1D2C46"
            />
            <path
              d="M217.542 45.8891C225.483 45.8891 231.92 39.4551 231.92 31.5183C231.92 23.5815 225.483 17.1475 217.542 17.1475C209.601 17.1475 203.163 23.5815 203.163 31.5183C203.163 39.4551 209.601 45.8891 217.542 45.8891Z"
              fill="#FFB8B8"
            />
            <path
              d="M222.121 44.7089C221.358 45.043 219.793 38.9589 220.494 37.742C221.536 35.9323 221.474 35.9453 222.166 34.748C222.858 33.5507 223.013 31.9119 222.117 30.8585C221.221 29.805 219.148 29.9447 218.739 31.2656C219.002 28.7568 216.519 26.74 214.06 26.1733C211.6 25.6066 209.006 25.9585 206.533 25.4541C203.663 24.8688 200.677 22.4644 201.822 19.3101C202.019 18.7849 202.313 18.3017 202.689 17.8859C204.012 16.3992 205.863 15.7643 207.672 15.1505C211.437 13.8736 215.304 12.5805 219.277 12.7215C222.55 12.8926 225.702 14.0136 228.348 15.9475C230.994 17.8813 233.018 20.5441 234.173 23.6099C234.447 24.3768 234.659 25.1644 234.807 25.9651C236.171 33.2931 231.913 40.5214 224.998 43.3119L222.121 44.7089Z"
              fill="#2F2E41"
            />
            <path
              d="M9.73843 112.982H31.7092C31.7092 113.923 55.7262 114.687 55.7262 114.687C56.256 115.086 56.7389 115.543 57.1655 116.051C58.4476 117.579 59.1483 119.511 59.1441 121.505V122.869C59.1433 125.129 58.2446 127.296 56.6456 128.894C55.0466 130.493 52.8782 131.391 50.6169 131.392H9.73843C7.47748 131.39 5.3097 130.491 3.71096 128.893C2.11223 127.295 1.21321 125.129 1.21124 122.869V121.505C1.21438 119.246 2.11379 117.08 3.71227 115.482C5.31075 113.885 7.47784 112.986 9.73843 112.982Z"
              fill="#E4E4E4"
            />
            <path
              d="M34.5837 131.053H25.7155V182.215H34.5837V131.053Z"
              fill="#E4E4E4"
            />
            <path
              d="M60.4608 181.267C60.4608 182.225 47.0223 181.638 30.4451 181.638C13.8678 181.638 0.429321 182.225 0.429321 181.267C0.429321 180.309 13.8678 172.715 30.4451 172.715C47.0223 172.715 60.4608 180.309 60.4608 181.267Z"
              fill="#E4E4E4"
            />
            <path
              d="M66.418 175.421H73.018L76.1581 149.977L66.4169 149.977L66.418 175.421Z"
              fill="#FFB8B8"
            />
            <path
              d="M64.7345 173.268L77.7326 173.267H77.7331C79.9299 173.267 82.0367 174.14 83.5902 175.692C85.1436 177.245 86.0163 179.35 86.0165 181.546V181.815L64.7349 181.816L64.7345 173.268Z"
              fill="#2F2E41"
            />
            <path
              d="M85.9251 175.421H92.5256L95.6652 149.977L85.924 149.977L85.9251 175.421Z"
              fill="#FFB8B8"
            />
            <path
              d="M84.2417 173.268L97.2398 173.267H97.2403C99.4371 173.267 101.544 174.14 103.097 175.692C104.651 177.245 105.524 179.35 105.524 181.546V181.815L84.2421 181.816L84.2417 173.268Z"
              fill="#2F2E41"
            />
            <path
              d="M62.9538 94.8922C62.862 94.1647 62.6117 93.4662 62.2206 92.8459C61.8295 92.2255 61.307 91.6984 60.6901 91.3017C60.0731 90.905 59.3766 90.6483 58.6496 90.5498C57.9227 90.4512 57.1829 90.5132 56.4825 90.7313L49.1368 81.9302L42.6969 85.0873L53.2451 97.3705C53.6896 98.5223 54.5414 99.4711 55.6391 100.037C56.7368 100.603 58.0041 100.747 59.2008 100.441C60.3975 100.136 61.4405 99.4023 62.1322 98.3795C62.8239 97.3568 63.1162 96.116 62.9538 94.8922Z"
              fill="#FFB8B8"
            />
            <path
              d="M38.2521 42.6899L42.5607 44.4575L43.6039 56.6225L55.1441 88.1679L45.3426 91.4287L34.4528 70.2683L38.2521 42.6899Z"
              fill="#E4E4E4"
            />
            <path
              d="M27.0639 28.6266C33.4018 28.6266 38.5397 23.4914 38.5397 17.1568C38.5397 10.8222 33.4018 5.68701 27.0639 5.68701C20.726 5.68701 15.5881 10.8222 15.5881 17.1568C15.5881 23.4914 20.726 28.6266 27.0639 28.6266Z"
              fill="#FFB8B8"
            />
            <path
              d="M25.2984 11.8195C25.2984 11.8195 25.802 4.85161 32.0148 7.69274C38.2277 10.5339 37.8223 2.7028 35.9448 1.31896C34.0673 -0.0648859 34.1268 -0.40735 27.2601 0.518523C20.3934 1.4444 7.06204 3.01313 11.3726 16.8128C15.6832 30.6125 22.0316 27.0199 22.0316 27.0199C22.0316 27.0199 16.1608 14.6446 19.6326 17.0104L23.1043 19.3762L24.9364 18.9884L25.2984 11.8195Z"
              fill="#2F2E41"
            />
            <path
              d="M8.22943 96.0523C8.22943 96.0523 4.37893 116.402 19.0294 118.994C33.6799 121.585 54.8282 123.407 54.8282 123.407L64.3252 167.693L77.0842 166.554C77.0842 166.554 75.3873 113.244 71.2143 109.073C67.0413 104.902 47.1998 92.6963 47.1998 92.6963L8.22943 96.0523Z"
              fill="#2F2E41"
            />
            <path
              d="M36.8428 87.5234L43.2502 93.948C43.2502 93.948 89.5155 101.396 91.3003 112.076C93.995 128.201 97.1777 163.265 97.1777 163.265L83.2676 162.222L77.8129 122.364L55.5568 117.304L30.2355 103.512L36.8428 87.5234Z"
              fill="#2F2E41"
            />
            <path
              d="M36.4863 38.2578L32.7645 33.3258L20.695 33.1284C16.9301 35.1312 13.7812 38.1197 11.5853 41.7741C9.38946 45.4284 8.22942 49.6108 8.22942 53.8735V85.0805C8.22942 85.0805 8.40095 89.2333 7.49227 98.7698C6.70821 106.998 50.5198 93.9477 50.5198 93.9477L44.8324 47.636C44.8324 47.636 45.2894 40.259 36.4863 38.2578Z"
              fill="#E4E4E4"
            />
            <path
              d="M161.094 33.6862C160.585 30.2596 160.45 26.7877 160.693 23.332L161.094 17.6128C158.884 22.0072 159.384 27.7911 161.094 33.6862Z"
              fill="#E5E5E5"
            />
            <path
              d="M162.817 34.6432C162.572 32.5984 162.507 30.5361 162.624 28.48L162.817 25.0757C161.754 27.6914 161.994 31.1342 162.817 34.6432Z"
              fill="#E5E5E5"
            />
            <path
              d="M170.476 38.8533V40.7668C170.475 40.9188 170.414 41.0644 170.307 41.1719C170.199 41.2794 170.053 41.3401 169.901 41.3409H168.944C168.919 41.3408 168.894 41.3457 168.871 41.3553C168.847 41.3649 168.826 41.379 168.809 41.3967C168.791 41.4145 168.777 41.4356 168.767 41.4589C168.757 41.4821 168.753 41.5071 168.753 41.5322V57.2229C168.752 57.3749 168.691 57.5205 168.584 57.628C168.476 57.7355 168.33 57.7962 168.178 57.797H156.5C156.348 57.7969 156.202 57.7364 156.094 57.6287C155.986 57.5211 155.926 57.3752 155.925 57.2229V41.5322C155.925 41.4815 155.905 41.433 155.869 41.3971C155.833 41.3613 155.785 41.341 155.734 41.3409H154.585C154.433 41.3408 154.287 41.2803 154.179 41.1727C154.072 41.065 154.011 40.9191 154.011 40.7669V38.8533C154.011 38.7779 154.026 38.7033 154.055 38.6336C154.083 38.5639 154.126 38.5005 154.179 38.4472C154.232 38.3939 154.296 38.3516 154.365 38.3228C154.435 38.294 154.51 38.2792 154.585 38.2793H169.901C170.054 38.2798 170.199 38.3404 170.307 38.4479C170.415 38.5555 170.475 38.7012 170.476 38.8533Z"
              fill="#3F3D56"
            />
            <path
              d="M168.77 41.7427H155.943V42.3167H168.77V41.7427Z"
              fill="#1D2C46"
            />
            <path
              d="M168.753 50.1901C166.696 51.0734 164.482 51.5289 162.243 51.5289C160.005 51.5289 157.79 51.0734 155.734 50.1901V46.1459C159.958 44.7281 164.529 44.7281 168.753 46.1459V50.1901Z"
              fill="#1D2C46"
            />
            <path
              d="M82.0631 46.5588C81.5541 43.1321 81.4197 39.6603 81.6621 36.2046L82.0631 30.4854C79.8534 34.8798 80.3528 40.6637 82.0631 46.5588Z"
              fill="#E5E5E5"
            />
            <path
              d="M83.7861 47.5157C83.5411 45.471 83.4766 43.4086 83.5932 41.3525L83.7861 37.9482C82.723 40.564 82.9633 44.0067 83.7861 47.5157Z"
              fill="#E5E5E5"
            />
            <path
              d="M91.4451 51.7259V53.6394C91.4443 53.7914 91.3835 53.937 91.276 54.0445C91.1684 54.1519 91.0228 54.2127 90.8707 54.2135H89.9135C89.8883 54.2134 89.8634 54.2183 89.8401 54.2278C89.8168 54.2374 89.7957 54.2515 89.7779 54.2693C89.7601 54.2871 89.746 54.3082 89.7364 54.3314C89.7268 54.3547 89.722 54.3796 89.722 54.4048V70.0955C89.7213 70.2475 89.6605 70.3931 89.553 70.5006C89.4454 70.6081 89.2998 70.6688 89.1477 70.6696H77.4692C77.3169 70.6695 77.1709 70.6089 77.0632 70.5013C76.9555 70.3937 76.895 70.2477 76.8948 70.0955V54.4048C76.8947 54.3541 76.8745 54.3055 76.8386 54.2697C76.8027 54.2338 76.7541 54.2136 76.7034 54.2135H75.5547C75.4024 54.2133 75.2564 54.1528 75.1487 54.0452C75.041 53.9376 74.9805 53.7916 74.9803 53.6394V51.7259C74.9802 51.6505 74.995 51.5758 75.0238 51.5061C75.0527 51.4364 75.095 51.3731 75.1483 51.3198C75.2017 51.2664 75.265 51.2242 75.3348 51.1954C75.4045 51.1665 75.4792 51.1518 75.5547 51.1519H90.8707C91.0229 51.1523 91.1688 51.2129 91.2764 51.3205C91.384 51.428 91.4446 51.5738 91.4451 51.7259Z"
              fill="#3F3D56"
            />
            <path
              d="M89.7392 54.6152H76.912V55.1893H89.7392V54.6152Z"
              fill="#1D2C46"
            />
            <path
              d="M89.722 63.0622C87.6657 63.9455 85.4509 64.4011 83.2127 64.4011C80.9745 64.4011 78.7597 63.9455 76.7034 63.0622V59.0179C80.927 57.6001 85.4984 57.6001 89.722 59.0179V63.0622Z"
              fill="#1D2C46"
            />
            <path
              d="M190.384 80.2169L165.402 60.5187C165.203 60.5887 165 60.6484 164.795 60.6975C163.913 60.9037 162.998 60.9221 162.109 60.7516C161.219 60.5811 160.376 60.2255 159.633 59.7079C158.885 59.19 158.257 58.5183 157.79 57.7379C157.323 56.9576 157.028 56.0866 156.925 55.1831C156.733 53.5508 157.174 51.9071 158.156 50.5889C159.138 49.2708 160.587 48.3781 162.207 48.0937C163.826 47.8093 165.493 48.1549 166.866 49.0595C168.239 49.9642 169.213 51.3594 169.59 52.9592C169.654 53.239 169.699 53.5229 169.724 53.8089L194.593 68.1483L200.782 64.587L207.638 73.5579L198.029 80.4032C196.904 81.1979 195.553 81.609 194.175 81.5755C192.798 81.5419 191.469 81.0655 190.384 80.2169Z"
              fill="#FFB8B8"
            />
            <path
              d="M210.686 76.3516L196.432 66.6638L203.131 57.1811C204.021 55.922 205.327 55.0176 206.819 54.6279C208.311 54.2381 209.893 54.3881 211.285 55.0513C212.693 55.7222 213.815 56.8743 214.448 58.2995C215.081 59.7248 215.183 61.3292 214.736 62.823L210.686 76.3516Z"
              fill="#1D2C46"
            />
            <path
              d="M82.4517 57.8132C81.802 57.4726 81.0856 57.2785 80.3527 57.2446C79.6199 57.2107 78.8885 57.3379 78.2102 57.6171C77.5318 57.8962 76.9229 58.3207 76.4265 58.8605C75.93 59.4003 75.558 60.0424 75.3366 60.7415L63.9124 61.7344L62.8229 68.8204L78.9364 67.1917C80.136 67.4856 81.4018 67.3294 82.494 66.7527C83.5861 66.1761 84.4286 65.2191 84.8619 64.063C85.2952 62.907 85.2892 61.6323 84.845 60.4804C84.4008 59.3285 83.5492 58.3795 82.4517 57.8132H82.4517Z"
              fill="#FFB8B8"
            />
            <path
              d="M14.2099 47.4203L10.9785 49.8297C10.9785 49.8297 9.18525 54.1666 12.6993 59.9237C16.2133 65.6809 38.4806 77.8177 38.4806 77.8177L74.5328 68.6158L69.3956 58.5422L43.1258 59.2764C43.1258 59.2764 28.2716 40.7699 14.2099 47.4203Z"
              fill="#E4E4E4"
            />
          </svg>
        </div>
      </Container>
    </section>
  );
}
