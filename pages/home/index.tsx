export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#fefbf3] flex flex-col items-center justify-center gap-12">
      <div className="flex gap-8 items-center">
        <svg
          className="w-16"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M111.163 64C114.523 60.7718 116.977 56.6371 118.189 51.9299C119.892 45.3621 119.018 38.5081 115.75 32.64C111.378 24.8 103.232 19.9179 94.4872 19.9179C92.0326 19.9179 89.5934 20.3155 87.2462 21.0788C84.7763 9.75614 75.004 1.28003 63.3601 1.28003C51.7163 1.28003 41.9287 9.75614 39.4587 21.0788C37.1116 20.3155 34.6723 19.9179 32.2178 19.9179C23.4734 19.9179 15.3273 24.8 10.955 32.64C5.12544 43.104 7.33455 56.1123 15.542 64C7.33455 71.8718 5.12544 84.8961 10.955 95.36C15.3273 103.2 23.4734 108.066 32.2178 108.066C34.6723 108.066 37.1116 107.669 39.4587 106.921C41.9287 118.228 51.7009 126.72 63.3601 126.72C75.0193 126.72 84.7763 118.228 87.2615 106.921C89.5934 107.669 92.0326 108.066 94.4872 108.066C103.232 108.066 111.378 103.2 115.75 95.36C119.018 89.492 119.892 82.6379 118.189 76.0701C116.977 71.3629 114.523 67.2283 111.163 64ZM22.2921 39.4146C24.3325 35.757 28.137 33.4829 32.2178 33.4829C34.1968 33.4829 36.1758 34.0395 37.9246 35.0731C43.3861 38.3491 45.2577 45.6166 42.1128 51.2779C40.0724 54.9355 36.2678 57.2096 32.1717 57.2096C30.1927 57.2096 28.2137 56.6689 26.4802 55.6193C21.0188 52.3593 19.1318 45.0918 22.2921 39.4146ZM63.3601 113.155C57.0396 113.155 51.9157 107.828 51.9157 101.292C51.9157 94.7557 57.0396 89.4283 63.3601 89.4283C69.6807 89.4283 74.7892 94.7557 74.7892 101.292C74.7892 107.828 69.6653 113.155 63.3601 113.155ZM104.413 88.5696C102.372 92.2272 98.5679 94.5013 94.4872 94.5013C92.5082 94.5013 90.5292 93.9606 88.7803 92.911C87.0467 91.8773 85.6047 90.3825 84.6075 88.6173C80.358 81.0158 72.4421 75.8634 63.3755 75.8634C54.3089 75.8634 46.3776 80.9999 42.1434 88.6173H42.0974C41.1156 90.3825 39.6735 91.8773 37.94 92.911C36.1911 93.9606 34.2274 94.5013 32.2331 94.5013C28.1524 94.5013 24.3478 92.2272 22.3074 88.5696C19.1472 82.9083 21.0341 75.6408 26.4955 72.3648C28.2291 71.3312 30.2081 70.7746 32.1871 70.7746C40.9315 70.7746 49.0776 65.9083 53.4498 58.0683C57.9908 49.9103 57.6533 40.2256 53.4038 32.6082H53.4345C52.4526 30.8112 51.931 28.7757 51.931 26.7083C51.931 20.1565 57.055 14.845 63.3755 14.845C69.696 14.845 74.8046 20.1565 74.8046 26.7083C74.8046 28.7757 74.283 30.8112 73.3011 32.5923H73.3165C72.2579 34.5165 71.3989 36.5839 70.8312 38.7625C69.1437 45.3303 70.0028 52.1844 73.2858 58.0683C77.658 65.9083 85.7888 70.7746 94.5485 70.7746C96.5275 70.7746 98.5065 71.3312 100.24 72.3648C102.879 73.9551 104.781 76.5154 105.563 79.5687C106.361 82.6379 105.962 85.8343 104.428 88.5696H104.413ZM105.548 48.4154C104.766 51.4847 102.863 54.045 100.225 55.6193C98.4912 56.6689 96.5122 57.2096 94.5332 57.2096C90.4371 57.2096 86.6325 54.9355 84.6075 51.2779C83.0734 48.5427 82.6592 45.3462 83.4569 42.277C84.2547 39.2237 86.1416 36.6634 88.7956 35.0731C90.5292 34.0395 92.5082 33.4829 94.4872 33.4829C98.5679 33.4829 102.372 35.757 104.413 39.4146C105.947 42.1498 106.346 45.3462 105.548 48.4154Z"
            fill="#FA4028"
          ></path>
        </svg>
        <h1 className="text-6xl max-w-4xl font-bold text-[#fa4028] text-center">
          Authentic
        </h1>
      </div>
    </main>
  );
}
