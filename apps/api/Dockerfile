FROM node:18-alpine AS base

RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /app
COPY ./apps/api/package.json ./apps/api/package.json
COPY ./apps/api/tsconfig.json ./apps/api/tsconfig.json
# COPY package.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
COPY ./packages ./packages
RUN pnpm i --workspace
RUN pnpm add @gob/test --filter api

FROM base AS build

WORKDIR /app
COPY . .
# COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/apps/api/package.json ./apps/api/package.json
WORKDIR /app/apps/api/
RUN pnpm build
# RUN pnpm prune --prod


FROM base AS deploy

WORKDIR /app
COPY --from=build /app/dist/ ./dist/
COPY --from=build /app/node_modules ./node_modules/

# CMD [ "pnpm", "run", "start:dev"]