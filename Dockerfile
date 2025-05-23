FROM node:alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

#RUN yarn build
RUN yarn start -p 3000


FROM nginx:alpine

#COPY --from=builder /app/.next /usr/share/nginx/html/.next
#COPY --from=builder /app/.next/server/app /usr/share/nginx/html/app
#COPY --from=builder /app/public /usr/share/nginx/html/public
#COPY --from=builder /app/next.config.ts /usr/share/nginx/html/next.config.ts

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 3000
EXPOSE 11434

CMD ["nginx", "-g", "daemon off;"]
