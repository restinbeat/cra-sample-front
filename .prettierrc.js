module.exports = {
  // 들여쓰기 규칙
  tabWidth: 2, // 들여쓰기 크기를 2칸으로 설정
  useTabs: false, // 탭 대신 스페이스 사용

  // 코드 스타일 규칙
  semi: true, // 명령문 끝에 세미콜론을 추가
  singleQuote: true, // 문자열에 작은 따옴표 사용
  trailingComma: 'es5', // 마지막 요소에도 콤마 추가 (ES5 이하에서 지원)
  bracketSpacing: true, // 객체 리터럴에서 중괄호와 내용 사이에 공백 삽입
  jsxBracketSameLine: false, // JSX의 닫는 태그는 새 줄에 배치

  // 라인 길이
  printWidth: 80, // 한 줄의 최대 길이를 80자로 설정

  // JSX 관련 규칙
  jsxSingleQuote: false, // JSX 내에서 큰 따옴표 사용

  // 화살표 함수 관련 규칙
  arrowParens: 'always', // 화살표 함수의 매개변수가 하나여도 괄호 사용
};
