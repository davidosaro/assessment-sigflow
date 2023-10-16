
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  const navigateToSignin = () => navigate("/signin");
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="26" viewBox="0 0 91 26" fill="none" onClick={navigateToSignin}>
      <path d="M7.12765 19.9681C6.309 19.9681 5.52593 19.8524 4.77846 19.6211C4.03099 19.3897 3.34581 19.0427 2.72292 18.58C2.10003 18.1172 1.55723 17.5566 1.09451 16.8981C0.63179 16.2219 0.266953 15.4388 0 14.549L3.39031 13.2142C3.63946 14.1752 4.07549 14.9761 4.69838 15.6168C5.32127 16.2397 6.13993 16.5511 7.15435 16.5511C7.52808 16.5511 7.88402 16.5066 8.22216 16.4176C8.5781 16.3108 8.88955 16.1685 9.1565 15.9905C9.44125 15.7947 9.66371 15.5545 9.82388 15.2697C9.98405 14.985 10.0641 14.6557 10.0641 14.282C10.0641 13.9261 10.0019 13.6057 9.87727 13.321C9.75269 13.0362 9.53913 12.7693 9.23658 12.5201C8.95183 12.271 8.5692 12.0307 8.08869 11.7993C7.62597 11.568 7.04757 11.3277 6.35349 11.0786L5.17889 10.6514C4.66278 10.4735 4.13778 10.2332 3.60387 9.93066C3.08776 9.62812 2.61614 9.26328 2.18902 8.83615C1.76189 8.40903 1.40595 7.91072 1.1212 7.34122C0.854251 6.75392 0.720774 6.09543 0.720774 5.36576C0.720774 4.61829 0.863149 3.92421 1.1479 3.28353C1.45045 2.62504 1.86867 2.05554 2.40258 1.57502C2.95428 1.07671 3.60387 0.694079 4.35134 0.427126C5.1166 0.142375 5.96196 0 6.88739 0C7.84843 0 8.67598 0.133477 9.37006 0.400431C10.0819 0.649588 10.6781 0.97883 11.1586 1.38816C11.657 1.77969 12.0574 2.21571 12.3599 2.69623C12.6625 3.17674 12.8849 3.63057 13.0273 4.05769L9.85058 5.39246C9.67261 4.85855 9.34337 4.37804 8.86285 3.95091C8.40013 3.52378 7.75944 3.31022 6.94079 3.31022C6.15772 3.31022 5.50814 3.49709 4.99203 3.87082C4.47592 4.22676 4.21786 4.69838 4.21786 5.28568C4.21786 5.85518 4.46702 6.34459 4.96533 6.75392C5.46364 7.14545 6.25561 7.52808 7.34122 7.90182L8.54251 8.30225C9.30777 8.5692 10.0019 8.88065 10.6247 9.23658C11.2654 9.57473 11.8082 9.98405 12.2532 10.4646C12.7159 10.9451 13.0629 11.4968 13.2943 12.1197C13.5434 12.7248 13.668 13.4278 13.668 14.2286C13.668 15.2252 13.4633 16.0884 13.054 16.8181C12.6625 17.5299 12.1553 18.1172 11.5324 18.58C10.9095 19.0427 10.2065 19.3897 9.42345 19.6211C8.64039 19.8524 7.87512 19.9681 7.12765 19.9681Z" fill="#32D583"/>
      <path d="M18.158 4.5649C17.8555 4.5649 17.5618 4.51151 17.2771 4.40473C17.0101 4.28015 16.7699 4.11998 16.5563 3.92421C16.3606 3.71065 16.2004 3.47039 16.0758 3.20344C15.969 2.93649 15.9156 2.64284 15.9156 2.32249C15.9156 2.00215 15.969 1.7085 16.0758 1.44155C16.2004 1.1746 16.3606 0.943236 16.5563 0.747469C16.7699 0.533907 17.0101 0.373735 17.2771 0.266953C17.5618 0.142375 17.8555 0.0800866 18.158 0.0800866C18.7809 0.0800866 19.3148 0.302547 19.7598 0.747469C20.2047 1.1746 20.4271 1.6996 20.4271 2.32249C20.4271 2.94539 20.2047 3.47929 19.7598 3.92421C19.3148 4.35134 18.7809 4.5649 18.158 4.5649ZM16.4228 19.541V6.46027H19.9199V19.541H16.4228Z" fill="#32D583"/>
      <path d="M29.0205 25.7343C28.0951 25.7343 27.2675 25.6097 26.5379 25.3606C25.826 25.1292 25.2031 24.8178 24.6692 24.4262C24.1353 24.0525 23.6904 23.6343 23.3344 23.1715C22.9785 22.7088 22.7204 22.2461 22.5603 21.7834L25.8972 20.4486C26.1463 21.1427 26.5557 21.6766 27.1252 22.0503C27.6947 22.4419 28.3265 22.6376 29.0205 22.6376C30.1239 22.6376 30.996 22.2906 31.6367 21.5965C32.2774 20.9202 32.5977 19.9681 32.5977 18.7401V17.8325H32.3841C31.9748 18.402 31.432 18.8558 30.7557 19.1939C30.0972 19.5143 29.3142 19.6745 28.4065 19.6745C27.6235 19.6745 26.8582 19.5143 26.1107 19.1939C25.3811 18.8736 24.7315 18.4198 24.162 17.8325C23.5925 17.2274 23.1298 16.5066 22.7738 15.6702C22.4179 14.8337 22.2399 13.8994 22.2399 12.8671C22.2399 11.8349 22.4179 10.9006 22.7738 10.0641C23.1298 9.20989 23.5925 8.48912 24.162 7.90182C24.7315 7.29672 25.3811 6.834 26.1107 6.51366C26.8582 6.19332 27.6235 6.03314 28.4065 6.03314C29.3142 6.03314 30.0972 6.20222 30.7557 6.54036C31.432 6.8607 31.9748 7.30562 32.3841 7.87512H32.5977V6.46027H35.9346V18.6066C35.9346 19.7101 35.7656 20.6978 35.4274 21.5698C35.0893 22.4597 34.6177 23.2071 34.0126 23.8122C33.4075 24.4351 32.6778 24.9067 31.8235 25.2271C30.9871 25.5652 30.0528 25.7343 29.0205 25.7343ZM29.154 16.5244C29.5811 16.5244 29.9994 16.4443 30.4087 16.2842C30.8358 16.124 31.2096 15.8926 31.5299 15.5901C31.8502 15.2697 32.1083 14.8871 32.3041 14.4422C32.4998 13.9795 32.5977 13.4544 32.5977 12.8671C32.5977 12.2799 32.4998 11.7548 32.3041 11.2921C32.1083 10.8294 31.8502 10.4468 31.5299 10.1442C31.2096 9.82388 30.8358 9.58362 30.4087 9.42345C29.9994 9.26328 29.5811 9.18319 29.154 9.18319C28.7269 9.18319 28.3087 9.26328 27.8993 9.42345C27.49 9.58362 27.1252 9.82388 26.8048 10.1442C26.4845 10.4646 26.2264 10.8561 26.0307 11.3188C25.8349 11.7637 25.737 12.2799 25.737 12.8671C25.737 13.4544 25.8349 13.9795 26.0307 14.4422C26.2264 14.8871 26.4845 15.2697 26.8048 15.5901C27.1252 15.8926 27.49 16.124 27.8993 16.2842C28.3087 16.4443 28.7269 16.5244 29.154 16.5244Z" fill="#32D583"/>
      <path d="M49.0749 19.8524V3.86192H45.9783C45.4088 3.86192 44.9549 4.03989 44.6168 4.39582C44.2965 4.73396 44.1363 5.23228 44.1363 5.89076V6.77171H47.2063V8.26665V9.76159H44.1363V19.8524H40.6392V9.76159H38.29V6.77171H40.6392V5.94415C40.6392 4.21785 41.093 2.90088 42.0007 1.99324C42.9083 1.0856 44.2253 0.631782 45.9516 0.631782H52.572V19.8524H49.0749Z" fill="#32D583"/>
      <path d="M61.4028 6.03314C62.4172 6.03314 63.3427 6.21111 64.1791 6.56705C65.0334 6.90519 65.763 7.38571 66.3681 8.0086C66.991 8.61369 67.4715 9.34337 67.8097 10.1976C68.1656 11.0519 68.3436 11.9862 68.3436 13.0006C68.3436 14.015 68.1656 14.9494 67.8097 15.8036C67.4715 16.6579 66.991 17.3965 66.3681 18.0193C65.763 18.6244 65.0334 19.105 64.1791 19.4609C63.3427 19.799 62.4172 19.9681 61.4028 19.9681C60.3884 19.9681 59.454 19.799 58.5998 19.4609C57.7633 19.105 57.0337 18.6244 56.4108 18.0193C55.8057 17.3965 55.3252 16.6579 54.9692 15.8036C54.6311 14.9494 54.462 14.015 54.462 13.0006C54.462 11.9862 54.6311 11.0519 54.9692 10.1976C55.3252 9.34337 55.8057 8.61369 56.4108 8.0086C57.0337 7.38571 57.7633 6.90519 58.5998 6.56705C59.454 6.21111 60.3884 6.03314 61.4028 6.03314ZM61.4028 16.738C61.8477 16.738 62.2748 16.6579 62.6842 16.4977C63.1113 16.3197 63.485 16.0706 63.8054 15.7502C64.1257 15.4299 64.3749 15.0384 64.5528 14.5757C64.7486 14.1129 64.8465 13.5879 64.8465 13.0006C64.8465 12.4133 64.7486 11.8883 64.5528 11.4256C64.3749 10.9629 64.1257 10.5714 63.8054 10.251C63.485 9.93066 63.1113 9.69041 62.6842 9.53023C62.2748 9.35226 61.8477 9.26328 61.4028 9.26328C60.9401 9.26328 60.5041 9.35226 60.0947 9.53023C59.6854 9.69041 59.3206 9.93066 59.0002 10.251C58.6799 10.5714 58.4218 10.9629 58.2261 11.4256C58.0481 11.8883 57.9591 12.4133 57.9591 13.0006C57.9591 13.5879 58.0481 14.1129 58.2261 14.5757C58.4218 15.0384 58.6799 15.4299 59.0002 15.7502C59.3206 16.0706 59.6854 16.3197 60.0947 16.4977C60.5041 16.6579 60.9401 16.738 61.4028 16.738Z" fill="#32D583"/>
      <path d="M68.9417 6.46027H72.8659L75.0283 14.6557H75.2151L77.8046 6.46027H81.4084L84.0246 14.6557H84.2115L86.3471 6.46027H90.2179L86.0267 19.541H82.2627L79.6466 11.2921H79.4597L76.8436 19.541H73.1329L68.9417 6.46027Z" fill="#32D583"/>
    </svg>
  )
}