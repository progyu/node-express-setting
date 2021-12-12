- ts-node는 개발용, 실제 배포 시에는 tsc를 활용하여 자바스크립트로 변환 후 배포

- moduleResolution 타입 찾는 순서! 타입스크립트가 어떤 곳을 먼저 보고 타입을 해석하는지? => npx tsc --traceResolution

- middleWare: 중간에서 요청을 가로채 무언가를 작업 ex) 로그인이 되어있는지 안되어있는지 판단 후 결정할 때, setting은 Routing 전에 해야 한다.
