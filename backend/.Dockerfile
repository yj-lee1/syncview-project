# Node.js 18 버전 사용
FROM node:18

# 앱이 실행될 디렉토리 지정
WORKDIR /app

# package*.json 복사 후 의존성 설치
COPY package*.json ./
RUN npm install

# 나머지 파일 전체 복사
COPY . .

# GCP Cloud Run은 8080 포트로 실행
EXPOSE 8080

# 앱 시작 명령어
CMD [ "node", "index.js" ]
