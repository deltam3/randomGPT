import arrowDown from "@/assets/icons/arrow-down.png";
import arrowUp from "@/assets/icons/arrow-up.png";
import backArrow from "@/assets/icons/back-arrow.png";
import chat from "@/assets/icons/chat.png";
import checkmark from "@/assets/icons/check.png";
import close from "@/assets/icons/close.png";
import dollar from "@/assets/icons/dollar.png";
import email from "@/assets/icons/email.png";
import eyecross from "@/assets/icons/eyecross.png";
import google from "@/assets/icons/google.png";
import home from "@/assets/icons/home.png";
import list from "@/assets/icons/list.png";
import lock from "@/assets/icons/lock.png";
import map from "@/assets/icons/map.png";
import marker from "@/assets/icons/marker.png";
import out from "@/assets/icons/out.png";
import person from "@/assets/icons/person.png";
import pin from "@/assets/icons/pin.png";
import point from "@/assets/icons/point.png";
import profile from "@/assets/icons/profile.png";
import search from "@/assets/icons/search.png";
import selectedMarker from "@/assets/icons/selected-marker.png";
import star from "@/assets/icons/star.png";
import target from "@/assets/icons/target.png";
import to from "@/assets/icons/to.png";
import check from "@/assets/images/check.png";

import getStarted from "@/assets/images/get-started.png";
import message from "@/assets/images/message.png";
import noResult from "@/assets/images/no-result.png";
import onboard1 from "@/assets/images/onboarding1.png";
import onboard2 from "@/assets/images/onboarding2.png";
import onboard3 from "@/assets/images/icon.png";
import signUpMario from "@/assets/images/signup-mario.png";

export const images = {
  onboard1,
  onboard2,
  onboard3,
  getStarted,
  signUpMario,
  check,
  noResult,
  message,
};

export const icons = {
  arrowDown,
  arrowUp,
  backArrow,
  chat,
  checkmark,
  close,
  dollar,
  email,
  eyecross,
  google,
  home,
  list,
  lock,
  map,
  marker,
  out,
  person,
  pin,
  point,
  profile,
  search,
  selectedMarker,
  star,
  target,
  to,
};

export const onboarding = [
  {
    id: 1,
    title: "환영합니다!",
    description:
      "저희 ChatGPT 앱에 오신 것을 환영합니다! 이 첫 단계에서는 앱의 기본 기능과 사용 방법을 소개합니다. 저희의 목표와 여러분이 기대할 수 있는 것들에 대해 알아보세요. 사용하기 전에 몇 가지 중요한 정보를 확인해 주세요.",
    image: images.onboard1,
  },
  {
    id: 2,
    title: "프로필 설정하기",
    description:
      "여러분의 개인화된 경험을 위해 프로필을 설정해 보세요. 이 단계에서는 프로필 사진과 간단한 소개를 추가하고, 관심 분야를 설정하여 보다 맞춤화된 콘텐츠를 받을 수 있습니다. 여러분의 개성을 반영하는 프로필을 만들어 보세요!",
    image: images.onboard2,
  },
  {
    id: 3,
    title: "탐색하고 소통하기",
    description:
      "이제 모든 준비가 완료되었습니다! 다양한 기능을 탐색하고 다른 사용자들과 소통해 보세요. 질문을 하거나 대화를 시작하고, 여러분의 생각을 나누는 것을 두려워하지 마세요. 커뮤니티와의 적극적인 소통이 여러분의 경험을 더욱 풍부하게 만들어 줄 것입니다!",
    image: images.onboard3,
  },
];

export const data = {
  onboarding,
};
