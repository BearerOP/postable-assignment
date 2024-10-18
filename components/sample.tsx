import Image from "next/image";

export default function Sample() {
  return (
   <>
   <div role="button" aria-label="Try sample tweet" className="group mx-auto -mb-24 mt-6 hidden w-fit origin-top scale-[0.6] flex-col items-center justify-center gap-4 rounded-[42px] bg-transparent px-4 py-6 transition-colors hover:bg-[#e9d5ff] sm:flex md:-mb-48">
<svg className="w-56" viewBox="0 0 137 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.24303 18.272C1.95503 18.288 1.71503 18.152 1.52303 17.864C1.33103 17.576 1.24303 17.336 1.25903 17.144C1.27503 16.888 1.34703 16.52 1.47503 16.04C1.60303 15.56 1.74703 15.072 1.90703 14.576C2.06703 14.08 2.21103 13.688 2.33903 13.4C2.40303 13.144 2.45903 12.92 2.50703 12.728C2.57103 12.52 2.61103 12.384 2.62703 12.32C2.67503 12.256 2.74703 12.088 2.84303 11.816C2.95503 11.544 3.04303 11.28 3.10703 11.024C3.13903 10.896 3.20303 10.656 3.29903 10.304C3.41103 9.936 3.53903 9.512 3.68303 9.032C3.84303 8.552 3.99503 8.08 4.13903 7.616C4.29903 7.152 4.43503 6.744 4.54703 6.392C4.65903 6.04 4.73103 5.808 4.76303 5.696C4.89103 5.504 4.98703 5.32 5.05103 5.144C5.11503 4.968 5.15503 4.848 5.17103 4.784C5.26703 4.72 5.32303 4.64 5.33903 4.544C5.35503 4.432 5.36303 4.344 5.36303 4.28C5.36303 4.2 5.38703 4.136 5.43503 4.088C5.49903 4.04 5.53103 3.984 5.53103 3.92C5.59503 3.872 5.63503 3.864 5.65103 3.896C5.66703 3.928 5.71503 3.904 5.79503 3.824L5.91503 3.008L8.05103 2.984C8.01903 3.176 7.97103 3.416 7.90703 3.704C7.84303 3.976 7.69103 4.344 7.45103 4.808C7.37103 5.128 7.27503 5.416 7.16303 5.672C7.06703 5.928 7.02703 6.096 7.04303 6.176C7.01103 6.208 6.93903 6.368 6.82703 6.656C6.73103 6.944 6.61103 7.296 6.46703 7.712C6.33903 8.128 6.20303 8.544 6.05903 8.96C5.93103 9.376 5.81103 9.744 5.69903 10.064C5.60303 10.368 5.53903 10.56 5.50703 10.64C5.37903 10.896 5.23503 11.272 5.07503 11.768C4.91503 12.264 4.67503 12.936 4.35503 13.784C4.22703 14.04 4.06703 14.424 3.87503 14.936C3.69903 15.448 3.55503 15.912 3.44303 16.328C3.26703 16.952 3.10703 17.4 2.96303 17.672C2.83503 17.944 2.71503 18.104 2.60303 18.152C2.49103 18.216 2.37103 18.256 2.24303 18.272ZM2.45903 4.16C1.80303 4.224 1.35503 4.144 1.11503 3.92C0.891027 3.696 0.811027 3.456 0.875028 3.2C0.923027 3.008 1.03503 2.848 1.21103 2.72C1.40303 2.576 1.74703 2.456 2.24303 2.36C2.41903 2.328 2.64303 2.288 2.91503 2.24C3.20303 2.192 3.47503 2.144 3.73103 2.096C4.25903 2.032 4.69103 1.976 5.02703 1.928C5.37903 1.88 5.73903 1.84 6.10703 1.808C6.47503 1.776 6.93903 1.744 7.49903 1.712C7.96303 1.68 8.35503 1.656 8.67503 1.64C9.01103 1.608 9.17903 1.592 9.17903 1.592C9.22703 1.592 9.39503 1.608 9.68303 1.64C9.97103 1.672 10.283 1.712 10.619 1.76C10.955 1.808 11.203 1.864 11.363 1.928C11.731 2.008 12.027 2.152 12.251 2.36C12.475 2.568 12.619 2.808 12.683 3.08C12.731 3.272 12.731 3.424 12.683 3.536C12.635 3.632 12.547 3.712 12.419 3.776C12.051 3.888 11.747 3.984 11.507 4.064C11.283 4.128 11.059 4.12 10.835 4.04C10.755 3.96 10.659 3.888 10.547 3.824C10.451 3.76 10.275 3.712 10.019 3.68C9.77903 3.632 9.39503 3.592 8.86703 3.56C8.41903 3.608 8.02703 3.632 7.69103 3.632C7.35503 3.632 7.18703 3.672 7.18703 3.752L5.77103 3.824L4.59503 3.944C4.43503 3.96 4.21103 3.984 3.92303 4.016C3.63503 4.032 3.35503 4.056 3.08303 4.088C2.81103 4.104 2.60303 4.128 2.45903 4.16ZM8.59334 16.352C8.44934 16.24 8.28934 16.096 8.11334 15.92C7.95334 15.744 7.89734 15.496 7.94534 15.176C7.99334 14.728 8.05734 14.336 8.13734 14C8.21734 13.648 8.31334 13.248 8.42534 12.8C8.45734 12.608 8.53734 12.28 8.66534 11.816C8.80934 11.352 8.97734 10.848 9.16934 10.304C9.36134 9.76 9.56134 9.248 9.76934 8.768C9.97734 8.272 10.1613 7.904 10.3213 7.664C10.4973 7.504 10.7533 7.424 11.0893 7.424C11.4413 7.424 11.6813 7.488 11.8093 7.616C11.9853 7.76 12.0413 8.016 11.9773 8.384C11.9133 8.736 11.6893 9.288 11.3053 10.04C11.2253 10.232 11.1213 10.44 10.9933 10.664C10.8813 10.872 10.8013 11.048 10.7533 11.192C10.7053 11.32 10.7213 11.376 10.8013 11.36C10.8973 11.184 11.0733 10.984 11.3293 10.76C11.5853 10.52 11.8573 10.288 12.1453 10.064C12.4333 9.84 12.7053 9.64 12.9613 9.464C13.2173 9.288 13.3933 9.176 13.4893 9.128C13.6173 9.048 13.7613 8.984 13.9213 8.936C14.0973 8.872 14.2173 8.824 14.2813 8.792C14.6493 8.616 15.0493 8.552 15.4813 8.6C15.9293 8.632 16.2013 8.768 16.2973 9.008C16.3133 9.136 16.3613 9.232 16.4413 9.296C16.5373 9.36 16.5853 9.392 16.5853 9.392C16.6493 9.392 16.6813 9.416 16.6813 9.464C16.6973 9.512 16.7053 9.536 16.7053 9.536C16.7053 9.648 16.5933 9.808 16.3693 10.016C16.1613 10.224 15.9293 10.336 15.6733 10.352C15.4653 10.368 15.2813 10.408 15.1213 10.472C14.9613 10.536 14.7693 10.616 14.5453 10.712C13.9373 11.064 13.3853 11.376 12.8893 11.648C12.4093 11.92 11.9133 12.336 11.4013 12.896C11.2893 13.024 11.1693 13.144 11.0413 13.256C10.9133 13.368 10.7853 13.528 10.6573 13.736C10.5773 13.816 10.4973 13.992 10.4173 14.264C10.3373 14.536 10.2653 14.8 10.2013 15.056C10.1533 15.296 10.1293 15.44 10.1293 15.488C10.1293 15.488 10.1053 15.568 10.0573 15.728C10.0093 15.872 9.92934 16.016 9.81734 16.16C9.62534 16.416 9.43334 16.576 9.24134 16.64C9.06534 16.704 8.84934 16.608 8.59334 16.352ZM15.8178 23.168C15.4658 23.232 15.2258 23.24 15.0978 23.192C14.9698 23.144 14.7938 23.064 14.5698 22.952C14.3938 22.824 14.2658 22.728 14.1858 22.664C14.1058 22.6 14.0498 22.536 14.0178 22.472C13.8578 22.136 13.8338 21.888 13.9458 21.728C14.0578 21.568 14.2178 21.464 14.4258 21.416C14.6498 21.384 14.8418 21.368 15.0018 21.368C15.1138 21.432 15.2978 21.464 15.5538 21.464C15.8258 21.464 15.9938 21.432 16.0578 21.368C16.0578 21.368 16.1298 21.32 16.2738 21.224C16.4338 21.144 16.6418 21.08 16.8978 21.032C17.3938 20.792 17.7858 20.544 18.0738 20.288C18.3618 20.048 18.6818 19.632 19.0338 19.04C19.1778 18.816 19.3298 18.552 19.4898 18.248C19.6498 17.96 19.7618 17.672 19.8258 17.384C19.9538 17.064 20.0978 16.632 20.2578 16.088C20.4338 15.544 20.5858 15.008 20.7138 14.48C20.8418 13.936 20.9138 13.528 20.9298 13.256C21.0258 12.36 21.2098 11.496 21.4818 10.664C21.7538 9.816 21.9698 8.92 22.1298 7.976C22.2258 7.752 22.2978 7.624 22.3458 7.592C22.3938 7.544 22.4978 7.52 22.6578 7.52C22.8338 7.52 23.0418 7.576 23.2818 7.688C23.5218 7.784 23.6978 7.92 23.8098 8.096C23.9698 8.4 24.0418 8.76 24.0258 9.176C24.0258 9.576 23.9218 9.928 23.7138 10.232C23.5538 10.456 23.4098 10.808 23.2818 11.288C23.1698 11.752 23.0578 12.336 22.9458 13.04C22.8658 13.392 22.7778 13.808 22.6818 14.288C22.6018 14.752 22.5138 15.272 22.4178 15.848C22.3538 16.008 22.2658 16.256 22.1538 16.592C22.0418 16.912 21.9698 17.168 21.9378 17.36C21.9218 17.424 21.8738 17.552 21.7938 17.744C21.7138 17.936 21.6338 18.12 21.5538 18.296C21.4738 18.488 21.4178 18.616 21.3858 18.68C20.6178 20.232 19.7298 21.352 18.7218 22.04C17.7298 22.728 16.7618 23.104 15.8178 23.168ZM17.8338 16.376C17.6578 16.376 17.4738 16.28 17.2818 16.088C17.1058 15.896 16.9858 15.744 16.9218 15.632C16.8578 15.472 16.7378 15.32 16.5618 15.176C16.3858 15.032 16.2338 14.856 16.1058 14.648C15.9778 14.44 15.9458 14.184 16.0098 13.88C16.0738 13.672 16.1698 13.36 16.2978 12.944C16.4258 12.512 16.5778 12.04 16.7538 11.528C16.9298 11 17.1058 10.48 17.2818 9.968C17.4738 9.456 17.6498 9 17.8098 8.6C17.9698 8.2 18.1058 7.92 18.2178 7.76C18.3138 7.632 18.4658 7.536 18.6738 7.472C18.8818 7.408 19.0898 7.392 19.2978 7.424C19.5058 7.456 19.6578 7.552 19.7538 7.712C19.9298 7.936 20.0258 8.16 20.0418 8.384C20.0738 8.592 19.9618 8.928 19.7058 9.392C19.6418 9.568 19.5618 9.76 19.4658 9.968C19.3698 10.16 19.3218 10.288 19.3218 10.352C19.3058 10.384 19.2738 10.496 19.2258 10.688C19.1938 10.864 19.1538 11.032 19.1058 11.192C19.0578 11.352 19.0098 11.432 18.9618 11.432C18.8978 11.496 18.8258 11.664 18.7458 11.936C18.6818 12.208 18.6178 12.512 18.5538 12.848C18.5058 13.168 18.4738 13.456 18.4578 13.712C18.4418 13.952 18.4658 14.072 18.5298 14.072C19.0258 14.072 19.5058 13.92 19.9698 13.616C20.4338 13.296 20.9378 12.768 21.4818 12.032L21.6978 14.288C21.4738 14.4 21.2658 14.52 21.0738 14.648C20.8818 14.76 20.7058 14.896 20.5458 15.056C20.4978 15.12 20.3858 15.208 20.2098 15.32C20.0338 15.432 19.8578 15.536 19.6818 15.632C19.5218 15.712 19.4178 15.752 19.3698 15.752C19.3698 15.752 19.3458 15.76 19.2978 15.776C19.2658 15.776 19.2498 15.808 19.2498 15.872C19.2498 15.904 19.1458 15.968 18.9378 16.064C18.7298 16.144 18.5138 16.216 18.2898 16.28C18.0658 16.344 17.9138 16.376 17.8338 16.376ZM30.562 18.224C30.418 18.16 30.25 18.032 30.058 17.84C29.738 17.568 29.522 17.224 29.41 16.808C29.314 16.376 29.306 15.96 29.386 15.56C29.578 15.08 29.786 14.752 30.01 14.576C30.25 14.384 30.498 14.304 30.754 14.336C31.026 14.352 31.282 14.448 31.522 14.624C31.41 14.96 31.322 15.264 31.258 15.536C31.194 15.808 31.218 16.04 31.33 16.232C31.442 16.424 31.706 16.576 32.122 16.688C32.442 16.72 32.714 16.736 32.938 16.736C33.178 16.72 33.458 16.704 33.778 16.688C34.146 16.656 34.434 16.616 34.642 16.568C34.866 16.52 35.066 16.472 35.242 16.424C35.69 16.296 36.074 16.12 36.394 15.896C36.714 15.656 36.978 15.384 37.186 15.08C37.314 14.856 37.402 14.656 37.45 14.48C37.498 14.288 37.522 14.088 37.522 13.88C37.522 13.64 37.498 13.432 37.45 13.256C37.402 13.064 37.314 12.84 37.186 12.584C37.074 12.312 36.89 11.936 36.634 11.456C36.618 11.344 36.49 11.152 36.25 10.88C36.026 10.608 35.802 10.344 35.578 10.088C35.466 9.832 35.322 9.544 35.146 9.224C34.97 8.888 34.77 8.648 34.546 8.504C34.482 8.408 34.41 8.256 34.33 8.048C34.266 7.84 34.21 7.728 34.162 7.712C34.162 7.712 34.138 7.672 34.09 7.592C34.058 7.512 34.018 7.416 33.97 7.304C33.762 6.84 33.754 6.264 33.946 5.576C34.138 4.872 34.49 4.216 35.002 3.608C35.178 3.32 35.402 3.032 35.674 2.744C35.946 2.44 36.194 2.192 36.418 2C36.658 1.792 36.81 1.688 36.874 1.688C36.874 1.688 36.922 1.672 37.018 1.64C37.13 1.592 37.266 1.512 37.426 1.4C37.602 1.288 37.77 1.2 37.93 1.136C38.09 1.056 38.322 0.984 38.626 0.92L38.77 0.896L38.866 0.871999C39.138 0.791999 39.362 0.735999 39.538 0.704C39.714 0.655999 39.882 0.631999 40.042 0.631999C40.202 0.631999 40.394 0.639999 40.618 0.655999C41.338 0.847999 41.89 1.112 42.274 1.448C42.674 1.768 42.89 2.352 42.922 3.2L42.73 3.872L42.322 4.328C42.274 4.312 42.146 4.36 41.938 4.472C41.746 4.584 41.474 4.672 41.122 4.736C40.786 4.784 40.354 4.704 39.826 4.496C39.762 4.48 39.738 4.44 39.754 4.376C39.77 4.296 39.834 4.248 39.946 4.232C39.994 4.2 40.066 4.128 40.162 4.016C40.274 3.904 40.378 3.776 40.474 3.632C40.682 3.344 40.73 3.128 40.618 2.984C40.522 2.824 40.33 2.744 40.042 2.744C39.498 2.76 38.978 2.864 38.482 3.056C37.986 3.232 37.53 3.552 37.114 4.016C36.778 4.448 36.53 4.832 36.37 5.168C36.21 5.488 36.13 5.784 36.13 6.056C36.162 6.168 36.178 6.336 36.178 6.56C36.194 6.768 36.258 6.984 36.37 7.208C36.898 7.944 37.306 8.512 37.594 8.912C37.898 9.312 38.106 9.6 38.218 9.776C38.25 9.824 38.274 9.864 38.29 9.896C38.306 9.928 38.314 9.96 38.314 9.992C38.378 10.104 38.466 10.264 38.578 10.472C38.69 10.68 38.794 10.88 38.89 11.072C38.986 11.264 39.034 11.392 39.034 11.456C39.034 11.456 39.058 11.504 39.106 11.6C39.154 11.68 39.21 11.8 39.274 11.96C39.354 12.104 39.426 12.312 39.49 12.584C39.57 12.84 39.634 13.12 39.682 13.424C39.73 13.712 39.754 13.976 39.754 14.216C39.754 14.408 39.706 14.656 39.61 14.96C39.514 15.248 39.386 15.544 39.226 15.848C39.082 16.136 38.898 16.376 38.674 16.568C38.45 16.76 38.122 16.992 37.69 17.264C37.258 17.536 36.786 17.784 36.274 18.008C35.762 18.232 35.266 18.384 34.786 18.464C34.306 18.544 33.85 18.608 33.418 18.656C33.002 18.704 32.61 18.72 32.242 18.704C31.89 18.704 31.57 18.664 31.282 18.584C30.994 18.504 30.754 18.384 30.562 18.224ZM42.4368 16.496C42.3728 16.368 42.2288 16.24 42.0048 16.112C41.7968 15.984 41.6928 15.888 41.6928 15.824C41.6928 15.76 41.6528 15.664 41.5728 15.536C41.5088 15.392 41.4448 15.288 41.3808 15.224C41.3008 15.128 41.3248 14.896 41.4528 14.528C41.5808 14.144 41.7728 13.68 42.0288 13.136C42.2848 12.592 42.5648 12.04 42.8688 11.48C42.9968 11.352 43.1248 11.184 43.2528 10.976C43.3808 10.768 43.4768 10.632 43.5408 10.568C43.5408 10.504 43.5648 10.448 43.6128 10.4C43.6608 10.336 43.7168 10.304 43.7808 10.304L43.9728 9.92C44.0048 9.856 44.1008 9.728 44.2608 9.536C44.4368 9.344 44.6448 9.136 44.8848 8.912C45.1248 8.672 45.3648 8.448 45.6048 8.24C45.8608 8.032 46.0688 7.88 46.2288 7.784C46.5648 7.56 46.9088 7.456 47.2608 7.472C47.6288 7.488 47.9408 7.6 48.1968 7.808C48.2448 7.856 48.3488 7.952 48.5088 8.096C48.6848 8.24 48.8768 8.4 49.0848 8.576C49.3088 8.752 49.5008 8.912 49.6608 9.056L50.5488 9.848L50.1408 11.048C49.9328 11.688 49.8768 12.248 49.9728 12.728C50.0688 13.208 50.2208 13.624 50.4288 13.976C50.5088 14.152 50.6128 14.288 50.7408 14.384C50.8848 14.48 51.0688 14.544 51.2928 14.576C51.4208 14.592 51.5408 14.64 51.6528 14.72C51.7648 14.8 51.8208 14.928 51.8208 15.104C51.8208 15.488 51.7488 15.768 51.6048 15.944C51.4768 16.104 51.3328 16.2 51.1728 16.232C50.6448 16.296 50.1408 16.24 49.6608 16.064C49.1808 15.888 48.7488 15.432 48.3648 14.696C48.3008 14.6 48.2128 14.424 48.1008 14.168C48.0048 13.896 47.9488 13.72 47.9328 13.64C47.8688 13.72 47.7808 13.824 47.6688 13.952C47.5728 14.064 47.4768 14.168 47.3808 14.264C46.2448 15.416 45.2688 16.168 44.4528 16.52C43.6528 16.856 42.9808 16.848 42.4368 16.496ZM43.7568 14.504C43.8688 14.52 44.0448 14.464 44.2848 14.336C44.5248 14.192 44.8448 13.96 45.2448 13.64C45.7888 13.176 46.2368 12.792 46.5888 12.488C46.9408 12.184 47.2848 11.792 47.6208 11.312L48.1488 10.448C47.9888 10.08 47.8448 9.84 47.7168 9.728C47.5888 9.616 47.4608 9.56 47.3328 9.56C47.1248 9.56 46.8768 9.696 46.5888 9.968C46.3008 10.224 45.9728 10.608 45.6048 11.12C45.2528 11.616 44.8528 12.24 44.4048 12.992C44.1968 13.344 44.0368 13.688 43.9248 14.024C43.8128 14.344 43.7568 14.504 43.7568 14.504ZM53.6197 16.208C53.3157 16.08 53.0677 15.888 52.8757 15.632C52.6997 15.36 52.6117 15.032 52.6117 14.648C52.6117 14.488 52.6437 14.216 52.7077 13.832C52.7717 13.448 52.8597 13.016 52.9717 12.536C53.0837 12.056 53.1957 11.608 53.3077 11.192C53.4677 10.904 53.5717 10.616 53.6197 10.328C53.6837 10.04 53.7157 9.864 53.7157 9.8C53.7477 9.608 53.8037 9.352 53.8837 9.032C53.9637 8.712 54.0437 8.424 54.1237 8.168C54.2197 7.896 54.2837 7.744 54.3157 7.712C54.3957 7.632 54.5317 7.584 54.7237 7.568C54.9157 7.552 55.1077 7.576 55.2997 7.64C55.4917 7.688 55.6197 7.792 55.6837 7.952C55.8597 8.144 55.9557 8.432 55.9717 8.816C56.0037 9.2 55.9317 9.648 55.7557 10.16C55.6117 10.48 55.4677 10.856 55.3237 11.288C55.1797 11.72 55.0517 12.12 54.9397 12.488C54.8437 12.84 54.7877 13.08 54.7717 13.208L53.9077 13.184C54.1797 12.928 54.4357 12.664 54.6757 12.392C54.9157 12.104 55.0917 11.88 55.2037 11.72C55.4757 11.352 55.7077 11.048 55.8997 10.808C56.1077 10.552 56.3717 10.248 56.6917 9.896C57.0117 9.528 57.3557 9.272 57.7237 9.128C58.0917 8.968 58.3637 8.888 58.5397 8.888C58.8917 8.952 59.2037 9.136 59.4757 9.44C59.7637 9.728 59.9397 10.16 60.0037 10.736C60.0037 10.96 59.9797 11.224 59.9317 11.528C59.8997 11.832 59.8837 11.984 59.8837 11.984C59.8837 11.984 60.0117 11.824 60.2677 11.504C60.5397 11.184 60.8997 10.824 61.3477 10.424C61.6517 10.2 61.9477 10.072 62.2357 10.04C62.5237 9.992 62.7797 10.088 63.0037 10.328C63.4197 10.552 63.7237 10.944 63.9157 11.504C64.1077 12.064 64.1717 12.696 64.1077 13.4C64.0597 13.816 64.0597 14.152 64.1077 14.408C64.1717 14.648 64.2357 14.864 64.2997 15.056C64.5077 15.344 64.5397 15.6 64.3957 15.824C64.2517 16.032 64.1237 16.136 64.0117 16.136C63.8517 16.136 63.6117 16.104 63.2917 16.04C62.9717 15.976 62.6757 15.864 62.4037 15.704C62.1477 15.544 62.0197 15.328 62.0197 15.056V13.568C62.0197 13.216 62.0037 12.96 61.9717 12.8C61.9557 12.624 61.9157 12.512 61.8517 12.464C61.6757 12.368 61.4597 12.44 61.2037 12.68C60.9477 12.92 60.6677 13.264 60.3637 13.712C60.0757 14.144 59.7637 14.632 59.4277 15.176C59.1237 15.672 58.8757 15.976 58.6837 16.088C58.4917 16.184 58.3077 16.176 58.1317 16.064C57.7797 15.952 57.5557 15.8 57.4597 15.608C57.3797 15.4 57.3717 15.168 57.4357 14.912C57.5157 14.64 57.6117 14.288 57.7237 13.856C57.8517 13.424 57.9717 13.008 58.0837 12.608C58.1957 12.192 58.2677 11.888 58.2997 11.696C58.2357 11.568 58.1237 11.528 57.9637 11.576C57.8197 11.608 57.6677 11.68 57.5077 11.792C57.3157 11.92 57.1077 12.056 56.8837 12.2C56.6757 12.344 56.4277 12.648 56.1397 13.112C55.9477 13.416 55.7317 13.752 55.4917 14.12C55.2517 14.472 55.0277 14.792 54.8197 15.08C54.6277 15.368 54.4677 15.568 54.3397 15.68C54.2277 15.968 54.1237 16.152 54.0277 16.232C53.9317 16.296 53.7957 16.288 53.6197 16.208ZM64.8998 22.592C64.8358 22.592 64.7398 22.592 64.6118 22.592C64.4998 22.608 64.4038 22.544 64.3238 22.4C64.2598 22.32 64.1638 22.16 64.0358 21.92C63.9078 21.696 63.8838 21.376 63.9638 20.96C64.0438 20.688 64.1078 20.416 64.1558 20.144C64.2038 19.888 64.2278 19.696 64.2278 19.568C64.2278 19.504 64.2438 19.376 64.2758 19.184C64.3238 19.008 64.3478 18.88 64.3478 18.8C64.4278 18.672 64.4918 18.496 64.5398 18.272C64.5878 18.048 64.6118 17.848 64.6118 17.672C64.6118 17.48 64.7078 17.304 64.8998 17.144C64.8998 17.016 64.9238 16.856 64.9718 16.664C65.0358 16.472 65.0678 16.344 65.0678 16.28C65.1158 16.056 65.2198 15.664 65.3798 15.104C65.5558 14.528 65.7638 13.88 66.0038 13.16C66.2598 12.44 66.5078 11.736 66.7478 11.048C66.9878 10.36 67.2038 9.776 67.3958 9.296C67.5878 8.848 67.7478 8.432 67.8758 8.048C68.0038 7.664 68.0678 7.392 68.0678 7.232C68.0678 7.168 68.0838 7.12 68.1158 7.088C68.1478 7.04 68.2198 6.952 68.3318 6.824C68.4918 6.664 68.6998 6.608 68.9558 6.656C69.2278 6.688 69.4518 6.768 69.6278 6.896C69.7558 7.104 69.8438 7.296 69.8918 7.472C69.9558 7.632 69.9558 7.888 69.8918 8.24C69.8918 8.48 69.8358 8.704 69.7238 8.912C69.6118 9.104 69.5078 9.264 69.4118 9.392C69.3318 9.504 69.3078 9.552 69.3398 9.536C70.0438 9.104 70.6758 8.872 71.2358 8.84C71.8118 8.792 72.2918 8.888 72.6758 9.128C73.0758 9.352 73.3798 9.664 73.5878 10.064C73.7958 10.464 73.8998 10.896 73.8998 11.36C73.8998 11.552 73.8358 11.808 73.7078 12.128C73.5798 12.448 73.4358 12.752 73.2758 13.04C73.1158 13.312 72.9878 13.496 72.8918 13.592C72.8278 13.592 72.7638 13.648 72.6998 13.76C72.6358 13.856 72.5718 13.968 72.5078 14.096C72.3798 14.256 72.1638 14.44 71.8598 14.648C71.5718 14.84 71.2758 15 70.9718 15.128C70.6678 15.24 70.4518 15.272 70.3238 15.224C70.3238 15.224 70.2998 15.24 70.2518 15.272C70.2198 15.304 70.2038 15.36 70.2038 15.44C70.2038 15.472 70.0918 15.536 69.8678 15.632C69.6438 15.728 69.3798 15.816 69.0758 15.896C68.7718 15.976 68.4918 16.016 68.2358 16.016C67.8998 16.016 67.6598 15.952 67.5158 15.824C67.4838 15.856 67.4438 15.904 67.3958 15.968C67.3638 16.032 67.3478 16.088 67.3478 16.136C67.3478 16.232 67.3078 16.384 67.2278 16.592C67.1638 16.8 67.0838 16.984 66.9878 17.144C66.8918 17.32 66.8038 17.408 66.7238 17.408C66.7238 17.408 66.7078 17.432 66.6758 17.48C66.6438 17.528 66.6598 17.592 66.7238 17.672C66.7238 17.672 66.7158 17.76 66.6998 17.936C66.6998 18.128 66.6598 18.288 66.5798 18.416C66.5798 18.544 66.5558 18.736 66.5078 18.992C66.4598 19.248 66.4038 19.44 66.3398 19.568C66.3398 19.76 66.3078 19.944 66.2438 20.12C66.1958 20.312 66.1398 20.408 66.0758 20.408C66.0118 20.424 65.9718 20.52 65.9558 20.696C65.9398 20.888 65.9318 21.024 65.9318 21.104C65.9158 21.504 65.7878 21.848 65.5478 22.136C65.3078 22.44 65.0918 22.592 64.8998 22.592ZM67.9718 14.192C68.0998 14.192 68.3318 14.136 68.6678 14.024C69.0038 13.912 69.3558 13.776 69.7238 13.616C70.0918 13.44 70.3798 13.264 70.5878 13.088C71.0038 12.72 71.3238 12.36 71.5478 12.008C71.7878 11.656 71.7718 11.264 71.4998 10.832C71.3718 10.608 71.1638 10.52 70.8758 10.568C70.6038 10.6 70.2998 10.728 69.9638 10.952C69.6278 11.176 69.2838 11.456 68.9318 11.792C68.7398 12 68.5638 12.24 68.4038 12.512C68.2438 12.784 68.1078 13.048 67.9958 13.304C67.8998 13.56 67.8438 13.776 67.8278 13.952C67.8118 14.112 67.8598 14.192 67.9718 14.192ZM75.3301 16.424C75.1701 16.328 74.9941 16.192 74.8021 16.016C74.6101 15.824 74.5141 15.64 74.5141 15.464C74.5141 15.224 74.5461 14.928 74.6101 14.576C74.6741 14.208 74.7381 13.896 74.8021 13.64C74.8341 13.352 74.8741 13.064 74.9221 12.776C74.9861 12.472 75.0981 12.192 75.2581 11.936C75.4341 11.328 75.6181 10.728 75.8101 10.136C76.0021 9.528 76.1701 8.904 76.3141 8.264C76.5221 7.672 76.7061 7.152 76.8661 6.704C77.0421 6.24 77.2581 5.656 77.5141 4.952C77.6581 4.552 77.7781 4.128 77.8741 3.68C77.9861 3.216 78.1541 2.8 78.3781 2.432C78.4741 2.288 78.5461 2.168 78.5941 2.072C78.6581 1.96 78.7221 1.856 78.7861 1.76C78.8021 1.696 78.8821 1.64 79.0261 1.592C79.1861 1.544 79.3461 1.52 79.5061 1.52C79.6821 1.504 79.8021 1.536 79.8661 1.616C79.9141 1.6 79.9941 1.664 80.1061 1.808C80.2181 1.936 80.3221 2.088 80.4181 2.264C80.5301 2.424 80.5781 2.552 80.5621 2.648C80.5621 2.712 80.5461 2.8 80.5141 2.912C80.4981 3.024 80.4581 3.128 80.3941 3.224C80.3301 3.288 80.2661 3.384 80.2021 3.512C80.1541 3.624 80.0741 3.784 79.9621 3.992C79.8981 4.2 79.8421 4.416 79.7941 4.64C79.7461 4.848 79.6821 5.04 79.6021 5.216C79.5381 5.408 79.4581 5.592 79.3621 5.768C79.2821 5.944 79.2261 6.088 79.1941 6.2C79.0821 6.568 78.9461 6.928 78.7861 7.28C78.6421 7.632 78.5141 8.008 78.4021 8.408C78.2901 8.792 78.1781 9.192 78.0661 9.608C77.9541 10.008 77.7941 10.392 77.5861 10.76C77.4741 10.936 77.3941 11.16 77.3461 11.432C77.2981 11.704 77.2501 11.976 77.2021 12.248C77.1061 12.536 77.0181 12.808 76.9381 13.064C76.8741 13.304 76.8421 13.456 76.8421 13.52C76.7461 13.872 76.6741 14.224 76.6261 14.576C76.5941 14.912 76.5141 15.208 76.3861 15.464C76.3701 15.624 76.3141 15.8 76.2181 15.992C76.1221 16.184 75.9941 16.328 75.8341 16.424C75.6901 16.52 75.5221 16.52 75.3301 16.424ZM81.1957 17.432C80.3157 17.432 79.6357 17.176 79.1557 16.664C78.6917 16.152 78.4597 15.368 78.4597 14.312C78.4597 13.736 78.5637 13.104 78.7717 12.416C78.9957 11.728 79.2837 11.056 79.6357 10.4C80.0037 9.744 80.4037 9.176 80.8357 8.696C81.2677 8.2 81.6997 7.856 82.1317 7.664C82.2917 7.584 82.4597 7.528 82.6357 7.496C82.8277 7.448 83.0117 7.424 83.1877 7.424C83.3797 7.424 83.5877 7.44 83.8117 7.472C84.0517 7.488 84.2757 7.536 84.4837 7.616C84.8517 7.728 85.1717 7.944 85.4437 8.264C85.7317 8.584 85.8757 9.048 85.8757 9.656C85.8757 9.816 85.8597 9.992 85.8277 10.184C85.7957 10.36 85.7397 10.536 85.6597 10.712C85.4517 11.24 85.1317 11.744 84.6997 12.224C84.2837 12.704 83.8437 13.04 83.3797 13.232C83.2517 13.296 83.1237 13.344 82.9957 13.376C82.8837 13.392 82.7637 13.4 82.6357 13.4C82.2997 13.4 81.9957 13.352 81.7237 13.256C81.4677 13.16 81.2277 13.032 81.0037 12.872L80.8117 12.704L80.6917 12.944C80.5797 13.248 80.4997 13.504 80.4517 13.712C80.4197 13.92 80.4037 14.072 80.4037 14.168C80.4037 14.36 80.4117 14.56 80.4277 14.768C80.4437 14.96 80.4917 15.12 80.5717 15.248C80.6357 15.328 80.7157 15.392 80.8117 15.44C80.9237 15.488 81.0597 15.512 81.2197 15.512C81.3157 15.512 81.4037 15.512 81.4837 15.512C81.5797 15.496 81.6597 15.48 81.7237 15.464C82.0117 15.4 82.2437 15.296 82.4197 15.152C82.6117 14.992 82.8117 14.856 83.0197 14.744L83.1157 14.696L83.0917 14.624C83.3637 14.48 83.5477 14.392 83.6437 14.36C83.7397 14.312 83.8117 14.272 83.8597 14.24C83.9237 14.176 83.9957 14.144 84.0757 14.144C84.2997 14.112 84.5157 14.176 84.7237 14.336C84.9477 14.48 85.0597 14.664 85.0597 14.888C85.0597 14.984 84.9877 15.136 84.8437 15.344C84.7157 15.552 84.5477 15.76 84.3397 15.968C84.1477 16.16 83.9477 16.312 83.7397 16.424C83.6917 16.44 83.6437 16.464 83.5957 16.496C83.5477 16.512 83.4997 16.536 83.4517 16.568H83.4757C83.3317 16.76 83.1877 16.856 83.0437 16.856H82.8517C82.7877 16.968 82.5797 17.088 82.2277 17.216C81.8757 17.36 81.5317 17.432 81.1957 17.432ZM82.4437 11.648C82.5877 11.648 82.7157 11.624 82.8277 11.576C82.9557 11.528 83.0757 11.472 83.1877 11.408C83.5717 11.136 83.8197 10.784 83.9317 10.352C84.0437 9.92 84.0037 9.592 83.8117 9.368C83.7797 9.32 83.7397 9.288 83.6917 9.272C83.6437 9.24 83.5877 9.224 83.5237 9.224C83.3477 9.224 83.1477 9.28 82.9237 9.392C82.7157 9.504 82.5077 9.664 82.2997 9.872C82.0917 10.08 81.8997 10.328 81.7237 10.616L81.4117 11.12C81.4437 11.104 81.4677 11.096 81.4837 11.096C81.5157 11.08 81.5397 11.072 81.5557 11.072C81.6997 11.072 81.7957 11.12 81.8437 11.216C81.8917 11.312 81.9477 11.408 82.0117 11.504C82.0917 11.6 82.2357 11.648 82.4437 11.648ZM95.1758 18.272C94.8878 18.288 94.6478 18.152 94.4558 17.864C94.2638 17.576 94.1758 17.336 94.1918 17.144C94.2078 16.888 94.2798 16.52 94.4078 16.04C94.5358 15.56 94.6798 15.072 94.8398 14.576C94.9998 14.08 95.1438 13.688 95.2718 13.4C95.3358 13.144 95.3918 12.92 95.4398 12.728C95.5038 12.52 95.5438 12.384 95.5598 12.32C95.6078 12.256 95.6798 12.088 95.7758 11.816C95.8878 11.544 95.9758 11.28 96.0398 11.024C96.0718 10.896 96.1358 10.656 96.2318 10.304C96.3438 9.936 96.4718 9.512 96.6158 9.032C96.7758 8.552 96.9278 8.08 97.0718 7.616C97.2318 7.152 97.3678 6.744 97.4798 6.392C97.5918 6.04 97.6638 5.808 97.6958 5.696C97.8238 5.504 97.9198 5.32 97.9838 5.144C98.0478 4.968 98.0878 4.848 98.1038 4.784C98.1998 4.72 98.2558 4.64 98.2718 4.544C98.2878 4.432 98.2958 4.344 98.2958 4.28C98.2958 4.2 98.3198 4.136 98.3678 4.088C98.4318 4.04 98.4638 3.984 98.4638 3.92C98.5278 3.872 98.5678 3.864 98.5838 3.896C98.5998 3.928 98.6478 3.904 98.7278 3.824L98.8478 3.008L100.984 2.984C100.952 3.176 100.904 3.416 100.84 3.704C100.776 3.976 100.624 4.344 100.384 4.808C100.304 5.128 100.208 5.416 100.096 5.672C99.9998 5.928 99.9598 6.096 99.9758 6.176C99.9438 6.208 99.8718 6.368 99.7598 6.656C99.6638 6.944 99.5438 7.296 99.3998 7.712C99.2718 8.128 99.1358 8.544 98.9918 8.96C98.8638 9.376 98.7438 9.744 98.6318 10.064C98.5358 10.368 98.4718 10.56 98.4398 10.64C98.3118 10.896 98.1678 11.272 98.0078 11.768C97.8478 12.264 97.6078 12.936 97.2878 13.784C97.1598 14.04 96.9998 14.424 96.8078 14.936C96.6318 15.448 96.4878 15.912 96.3758 16.328C96.1998 16.952 96.0398 17.4 95.8958 17.672C95.7678 17.944 95.6478 18.104 95.5358 18.152C95.4238 18.216 95.3038 18.256 95.1758 18.272ZM95.3918 4.16C94.7358 4.224 94.2878 4.144 94.0478 3.92C93.8238 3.696 93.7438 3.456 93.8078 3.2C93.8558 3.008 93.9678 2.848 94.1438 2.72C94.3358 2.576 94.6798 2.456 95.1758 2.36C95.3518 2.328 95.5758 2.288 95.8478 2.24C96.1358 2.192 96.4078 2.144 96.6638 2.096C97.1918 2.032 97.6238 1.976 97.9598 1.928C98.3118 1.88 98.6718 1.84 99.0398 1.808C99.4078 1.776 99.8718 1.744 100.432 1.712C100.896 1.68 101.288 1.656 101.608 1.64C101.944 1.608 102.112 1.592 102.112 1.592C102.16 1.592 102.328 1.608 102.616 1.64C102.904 1.672 103.216 1.712 103.552 1.76C103.888 1.808 104.136 1.864 104.296 1.928C104.664 2.008 104.96 2.152 105.184 2.36C105.408 2.568 105.552 2.808 105.616 3.08C105.664 3.272 105.664 3.424 105.616 3.536C105.568 3.632 105.48 3.712 105.352 3.776C104.984 3.888 104.68 3.984 104.44 4.064C104.216 4.128 103.992 4.12 103.768 4.04C103.688 3.96 103.592 3.888 103.48 3.824C103.384 3.76 103.208 3.712 102.952 3.68C102.712 3.632 102.328 3.592 101.8 3.56C101.352 3.608 100.96 3.632 100.624 3.632C100.288 3.632 100.12 3.672 100.12 3.752L98.7038 3.824L97.5278 3.944C97.3678 3.96 97.1438 3.984 96.8558 4.016C96.5678 4.032 96.2878 4.056 96.0158 4.088C95.7438 4.104 95.5358 4.128 95.3918 4.16ZM108.409 16.664C108.281 16.68 108.049 16.608 107.713 16.448C107.393 16.288 107.137 16.104 106.945 15.896C106.801 15.672 106.681 15.4 106.585 15.08C106.505 14.76 106.449 14.328 106.417 13.784C105.953 14.488 105.553 15.016 105.217 15.368C104.881 15.72 104.577 15.976 104.305 16.136C104.049 16.28 103.793 16.392 103.537 16.472C103.393 16.52 103.201 16.456 102.961 16.28C102.721 16.104 102.569 15.96 102.505 15.848C102.441 15.736 102.369 15.56 102.289 15.32C102.225 15.064 102.201 14.8 102.217 14.528C102.185 14.192 102.153 13.808 102.121 13.376C102.105 12.944 102.089 12.52 102.073 12.104C102.073 11.672 102.081 11.288 102.097 10.952C102.113 10.616 102.145 10.392 102.193 10.28C102.177 10.216 102.169 10.152 102.169 10.088C102.169 10.024 102.169 9.992 102.169 9.992C102.121 9.912 102.097 9.736 102.097 9.464C102.097 9.176 102.113 8.896 102.145 8.624C102.193 8.352 102.225 8.184 102.241 8.12C102.273 8.056 102.401 7.976 102.625 7.88C102.865 7.768 103.025 7.704 103.105 7.688C103.345 7.736 103.473 7.832 103.489 7.976C103.537 8.008 103.585 8.056 103.633 8.12C103.681 8.168 103.737 8.184 103.801 8.168C103.849 8.2 103.913 8.384 103.993 8.72C104.089 9.04 104.137 9.368 104.137 9.704C104.121 9.864 104.121 10.016 104.137 10.16C104.153 10.304 104.145 10.432 104.113 10.544C104.113 10.624 104.121 10.8 104.137 11.072C104.153 11.328 104.169 11.592 104.185 11.864C104.185 12.072 104.177 12.288 104.161 12.512C104.145 12.736 104.137 12.96 104.137 13.184C104.185 13.504 104.193 13.712 104.161 13.808C104.129 13.888 104.161 13.896 104.257 13.832C104.353 13.8 104.489 13.656 104.665 13.4C104.841 13.128 105.097 12.704 105.433 12.128C105.689 11.744 105.881 11.416 106.009 11.144C106.153 10.856 106.289 10.632 106.417 10.472C106.465 10.088 106.513 9.744 106.561 9.44C106.625 9.136 106.665 8.92 106.681 8.792C106.905 8.568 107.161 8.408 107.449 8.312C107.753 8.216 107.961 8.28 108.073 8.504C108.233 8.568 108.393 8.696 108.553 8.888C108.713 9.08 108.777 9.264 108.745 9.44C108.681 9.664 108.617 9.88 108.553 10.088C108.505 10.296 108.449 10.512 108.385 10.736C108.321 10.96 108.265 11.272 108.217 11.672C108.169 12.072 108.137 12.472 108.121 12.872C108.121 13.256 108.153 13.568 108.217 13.808C108.233 13.952 108.281 14.048 108.361 14.096C108.441 14.128 108.601 14.04 108.841 13.832C109.081 13.576 109.313 13.288 109.537 12.968C109.761 12.648 109.945 12.36 110.089 12.104C110.249 11.832 110.329 11.656 110.329 11.576C110.329 11.448 110.361 11.312 110.425 11.168C110.489 11.008 110.569 10.888 110.665 10.808C110.745 10.712 110.793 10.616 110.809 10.52C110.825 10.408 110.857 10.296 110.905 10.184C110.921 10.152 110.945 10.104 110.977 10.04C111.009 9.976 111.033 9.912 111.049 9.848C111.001 9.736 111.033 9.64 111.145 9.56C111.273 9.464 111.353 9.368 111.385 9.272C111.417 9.064 111.553 8.904 111.793 8.792C112.049 8.68 112.297 8.664 112.537 8.744C112.793 8.824 112.929 9.064 112.945 9.464C112.945 9.656 112.913 9.936 112.849 10.304C112.785 10.672 112.681 11.064 112.537 11.48C112.393 11.896 112.201 12.272 111.961 12.608C111.897 12.736 111.833 12.864 111.769 12.992C111.721 13.12 111.633 13.288 111.505 13.496C111.377 13.704 111.153 14.008 110.833 14.408C110.737 14.536 110.625 14.672 110.497 14.816C110.385 14.944 110.265 15.064 110.137 15.176C109.865 15.528 109.561 15.864 109.225 16.184C108.905 16.488 108.633 16.648 108.409 16.664ZM115.111 16.784C114.487 16.528 114.055 16.112 113.815 15.536C113.575 14.96 113.511 14.192 113.623 13.232C113.655 12.736 113.639 12.408 113.575 12.248C113.511 12.072 113.391 11.904 113.215 11.744C113.167 11.68 113.055 11.576 112.879 11.432C112.703 11.272 112.623 11.152 112.639 11.072C112.623 10.96 112.647 10.824 112.711 10.664C112.775 10.488 112.831 10.392 112.879 10.376C112.991 10.328 113.103 10.272 113.215 10.208C113.343 10.144 113.439 10.128 113.503 10.16C113.567 10.16 113.663 10.2 113.791 10.28C113.935 10.36 114.007 10.432 114.007 10.496C114.071 10.608 114.167 10.56 114.295 10.352C114.439 10.144 114.591 9.88 114.751 9.56C114.911 9.304 115.111 9.064 115.351 8.84C115.591 8.616 115.831 8.416 116.071 8.24C116.327 8.048 116.543 7.904 116.719 7.808C116.799 7.776 116.951 7.728 117.175 7.664C117.415 7.6 117.663 7.552 117.919 7.52C118.175 7.472 118.367 7.456 118.495 7.472C118.783 7.488 119.087 7.608 119.407 7.832C119.727 8.056 119.975 8.264 120.151 8.456C120.359 8.6 120.495 8.824 120.559 9.128C120.639 9.416 120.671 9.72 120.655 10.04C120.639 10.36 120.575 10.632 120.463 10.856C120.415 11.016 120.247 11.24 119.959 11.528C119.671 11.816 119.351 12.096 118.999 12.368C118.663 12.624 118.375 12.8 118.135 12.896C117.927 12.944 117.679 12.984 117.391 13.016C117.103 13.032 116.831 13.032 116.575 13.016C116.335 12.984 116.167 12.944 116.071 12.896C115.959 12.832 115.863 12.856 115.783 12.968C115.719 13.064 115.663 13.336 115.615 13.784C115.599 13.96 115.599 14.112 115.615 14.24C115.647 14.368 115.679 14.464 115.711 14.528C115.823 14.72 115.935 14.864 116.047 14.96C116.159 15.04 116.367 15.064 116.671 15.032C116.975 15 117.279 14.816 117.583 14.48C117.903 14.128 118.191 13.848 118.447 13.64C118.511 13.528 118.647 13.456 118.855 13.424C119.079 13.376 119.343 13.392 119.647 13.472C119.823 13.584 119.903 13.76 119.887 14C119.887 14.24 119.759 14.592 119.503 15.056C119.455 15.168 119.319 15.336 119.095 15.56C118.887 15.768 118.655 15.984 118.399 16.208C118.159 16.416 117.959 16.568 117.799 16.664C117.319 16.92 116.847 17.04 116.383 17.024C115.919 17.008 115.495 16.928 115.111 16.784ZM116.887 11.384C117.127 11.32 117.327 11.256 117.487 11.192C117.663 11.128 117.831 11.024 117.991 10.88C118.151 10.736 118.335 10.52 118.543 10.232C118.607 10.056 118.639 9.904 118.639 9.776C118.655 9.648 118.647 9.568 118.615 9.536C118.487 9.408 118.343 9.368 118.183 9.416C118.039 9.448 117.879 9.528 117.703 9.656C117.591 9.704 117.431 9.808 117.223 9.968C117.031 10.112 116.839 10.28 116.647 10.472C116.471 10.648 116.327 10.816 116.215 10.976C116.119 11.12 116.103 11.208 116.167 11.24C116.135 11.304 116.223 11.344 116.431 11.36C116.655 11.376 116.807 11.384 116.887 11.384ZM125.951 16.52C125.471 16.792 124.959 16.952 124.415 17C123.887 17.032 123.391 16.96 122.927 16.784C122.463 16.592 122.087 16.312 121.799 15.944C121.639 15.736 121.487 15.408 121.343 14.96C121.199 14.496 121.175 13.872 121.271 13.088C121.367 12.352 121.591 11.608 121.943 10.856C122.311 10.104 122.759 9.44 123.287 8.864C123.815 8.288 124.391 7.896 125.015 7.688C125.239 7.608 125.463 7.552 125.687 7.52C125.927 7.472 126.239 7.464 126.623 7.496C126.991 7.544 127.319 7.64 127.607 7.784C127.895 7.912 128.103 8.056 128.231 8.216C128.487 8.472 128.655 8.72 128.735 8.96C128.815 9.2 128.847 9.432 128.831 9.656C128.751 10.168 128.519 10.72 128.135 11.312C127.767 11.904 127.247 12.344 126.575 12.632C126.303 12.744 125.983 12.816 125.615 12.848C125.247 12.88 124.743 12.832 124.103 12.704C123.719 12.624 123.463 12.664 123.335 12.824C123.223 12.984 123.175 13.296 123.191 13.76C123.223 14.048 123.287 14.304 123.383 14.528C123.495 14.736 123.695 14.88 123.983 14.96C124.351 15.024 124.615 15.032 124.775 14.984C124.935 14.92 125.135 14.832 125.375 14.72C125.503 14.64 125.623 14.552 125.735 14.456C125.863 14.36 125.983 14.264 126.095 14.168C126.223 14.072 126.327 14 126.407 13.952C126.487 13.888 126.567 13.848 126.647 13.832C126.727 13.816 126.807 13.808 126.887 13.808C127.063 13.824 127.231 13.92 127.391 14.096C127.551 14.272 127.655 14.44 127.703 14.6C127.703 14.728 127.623 14.912 127.463 15.152C127.303 15.376 127.087 15.616 126.815 15.872C126.559 16.112 126.271 16.328 125.951 16.52ZM125.639 11.168C125.751 11.12 125.911 11.008 126.119 10.832C126.343 10.656 126.543 10.472 126.719 10.28C126.895 10.072 126.983 9.912 126.983 9.8C126.983 9.624 126.863 9.472 126.623 9.344C126.399 9.216 126.103 9.192 125.735 9.272C125.607 9.304 125.455 9.392 125.279 9.536C125.103 9.68 124.927 9.848 124.751 10.04C124.575 10.216 124.423 10.392 124.295 10.568C124.167 10.728 124.079 10.856 124.031 10.952C124.095 11.032 124.223 11.096 124.415 11.144C124.607 11.192 124.815 11.216 125.039 11.216C125.279 11.216 125.479 11.2 125.639 11.168ZM130.838 17.024C130.662 16.992 130.47 16.888 130.262 16.712C130.054 16.52 129.862 16.312 129.686 16.088C129.526 15.848 129.422 15.648 129.374 15.488C129.374 15.456 129.35 15.416 129.302 15.368C129.27 15.32 129.254 15.296 129.254 15.296C129.19 15.248 129.15 15.04 129.134 14.672C129.134 14.288 129.158 13.864 129.206 13.4C129.254 12.936 129.31 12.568 129.374 12.296C129.454 12.04 129.574 11.696 129.734 11.264C129.894 10.816 130.03 10.416 130.142 10.064L130.79 8.672L129.83 8.408C129.718 8.376 129.622 8.312 129.542 8.216C129.478 8.12 129.446 8.04 129.446 7.976C129.446 7.848 129.518 7.664 129.662 7.424C129.806 7.184 129.91 7.064 129.974 7.064C130.054 7.08 130.198 7.088 130.406 7.088C130.63 7.088 130.846 7.08 131.054 7.064C131.262 7.048 131.39 7.032 131.438 7.016C131.502 6.984 131.566 6.944 131.63 6.896C131.694 6.832 131.742 6.744 131.774 6.632C131.854 6.456 131.926 6.32 131.99 6.224C132.054 6.128 132.142 5.984 132.254 5.792C132.366 5.584 132.454 5.408 132.518 5.264C132.598 5.12 132.718 4.92 132.878 4.664C132.958 4.552 133.046 4.416 133.142 4.256C133.238 4.096 133.358 3.96 133.502 3.848C133.646 3.72 133.878 3.632 134.198 3.584C134.534 3.52 134.822 3.592 135.062 3.8C135.19 3.96 135.262 4.112 135.278 4.256C135.294 4.4 135.23 4.584 135.086 4.808C134.958 5.08 134.806 5.328 134.63 5.552C134.47 5.76 134.318 6 134.174 6.272C133.918 6.624 133.87 6.824 134.03 6.872C134.19 6.92 134.638 6.888 135.374 6.776C135.838 6.696 136.174 6.744 136.382 6.92C136.59 7.096 136.71 7.32 136.742 7.592C136.79 7.976 136.75 8.208 136.622 8.288C136.494 8.368 136.126 8.408 135.518 8.408C135.134 8.472 134.806 8.512 134.534 8.528C134.262 8.528 134.062 8.528 133.934 8.528C133.726 8.544 133.59 8.552 133.526 8.552C133.462 8.552 133.366 8.568 133.238 8.6C133.11 8.632 133.014 8.688 132.95 8.768C132.902 8.832 132.846 8.928 132.782 9.056C132.718 9.12 132.622 9.288 132.494 9.56C132.366 9.832 132.206 10.128 132.014 10.448C131.79 11.12 131.598 11.768 131.438 12.392C131.294 13 131.166 13.608 131.054 14.216C131.006 14.52 131.014 14.744 131.078 14.888C131.158 15.016 131.366 15.096 131.702 15.128C131.878 15.144 132.134 15.144 132.47 15.128C132.806 15.096 133.086 15.048 133.31 14.984C133.486 14.904 133.67 14.824 133.862 14.744C134.054 14.648 134.23 14.552 134.39 14.456C134.534 14.376 134.678 14.296 134.822 14.216C134.966 14.12 135.038 14.072 135.038 14.072C135.118 13.944 135.23 13.968 135.374 14.144C135.534 14.304 135.646 14.48 135.71 14.672C135.71 14.864 135.67 15.096 135.59 15.368C135.51 15.624 135.214 15.896 134.702 16.184C133.982 16.632 133.262 16.904 132.542 17C131.822 17.096 131.254 17.104 130.838 17.024Z" fill="#A155E0"></path></svg>
<div className="max-w-96 origin-top -rotate-3 scale-90 rounded-3xl p-1 drop-shadow-xl transition-transform group-hover:rotate-0" style={{backgroundImage: 'linear-gradient(99.08deg, rgba(191, 133, 237, 0.2) 8.78%, rgba(106, 219, 255, 0.2) 54.15%, rgba(154, 106, 255, 0.2) 96.61%, rgba(255, 133, 106, 0.2) 125.11%)'}}>
<div className="flex flex-col gap-2 rounded-[20px] bg-white p-3"><header className="pointer-events-none flex select-none items-center gap-1.5"><Image
  src="https://pbs.twimg.com/profile_images/1825057263876243456/jRiAsgd__400x400.jpg"
  alt={`Profile Image`}
  width={40}   // Set an appropriate width
  height={40}  // Set an appropriate height
  className="w-12 rounded-lg object-cover"
/>
<div className="flex flex-1 gap-1 text-md font-bold leading-none text-black">
    <div className="flex flex-col"><div className="flex items-center gap-1">Postable<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check inline-block h-5 w-5 stroke-white fill-blue-500"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg></div><div className="text-xs font-medium text-muted-foreground">@postable_app</div></div></div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[22px] text-[#D5D4D2]"><path fillRule="evenodd" clipRule="evenodd" d="M7.04912 2.75H2.26894L7.8984 10.7662L2.19727 17.25H4.09789L8.74145 11.9674L12.4509 17.25H16.75V17H16.75L16.75 17V16.75H16.5745L11.0833 8.92875L11.271 9.0938L16.8486 2.75H14.9481L10.5551 7.74319L7.04912 2.75ZM4.60908 4.16111H6.19882L14.5743 15.8837H13.1627V16.1336L4.60908 4.16111Z" fill="currentColor"></path></svg></header><p className="text-left text-sm font-normal text-[#14171A]">Get scroll-stopping posts from your tweets with zero design experience, only with Postable.</p><div className="pointer-events-none flex h-3 select-none justify-between overflow-visible text-2xs font-medium leading-none text-muted-foreground"><time className="min-w-fit flex-shrink-0" dateTime="2024-07-29T16:12:08.000Z">9:42 PM · Jul 29, 2024</time></div></div></div></div>
   </>
  )
}
