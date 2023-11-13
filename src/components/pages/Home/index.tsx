import React from "react";

import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={`container ${styles.root} margin__first__elemnt`}>
      <section className={styles.intro}>
        <div className={styles.intro__desc}>
          <div className={styles.text__wrapper} id={styles.intro__title}>
            <h1>БАГЕТНЫЙ САЛОН</h1>
            <p>
              Безусловно, граница обучения кадров требует определения и
              уточнения вывода текущих активов. В целом, конечно, понимание сути
              ресурсосберегающих технологий создаёт необходимость включения в
              производственный план целого ряда внеочередных мероприятий с
              учётом комплекса своевременного выполнения сверхзадачи.
            </p>
          </div>
        </div>
        <img
          src="img/frame.png"
          className={styles.intro__img}
          width="429x"
          height="535px"
        ></img>
      </section>
      <section className={styles.services__wrapper}>
        <h1>НАШИ УСЛУГИ</h1>
        <div className={styles.services}>
          <div className={styles.service}>
            <div className={styles.service__svg}>
              <svg
                fill="none"
                viewBox="0 0 167 164"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M1.52881 142.436C-0.633821 152.478 3.31671 159.102 12.9551 161.6C15.0217 162.127 17.147 162.387 19.2795 162.374C21.3996 162.362 23.5141 162.157 25.5974 161.764C29.7421 161.01 33.0389 158.76 35.7358 156.569C46.0777 164.446 56.8798 161.725 65.2357 158.342C69.309 160.945 74.0536 162.301 78.8876 162.242C83.6834 162.16 87.9942 160.324 92.0543 156.633C100.455 161.354 108.869 161.518 117.075 157.116C125.515 161.312 132.625 161.382 139.39 157.342C143.818 159.887 147.743 160.643 151.713 159.716C160.07 157.769 165.89 148.217 164.167 139.273C163.31 134.949 161.339 130.924 158.449 127.595C164.019 124.379 166.672 119.994 166.557 114.218C166.447 108.705 164.244 104.033 159.825 99.9551L160.045 99.7253C160.468 99.2836 160.829 98.9062 161.184 98.5242C166.596 92.7045 166.735 85.0929 161.538 79.1314C161.21 78.7514 160.869 78.3779 160.515 77.9881L160.422 77.8857C163.225 75.0234 165.743 71.6925 165.923 66.9655C166.098 62.3713 164.318 58.7872 160.487 56.022C163.857 52.1372 165.35 48.4801 165.308 44.25C165.327 42.1052 164.887 39.9809 164.02 38.0195C163.151 36.0582 161.874 34.3051 160.273 32.8775C166.841 24.5866 166.529 15.4925 159.365 7.20756C151.991 -1.32024 139.867 -1.85315 129.744 5.84569C122.299 1.23492 114.829 1.27886 107.528 5.97693C104.463 3.54454 100.889 3.00958 97.773 2.81333C92.8315 2.50091 88.5843 3.88904 85.1477 6.93708C76.2418 0.741246 69.1226 0.671042 60.0316 6.6831C52.464 0.501706 43.8955 0.376992 36.3679 6.32801C32.3978 2.10513 27.8781 0.333062 22.5723 0.92508C16.3122 1.61817 11.5295 3.70524 7.95049 7.30726C4.63661 10.6428 2.76862 15.2352 2.54809 20.5889C2.31509 26.2551 2.49761 31.6718 7.06835 35.6506C3.55953 39.1965 1.49593 43.9213 1.2794 48.9052C0.974861 54.2386 3.8234 58.0015 7.38009 61.9435C4.54352 65.7289 2.82274 70.2328 2.41229 74.9446C1.94038 80.4664 4.8322 84.2811 8.1487 87.5463C2.93276 95.0096 2.8284 102.446 7.8376 109.66C2.19832 117.668 2.03483 123.725 7.25535 131.664C4.37074 134.276 2.54548 137.718 1.52881 142.436ZM12.9918 31.802C8.73212 26.6353 10.2548 21.2046 12.5323 16.1048C14.3156 12.1143 17.8697 10.3198 24.0556 10.2864H24.082C25.5541 10.408 26.992 10.7949 28.3264 11.4284C28.7373 11.5912 29.1449 11.7526 29.5498 11.901C30.0234 12.0996 30.4738 12.3496 30.8927 12.6466C31.3888 12.9957 31.9222 13.2888 32.483 13.5202C36.7827 15.1269 37.1634 15.1899 39.4718 12.7326C39.6772 12.5141 39.9036 12.2731 40.1569 12.0106C43.9985 8.02792 50.2756 7.97803 54.7591 11.8924C55.7797 12.7837 56.8312 13.6292 57.9437 14.5238C58.4727 14.9497 59.0149 15.3855 59.5747 15.843C59.7081 15.9514 59.8776 16.0049 60.049 15.9926C60.2204 15.9804 60.3809 15.9034 60.4976 15.7773C69.3923 6.12912 78.1984 9.72586 86.3901 15.0514C86.4676 15.1024 86.5555 15.1366 86.6474 15.152C86.7393 15.1674 86.8332 15.1635 86.9231 15.1406C87.0137 15.1178 87.0977 15.0765 87.1712 15.0194C87.2447 14.9622 87.3051 14.8905 87.3497 14.8087C89.3614 11.1063 92.6831 9.61356 98.1196 9.99424C99.2216 10.0963 100.315 10.2717 101.394 10.5194C101.933 10.6296 102.472 10.7392 103.013 10.8331C103.563 10.8611 104.095 11.0465 104.544 11.367C104.993 11.6876 105.341 12.13 105.546 12.642C106.263 14.2133 107.157 14.6216 107.782 14.6878C108.385 14.7463 109.307 14.5565 110.266 13.2668C112.141 10.7445 114.819 9.61566 118.95 9.60647H118.99C120.789 9.65235 122.583 9.82773 124.357 10.1314C125.002 10.2253 125.648 10.3192 126.297 10.4025C126.305 10.5857 126.312 10.761 126.318 10.9277C126.32 11.586 126.384 12.2427 126.507 12.8895C126.57 13.3273 126.74 13.7425 127.004 14.0977C127.268 14.4529 127.615 14.7368 128.016 14.924C128.445 15.0623 128.902 15.0922 129.345 15.0109C129.789 14.9296 130.205 14.7396 130.557 14.4581C130.992 14.1443 131.397 13.7913 131.767 13.4033C131.964 13.2064 132.161 13.0095 132.369 12.831C134.916 10.6069 138.024 9.12157 141.355 8.53526C142.939 8.23808 144.567 8.26932 146.14 8.62709C147.712 8.98486 149.193 9.66154 150.493 10.6152C151.891 11.6497 153.066 12.9564 153.945 14.4566C154.825 15.9567 155.392 17.6194 155.613 19.3445C156.251 24.166 153.752 27.7127 150.957 30.8264C149.603 32.336 149.093 33.5616 149.35 34.6891C149.598 35.7806 150.571 36.6627 152.325 37.3866C155.004 38.4945 156.776 40.2632 157.313 42.3688C157.855 44.4979 157.129 46.9358 155.268 49.2356C154.549 50.1681 153.714 51.0047 152.783 51.7251C150.146 53.6718 149.586 55.991 151.071 58.8191C151.15 58.9737 151.287 59.0913 151.452 59.1473C151.809 59.2681 152.182 59.3818 152.562 59.4973C153.392 59.7276 154.203 60.0185 154.991 60.3671C156.904 61.2741 158.165 62.5848 158.637 64.1567C159.116 65.7543 158.772 67.5805 157.642 69.4399C156.121 72.108 153.748 74.1885 150.904 75.347C150.787 75.3936 150.687 75.471 150.613 75.5714C150.539 75.6719 150.493 75.7907 150.483 75.9154L150.115 80.198C150.104 80.3227 150.128 80.448 150.184 80.5596C150.241 80.6712 150.327 80.7651 150.434 80.8307C150.592 80.9272 150.732 81.0276 150.863 81.1201C151.162 81.3617 151.504 81.5441 151.871 81.659C153.034 81.9031 154.119 82.4295 155.03 83.1915C155.942 83.9542 156.651 84.9295 157.097 86.0315C157.465 87.1296 157.558 88.3024 157.366 89.4451C157.174 90.5878 156.704 91.6662 155.997 92.5837C155.688 93.0202 155.372 93.4514 155.055 93.8826C153.432 96.0951 151.754 98.3825 150.926 101.519C150.892 101.648 150.896 101.784 150.94 101.909C150.982 102.035 151.061 102.145 151.167 102.226C151.395 102.402 151.626 102.59 151.868 102.783C152.432 103.235 153.013 103.701 153.653 104.123C156.946 106.294 158.75 109.566 158.603 113.103C158.456 116.64 156.389 119.744 152.931 121.632C152.304 121.974 151.664 122.292 151.024 122.611C150.271 122.985 149.493 123.372 148.741 123.796C147.443 124.529 146.728 125.521 146.727 126.591C146.727 127.635 147.416 128.602 148.667 129.31C152.56 131.512 154.655 135.17 155.26 140.82C155.437 142.112 155.311 143.428 154.891 144.663C154.472 145.897 153.77 147.017 152.842 147.934C151.839 148.858 150.636 149.54 149.328 149.926C148.019 150.313 146.639 150.393 145.294 150.162C143.862 149.954 142.407 149.821 140.993 149.694C140.188 149.62 139.383 149.547 138.579 149.46C136.151 149.197 135.873 151.059 135.692 152.289V152.296C131.838 153.538 127.714 153.685 123.782 152.719C121.901 152.246 120.276 151.837 119.399 150C119.242 149.631 119 149.306 118.692 149.052C118.383 148.798 118.018 148.622 117.627 148.538C117.187 148.477 116.739 148.522 116.319 148.668C115.9 148.814 115.52 149.056 115.213 149.377C112.654 151.8 109.323 152.311 106.707 152.484C104.066 152.586 101.421 152.452 98.8041 152.081C97.9496 152.016 97.1239 151.744 96.3986 151.287C95.674 150.83 95.0715 150.203 94.6449 149.46C94.1783 148.789 93.579 148.22 92.8833 147.79C92.626 147.606 92.37 147.423 92.1384 147.228C92.0077 147.118 91.8404 147.062 91.6697 147.07C91.4991 147.079 91.3376 147.152 91.2195 147.275C85.0282 153.679 78.8199 155.418 71.6816 152.742C70.2987 152.192 69.0116 151.424 67.8709 150.468C66.1216 149.053 64.9246 148.587 63.8672 148.914C62.8098 149.241 62.0714 150.307 61.417 152.474C61.3779 152.565 61.331 152.653 61.2766 152.736L61.2207 152.83C56.6454 154.077 51.761 155.186 46.6738 154.243C42.7567 153.521 39.1514 152.499 38.0757 148.059C37.914 147.619 37.5872 147.259 37.1647 147.056C37.0049 146.955 36.8504 146.845 36.702 146.728C36.5816 146.63 36.4312 146.576 36.276 146.576C36.1684 146.576 36.0623 146.602 35.9669 146.652C35.2641 147.014 34.5599 147.375 33.8541 147.733C32.3012 148.525 30.6958 149.344 29.1324 150.185C24.5136 152.752 19.0834 153.439 13.971 152.104C10.4452 151.22 9.2585 149.675 9.27097 145.993C9.31757 144.567 9.4791 143.147 9.75404 141.747L9.86109 141.104C10.4295 137.646 12.3335 135.501 15.6828 134.546C16.003 134.444 16.3123 134.31 16.6062 134.147L16.7053 134.096C16.8735 134.001 17.0158 133.865 17.1195 133.702C17.172 133.632 17.2422 133.539 17.3459 133.412C17.4408 133.295 17.494 133.15 17.4972 133C17.5005 132.849 17.4534 132.702 17.3636 132.581C16.9928 132.085 16.5964 131.592 16.1966 131.095C15.2721 130.015 14.4484 128.853 13.736 127.622C12.8172 125.903 11.8577 123.881 11.7382 121.921C11.6689 119.792 12.0857 117.674 12.957 115.729C13.5727 114.486 14.3613 113.337 15.2994 112.316C15.7116 111.818 16.1382 111.304 16.5294 110.776C16.613 110.664 16.6595 110.529 16.6626 110.389C16.6656 110.249 16.625 110.112 16.5465 109.996C10.476 101.043 10.7445 92.9966 17.2842 87.9145C17.411 87.8154 17.4984 87.675 17.5307 87.5174C17.5629 87.3599 17.5379 87.1959 17.4602 87.0547C17.3611 86.8756 17.2632 86.6892 17.1674 86.5001C16.9367 86.0295 16.6747 85.574 16.383 85.1382C15.8685 84.4018 15.3329 83.6798 14.7947 82.9572C13.8811 81.7266 12.9366 80.4533 12.1326 79.1419C10.0947 75.8156 10.8364 68.3878 13.4782 65.671C14.0301 65.2082 14.6617 64.8497 15.3421 64.6134C15.7635 64.4303 16.2406 64.2236 16.7303 63.9702C16.8156 63.9262 16.8906 63.8645 16.9502 63.7891C17.0097 63.7138 17.0525 63.6266 17.0757 63.5334C17.0988 63.4402 17.1017 63.343 17.0842 63.2485C17.0668 63.1541 17.0293 63.0645 16.9744 62.9857C16.4093 62.1692 15.8645 61.3666 15.329 60.5764C14.1712 58.8699 13.0777 57.2586 11.8957 55.6788C7.29543 49.5296 7.55005 44.0399 12.6971 38.4006C13.5743 37.5441 14.093 36.386 14.1477 35.1612C14.2024 33.9363 13.7891 32.7365 12.9918 31.8051V31.802Z"
                    fill="black"
                  />
                  <path
                    d="M27.7581 130.806C28.3665 132.986 30.0283 134.201 32.439 134.228C33.498 134.241 34.5564 134.257 35.6144 134.276C37.5027 134.308 39.4356 134.341 41.3679 134.341C42.2124 134.341 43.0558 134.334 43.898 134.32C52.8899 134.159 62.0241 133.959 70.8602 133.766L81.2894 133.539C81.4075 133.537 81.5224 133.504 81.6235 133.443C81.7239 133.382 81.8073 133.296 81.8644 133.193C84.0959 133.193 86.3294 133.199 88.5649 133.209C94.0191 133.227 99.657 133.245 105.204 133.17C114.903 133.038 122.828 132.811 130.145 132.458C131.05 132.415 134.156 132.137 136.104 130.403C137.648 129.058 138.869 127.383 139.68 125.504C140.49 123.624 140.867 121.585 140.784 119.54C140.703 113.935 140.738 108.231 140.772 102.715C140.8 98.0773 140.83 93.2814 140.79 88.5623C140.74 82.5897 140.524 76.1917 140.126 69.0087C139.885 64.6515 139.839 60.2033 139.798 55.903C139.715 47.83 139.629 39.4808 138.255 31.3009C137.624 27.5492 136.947 26.583 133.056 26.417C132.553 26.396 132.053 26.4071 131.57 26.417C131.271 26.4242 130.971 26.4347 130.672 26.4301C127.285 26.4192 123.899 26.4056 120.513 26.3894C113.571 26.3586 106.397 26.3239 99.3315 26.333C79.1616 26.3481 58.1137 26.3914 34.9811 26.4642C31.5681 26.4754 29.4415 28.214 28.6546 31.6322C28.3233 33.0947 28.1273 34.5847 28.0692 36.0831C27.9816 38.1427 27.8942 40.2024 27.8066 42.2625C27.4994 49.2853 27.1825 56.5462 27.0427 63.6964C26.7998 76.1418 26.746 88.7953 26.6935 101.098C26.6607 108.873 26.7132 116.808 26.8556 125.357C26.921 127.204 27.2244 129.036 27.7581 130.806ZM131.088 79.9472C131.163 94.2022 131.239 108.936 130.425 123.495L36.5582 126.914L35.833 33.5888L131.606 34.9172C131.621 34.988 131.635 35.057 131.65 35.1239C131.732 35.4308 131.776 35.7468 131.781 36.0645C130.936 50.6785 131.014 65.5579 131.088 79.9472Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      fill="white"
                      height="162.772"
                      transform="translate(0.896484 0.23584)"
                      width="166.053"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.text__wrapper}>
              <h1>Оформление в багет</h1>
            </div>
          </div>
          <div className={styles.service}>
            <div className={styles.service__svg}>
              <svg
                enable-background="new 0 0 48 48"
                version="1.1"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Expanded">
                  <g>
                    <g>
                      <path d="M14.707,12.707l-1.414-1.414l11-11C24.48,0.105,24.735,0,25,0c0.001,0,0.002,0,0.003,0     c0.266,0.001,0.521,0.107,0.708,0.297l10.875,11l-1.422,1.406L24.996,2.418L14.707,12.707z" />
                    </g>
                    <g>
                      <path d="M48,48H0V11h48V48z M2,46h44V13H2V46z" />
                    </g>
                    <g>
                      <path d="M44,44H4V15h40V44z M6,42h36V17H6V42z" />
                    </g>
                    <g>
                      <path d="M27.232,43.64c-0.335-0.402-6.723-8.15-9.232-17c-2.509,8.851-8.896,16.598-9.232,17l-1.537-1.28     C7.329,42.243,17,30.503,17,20c0-0.552,0.448-1,1-1s1,0.448,1,1c0,10.516,9.67,22.243,9.768,22.36L27.232,43.64z" />
                    </g>
                    <g>
                      <rect height="2" width="10" x="13" y="35" />
                    </g>
                    <g>
                      <path d="M38,43h-2v-6h-2v6h-2v-7c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V43z" />
                    </g>
                    <g>
                      <path d="M38,36h-2v-6c0-0.552,0.448-1,1-1h6v2h-5V36z" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className={styles.text__wrapper}>
              <h1>Продажа рамок</h1>
            </div>
          </div>
          <div className={styles.service}>
            <div className={styles.service__svg}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M5,5 L19,5 L19,19 L5,19 L5,5 Z M7,7 L7,17 L17,17 L17,7 L7,7 Z"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <div className={styles.text__wrapper}>
              <h1>Продажа подрамника, натяжка холста</h1>
            </div>
          </div>
          <div className={styles.service}>
            <div className={styles.service__svg}>
              <svg
                className="feather feather-printer"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect height="8" width="12" x="6" y="14" />
              </svg>
            </div>
            <div className={styles.text__wrapper}>
              <h1>Печать на холсте и фотобумаге</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.frame__molding}>
        <div className={styles.text__wrapper}>
          <h1>БОЛЬШОЙ АССОРТИМЕНТ БАГЕТА</h1>
          <p>
            В целом, конечно, постоянный количественный рост и сфера нашей
            активности обеспечивает актуальность поставленных обществом задач!
            Также как дальнейшее развитие различных форм деятельности однозначно
            фиксирует необходимость глубокомысленных рассуждений. Банальные, но
            неопровержимые выводы, а также сторонники тоталитаризма в науке,
            инициированные исключительно синтетически, описаны максимально
            подробно.
          </p>
        </div>
      </section>
      <section className={styles.frames}>
        <div className={styles.text__wrapper}>
          <h1>ФОТОРАМКИ СОБСТВЕННОГО ПРОИЗВОДСТВА</h1>
        </div>
      </section>
      <section className={styles.underframe}>
        <div className={styles.text__wrapper}>
          <h1>ИЗГОТОВЛЕНИЕ ПОДРАМНИКА ВЫСОКОГО КАЧЕСТВА</h1>
        </div>
      </section>
      <section className={styles.canvas}>
        <div className={styles.text__wrapper}>
          <h1>ПЕЧАТЬ НА ХОЛСТЕ</h1>
        </div>
      </section>
      <section className={styles.map}>
        <div className={styles.text__wrapper}>
          <h1>КОНТАКТЫ</h1>
        </div>
        <div className={styles.map__wrapper}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=34.310321%2C61.769221&mode=poi&poi%5Bpoint%5D=34.309899%2C61.769315&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D196087724653&z=18"
            width="100%"
            height="400"
          ></iframe>
          <div className={styles.contacts}>
            <div className="contact">
              <h2>Адрес</h2>
              <p>г. Петрозаводск, ул. Древлянка, д. 16, 2 этаж</p>
            </div>
            <div className="contact">
              <h2>Номер телефона</h2>
              <p>+79217267094</p>
            </div>
            <div className="contact">
              <h2>Почта</h2>
              <p> fotoramki.karelia@sampo.ru</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
