# Build container
FROM node:12-alpine AS build

WORKDIR /usr/src/projectideas-onboarding/
COPY . /usr/src/projectideas-onboarding/

RUN yarn install && yarn build

# Runtime container
FROM node:12-alpine

COPY --from=build /usr/src/projectideas-onboarding/server/ /usr/src/projectideas-onboarding/server/
COPY --from=build /usr/src/projectideas-onboarding/client/ /usr/src/projectideas-onboarding/client/

WORKDIR /usr/src/projectideas-onboarding/server/

EXPOSE 3000
CMD ["yarn", "start"]
