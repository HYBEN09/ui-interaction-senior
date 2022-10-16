export const DUMMY_USER_LIST = [
  // {
  //   id: 1,
  //   name: "hyebn",
  //   email: "hyebeen2658@naver.com",
  //   website: "hyeben.dev",
  // },
  // {
  //   id: 2,
  //   name: "yamoo9",
  //   email: "yamoo@naver.com",
  //   website: "euid.dev",
  // },
];

const createSpinner = (size = 100, loadingMessage = "데이터 로딩 중...") => {
  return /*html*/ `
  <figure class= 'spinner'>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" preserveAspectRatio="xMidYMid">
<defs>
<pattern id="ldio-xij79apona8-pattern" patternUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
<rect x="0" y="0" width="100" height="100" fill="#bbcedd"></rect><circle cx="33" cy="0" r="5" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 123;0 -23" keyTimes="0;1" dur="8.333333333333334s" begin="-6.333333333333333s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="31" cy="0" r="8" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 138;0 -38" keyTimes="0;1" dur="8.333333333333334s" begin="-4.166666666666667s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="33" cy="0" r="5" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 145;0 -45" keyTimes="0;1" dur="8.333333333333334s" begin="-2.5s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="57" cy="0" r="4" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 129;0 -29" keyTimes="0;1" dur="8.333333333333334s" begin="-5.25s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="68" cy="0" r="5" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 112;0 -12" keyTimes="0;1" dur="8.333333333333334s" begin="-0.75s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="73" cy="0" r="6" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 151;0 -51" keyTimes="0;1" dur="8.333333333333334s" begin="-7.583333333333333s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="86" cy="0" r="6" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 145;0 -45" keyTimes="0;1" dur="8.333333333333334s" begin="-6.75s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="75" cy="0" r="8" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 125;0 -25" keyTimes="0;1" dur="8.333333333333334s" begin="-1.9166666666666667s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="29" cy="0" r="3" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 113;0 -13" keyTimes="0;1" dur="8.333333333333334s" begin="-5.75s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="70" cy="0" r="8" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 126;0 -26" keyTimes="0;1" dur="8.333333333333334s" begin="-6.25s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="17" cy="0" r="2" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 114;0 -14" keyTimes="0;1" dur="8.333333333333334s" begin="-3.6666666666666665s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="19" cy="0" r="6" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 141;0 -41" keyTimes="0;1" dur="8.333333333333334s" begin="-6.416666666666667s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="28" cy="0" r="7" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 150;0 -50" keyTimes="0;1" dur="8.333333333333334s" begin="-4.333333333333333s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="52" cy="0" r="8" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 118;0 -18" keyTimes="0;1" dur="8.333333333333334s" begin="-6.416666666666667s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="74" cy="0" r="6" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 107;0 -7" keyTimes="0;1" dur="8.333333333333334s" begin="-0.25s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="17" cy="0" r="6" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 152;0 -52" keyTimes="0;1" dur="8.333333333333334s" begin="-3.4166666666666665s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="21" cy="0" r="8" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 146;0 -46" keyTimes="0;1" dur="8.333333333333334s" begin="-5.75s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="37" cy="0" r="4" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 141;0 -41" keyTimes="0;1" dur="8.333333333333334s" begin="-4.25s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="2" cy="0" r="6" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 143;0 -43" keyTimes="0;1" dur="8.333333333333334s" begin="-3.3333333333333335s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="15" cy="0" r="3" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 128;0 -28" keyTimes="0;1" dur="8.333333333333334s" begin="-2.25s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="15" cy="0" r="5" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 149;0 -49" keyTimes="0;1" dur="8.333333333333334s" begin="-1.4166666666666667s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="68" cy="0" r="3" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 129;0 -29" keyTimes="0;1" dur="8.333333333333334s" begin="-7s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="90" cy="0" r="5" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 109;0 -9" keyTimes="0;1" dur="8.333333333333334s" begin="-4.583333333333333s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="24" cy="0" r="6" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 108;0 -8" keyTimes="0;1" dur="8.333333333333334s" begin="-6.083333333333333s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="14" cy="0" r="4" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 134;0 -34" keyTimes="0;1" dur="8.333333333333334s" begin="-7.583333333333333s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="93" cy="0" r="3" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 138;0 -38" keyTimes="0;1" dur="8.333333333333334s" begin="-7.583333333333333s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="88" cy="0" r="6" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 148;0 -48" keyTimes="0;1" dur="8.333333333333334s" begin="-5.583333333333333s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="36" cy="0" r="7" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 116;0 -16" keyTimes="0;1" dur="8.333333333333334s" begin="-3.25s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="24" cy="0" r="7" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 119;0 -19" keyTimes="0;1" dur="8.333333333333334s" begin="-2.25s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="63" cy="0" r="6" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 123;0 -23" keyTimes="0;1" dur="8.333333333333334s" begin="-2.3333333333333335s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="74" cy="0" r="7" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 154;0 -54" keyTimes="0;1" dur="8.333333333333334s" begin="-2.0833333333333335s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="23" cy="0" r="5" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 109;0 -9" keyTimes="0;1" dur="8.333333333333334s" begin="-7.833333333333333s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="12" cy="0" r="4" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 119;0 -19" keyTimes="0;1" dur="8.333333333333334s" begin="-7.333333333333333s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="50" cy="0" r="5" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 147;0 -47" keyTimes="0;1" dur="8.333333333333334s" begin="-4.166666666666667s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="6" cy="0" r="7" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 151;0 -51" keyTimes="0;1" dur="8.333333333333334s" begin="-4.916666666666667s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="62" cy="0" r="3" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 139;0 -39" keyTimes="0;1" dur="8.333333333333334s" begin="-5.666666666666667s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="48" cy="0" r="5" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 117;0 -17" keyTimes="0;1" dur="8.333333333333334s" begin="-3.5833333333333335s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="37" cy="0" r="4" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 119;0 -19" keyTimes="0;1" dur="8.333333333333334s" begin="-1.1666666666666667s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="39" cy="0" r="3" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 141;0 -41" keyTimes="0;1" dur="8.333333333333334s" begin="-3s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="71" cy="0" r="4" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 137;0 -37" keyTimes="0;1" dur="8.333333333333334s" begin="-2.5s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="61" cy="0" r="3" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 125;0 -25" keyTimes="0;1" dur="8.333333333333334s" begin="-1.6666666666666667s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="64" cy="0" r="3" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 121;0 -21" keyTimes="0;1" dur="8.333333333333334s" begin="-7.5s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="44" cy="0" r="6" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 144;0 -44" keyTimes="0;1" dur="8.333333333333334s" begin="-2.8333333333333335s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="44" cy="0" r="6" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 136;0 -36" keyTimes="0;1" dur="8.333333333333334s" begin="-5.833333333333333s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="62" cy="0" r="4" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 116;0 -16" keyTimes="0;1" dur="8.333333333333334s" begin="-2.75s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="33" cy="0" r="4" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 143;0 -43" keyTimes="0;1" dur="8.333333333333334s" begin="-5.5s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="57" cy="0" r="6" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 108;0 -8" keyTimes="0;1" dur="8.333333333333334s" begin="-0.25s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="6" cy="0" r="6" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 134;0 -34" keyTimes="0;1" dur="8.333333333333334s" begin="-6.25s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="42" cy="0" r="4" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 125;0 -25" keyTimes="0;1" dur="8.333333333333334s" begin="-3.5833333333333335s" repeatCount="indefinite"></animateTransform>
</circle><circle cx="71" cy="0" r="7" fill="#dce4eb">
<animateTransform attributeName="transform" type="translate" values="0 155;0 -55" keyTimes="0;1" dur="8.333333333333334s" begin="-2.5833333333333335s" repeatCount="indefinite"></animateTransform>
</circle></pattern></defs>
<circle fill="url(#ldio-xij79apona8-pattern)" cx="50" cy="50" r="40" stroke="#85a2b6" stroke-width="5"></circle>
</svg>
<figcaption>${loadingMessage}</figcaption>
  </figure>
  `;
};

const createEmptyCard = () => {
  return /* html */ `
    <article class="user-card user-card-empty">
      표시할 데이터가 존재하지 않습니다. 😭
    </article>
  `;
};

const createErrorCard = (errorMessage = "알 수 없는 오류가 발생") => {
  return /* html */ `
    <article class="user-card user-card-error">
      ${errorMessage}
    </article>
  `;
};

const createUserCard = ({
  id = "",
  name = "",
  email = "",
  website = "",
} = {}) => {
  return /* html */ `
    <article class="user-card" data-index="user-${id}">
      <h3 class="user-name">${name}</h3>
      <div class="user-resource-info">
        <a class="user-email" href="mailto:${email}">${email}</a>
        <a class="user-website" href="http://${website}" target="_blank" rel="noopener noreferer">${website}</a>
      </div>
    </article>
  `;
};

export const renderSpinner = (target = null) => {
  target.insertAdjacentHTML("beforeend", createSpinner());
};

export const removeSpinner = (target = null, spinnerSelector = ".spinner") => {
  target.querySelector(spinnerSelector).remove();
};

const renderUserCard = (
  functionType = createUserCard, // 함수 참조
  userData = {},
  target = null
) => {
  target?.insertAdjacentHTML("beforeend", functionType(userData));

  //명시적으로 함수임을 표시하려고 call씀. 안써도 동작은 똑같음.
  // target?.insertAdjacentHTML('beforeend', functionType.call(this, userData));
};

const displayErrorCard = () => {
  return renderUserCard(
    createErrorCard.bind(this, errorMessage),
    null,
    targetElement
  );
};

export const renderUserList = (
  userList = [],
  targetElement = null,
  error = null
) => {
  if (!targetElement || targetElement.nodeType !== document.ELEMENT_NODE) {
    return displayErrorCard("targetElement는 요소노드가 아닙니다.");
  }

  if (error) {
    return displayErrorCard(error.message);
  }

  if (!Array.isArray(userList)) {
    return displayErrorCard("userList 인자는 배열 타입이어야 합니다.");
  }

  if (userList.length === 0) {
    renderUserCard(createEmptyCard, null, targetElement);
  } else {
    userList.forEach((userData) =>
      renderUserCard(createUserCard, userData, targetElement)
    );
  }

  return targetElement;
};
