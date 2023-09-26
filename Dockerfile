FROM node:18.18.0 as dependencies
WORKDIR /adflex-fe
COPY package.json ./
RUN yarn install --frozen-lockfile

FROM node:18.18.0 as builder
WORKDIR /adflex-fe
COPY . .
COPY --from=dependencies /adflex-fe/node_modules ./node_modules
RUN yarn build

FROM node:18.18.0 as runner
WORKDIR /adflex-fe
ENV NODE_ENV production
ARG NEXT_PUBLIC_RECEIVE_EMAIL=jobs@adflex.vn
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /adflex-fe/next.config.js ./
COPY --from=builder /adflex-fe/public ./public
COPY --from=builder /adflex-fe/.next ./.next
COPY --from=builder /adflex-fe/node_modules ./node_modules
COPY --from=builder /adflex-fe/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
