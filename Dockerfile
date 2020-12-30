# Build container
FROM node:12-alpine AS build

WORKDIR /usr/src/projectideas-onboarding2020/
COPY . /usr/src/projectideas-onboarding2020/

RUN yarn install && yarn build

# Runtime container
FROM node:12-alpine

COPY --from=build /usr/src/projectideas-onboarding2020/server/ /usr/src/projectideas-onboarding2020/server/
COPY --from=build /usr/src/projectideas-onboarding2020/client/ /usr/src/projectideas-onboarding2020/client/

WORKDIR /usr/src/projectideas-onboarding2020/server/

EXPOSE 3000
CMD ["yarn", "start"]
